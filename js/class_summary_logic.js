// js/class_summary_logic.js

const CURRENT_TEACHER_ID_KEY_SUMMARY = 'currentTeacherId'; // Ensure this matches other files
let currentTeacherSummary = null;
let currentClassIdSummary = null;
let currentClassDetailsSummary = null;
let studentsInClassSummary = [];

async function initializeClassSummaryPage() {
    //document.getElementById('currentYear').textContent = new Date().getFullYear();
    const loadingSpinner = document.getElementById('loadingSpinner');
    const summaryContent = document.getElementById('summaryContent');
    const errorDiv = document.getElementById('loadingError');

    const params = new URLSearchParams(window.location.search);
    currentClassIdSummary = params.get('class_id');

    if (!currentClassIdSummary) {
        showSummaryError("No class ID provided. Please navigate from the class details page.");
        loadingSpinner.style.display = 'none';
        return;
    }

    try {
        await initializeDatabase(); // From teachersdataapi.js
        console.log("Database initialized for class summary page.");

        const teacherId = localStorage.getItem(CURRENT_TEACHER_ID_KEY_SUMMARY);
        if (!teacherId) {
            alert("No teacher information found. Redirecting to setup."); // Use alert for critical redirects
            window.location.href = 'setup.html';
            return;
        }
        currentTeacherSummary = await getTeacher(teacherId);
        if (!currentTeacherSummary) {
            alert("Teacher profile not found. Please complete setup.");
            localStorage.removeItem(CURRENT_TEACHER_ID_KEY_SUMMARY);
            window.location.href = 'setup.html';
            return;
        }
        updateUserUISummary(currentTeacherSummary);

        currentClassDetailsSummary = await getClassById(currentClassIdSummary);
        if (!currentClassDetailsSummary || currentClassDetailsSummary.teacher_id !== currentTeacherSummary.teacher_id) {
            showSummaryError("Class not found or you do not have permission to view this class summary.");
            loadingSpinner.style.display = 'none';
            return;
        }

        document.getElementById('classNameHeader').textContent = escapeHTMLSummary(currentClassDetailsSummary.class_name);
        const classLinkBreadcrumb = document.getElementById('classLinkBreadcrumb');
        classLinkBreadcrumb.href = `class_details.html?class_id=${currentClassIdSummary}`;
        classLinkBreadcrumb.textContent = `Class: ${escapeHTMLSummary(currentClassDetailsSummary.class_name)}`;
        
        studentsInClassSummary = await getStudentsInClass(currentClassIdSummary);


        // Load all summary data
        await loadLessonImplementationStats();
        await loadRecentActivityPerformance(); // Initial load with default filter

        document.getElementById('recentLessonsFilter').addEventListener('change', loadRecentActivityPerformance);


        loadingSpinner.style.display = 'none';
        summaryContent.style.display = 'block';

    } catch (error) {
        console.error("Error on class summary page:", error);
        showSummaryError("An error occurred while loading class summary: " + error.message + (error.stack ? `\n${error.stack}` : ''));
        loadingSpinner.style.display = 'none';
    }
}

function updateUserUISummary(teacher) {
    document.getElementById('teacherNameDisplay').textContent = teacher.full_name;
    const initials = teacher.full_name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
    document.getElementById('userAvatar').textContent = initials;
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) { // Check if exists to prevent errors if called from non-HTML context
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm("Are you sure you want to logout?")) {
                localStorage.removeItem(CURRENT_TEACHER_ID_KEY_SUMMARY);
                window.location.href = 'setup.html';
            }
        });
    }
}

function showSummaryError(message) {
    const errorDiv = document.getElementById('loadingError');
    const summaryContent = document.getElementById('summaryContent');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
    if (summaryContent) {
        summaryContent.style.display = 'none';
    }
    const pageTitle = document.getElementById('pageTitle');
    if(pageTitle) pageTitle.textContent = "Error Loading Summary";
}

async function loadLessonImplementationStats() {
    // Reading Program
    const allReadingLessons = await getProgramUnits("Reading").then(units => 
        Promise.all(units.map(unit => getLessonsForUnit(unit.unit_id)))
    ).then(lessonsByUnit => lessonsByUnit.flat());
    
    const implementedReadingLessons = await getImplementationsForClass(currentClassIdSummary)
        .then(impls => impls.filter(impl => {
            const lesson = allReadingLessons.find(l => l.lesson_id === impl.lesson_id);
            return lesson && lesson.unit_id && db.programUnits.get(lesson.unit_id).then(u => u && u.program_type === "Reading");
        }));
        // More accurate: filter implementations based on program_type of their lesson's unit
    let actualImplementedReadingCount = 0;
    for (const impl of await getImplementationsForClass(currentClassIdSummary)) {
        const lesson = await getLesson(impl.lesson_id);
        if (lesson) {
            const unit = await getProgramUnit(lesson.unit_id);
            if (unit && unit.program_type === "Reading" && impl.completed) { // Count only completed ones
                actualImplementedReadingCount++;
            }
        }
    }


    document.getElementById('readingTotalLessons').textContent = allReadingLessons.length;
    document.getElementById('readingImplementedLessons').textContent = actualImplementedReadingCount;
    const readingPercent = allReadingLessons.length > 0 ? (actualImplementedReadingCount / allReadingLessons.length) * 100 : 0;
    document.getElementById('readingProgressBar').style.width = `${readingPercent.toFixed(0)}%`;
    document.getElementById('readingProgressBar').setAttribute('aria-valuenow', readingPercent.toFixed(0));
    document.getElementById('readingProgressPercent').textContent = `${readingPercent.toFixed(0)}%`;

    // Numeracy Program
    const allNumeracyLessons = await getProgramUnits("Numeracy").then(units => 
        Promise.all(units.map(unit => getLessonsForUnit(unit.unit_id)))
    ).then(lessonsByUnit => lessonsByUnit.flat());

    let actualImplementedNumeracyCount = 0;
    for (const impl of await getImplementationsForClass(currentClassIdSummary)) {
        const lesson = await getLesson(impl.lesson_id);
        if (lesson) {
            const unit = await getProgramUnit(lesson.unit_id);
            if (unit && unit.program_type === "Numeracy" && impl.completed) { // Count only completed ones
                actualImplementedNumeracyCount++;
            }
        }
    }

    document.getElementById('numeracyTotalLessons').textContent = allNumeracyLessons.length;
    document.getElementById('numeracyImplementedLessons').textContent = actualImplementedNumeracyCount;
    const numeracyPercent = allNumeracyLessons.length > 0 ? (actualImplementedNumeracyCount / allNumeracyLessons.length) * 100 : 0;
    document.getElementById('numeracyProgressBar').style.width = `${numeracyPercent.toFixed(0)}%`;
    document.getElementById('numeracyProgressBar').setAttribute('aria-valuenow', numeracyPercent.toFixed(0));
    document.getElementById('numeracyProgressPercent').textContent = `${numeracyPercent.toFixed(0)}%`;
}


async function loadRecentActivityPerformance() {
    const container = document.getElementById('recentActivityPerformanceContainer');
    container.innerHTML = '<p class="text-muted">Loading recent activity performance...</p>';
    const filterValue = document.getElementById('recentLessonsFilter').value;

    try {
        let implementations = await getImplementationsForClass(currentClassIdSummary);
        // Filter for completed implementations and sort by date descending
        implementations = implementations.filter(impl => impl.completed).sort((a, b) => new Date(b.implementation_date) - new Date(a.implementation_date));

        if (filterValue !== "all") {
            implementations = implementations.slice(0, parseInt(filterValue));
        }

        if (implementations.length === 0) {
            container.innerHTML = '<p class="text-muted">No completed lesson implementations found for this class to summarize activity performance.</p>';
            return;
        }

        let html = '<div class="list-group">';
        for (const impl of implementations) {
            const lesson = await getLesson(impl.lesson_id);
            if (!lesson) continue;

            const activities = await getActivitiesForLesson(impl.lesson_id);
            if (!activities || activities.length === 0) continue;

            html += `
                <div class="list-group-item mb-3">
                    <h5 class="mb-1">${escapeHTMLSummary(lesson.lesson_title_ar)} 
                        <small class="text-muted">(Implemented: ${new Date(impl.implementation_date).toLocaleDateString()})</small>
                    </h5>`;

            for (const activity of activities) {
                const performances = await getActivityPerformanceForImplementation(impl.implementation_id);
                const activityPerformances = performances.filter(p => p.activity_id === activity.activity_id);
                
                let statusCounts = { "Not Started": 0, "In Progress": 0, "Completed": 0, "Needs Support": 0, "Mastered": 0 };
                
                // Initialize counts for all students in class as "Not Started" by default for this activity
                statusCounts["Not Started"] = studentsInClassSummary.length; 

                activityPerformances.forEach(perf => {
                    if (statusCounts[perf.performance_status] !== undefined) {
                        statusCounts[perf.performance_status]++;
                        // Decrement "Not Started" if another status is found for this student
                        if (perf.performance_status !== "Not Started") {
                             statusCounts["Not Started"]--;
                        }
                    }
                });
                // Ensure "Not Started" is not negative if a student has a record but it's "Not Started"
                statusCounts["Not Started"] = Math.max(0, statusCounts["Not Started"]);


                html += `
                    <div class="ms-3 mt-2">
                        <strong>${escapeHTMLSummary(activity.activity_name_ar)}:</strong>`;
                
                let summaryItems = [];
                if (statusCounts["Completed"] > 0) summaryItems.push(`<span class="badge bg-success-lt me-1">${statusCounts["Completed"]} Completed</span>`);
                if (statusCounts["Mastered"] > 0) summaryItems.push(`<span class="badge bg-teal-lt me-1">${statusCounts["Mastered"]} Mastered</span>`);
                if (statusCounts["Needs Support"] > 0) summaryItems.push(`<span class="badge bg-warning-lt me-1">${statusCounts["Needs Support"]} Needs Support</span>`);
                if (statusCounts["In Progress"] > 0) summaryItems.push(`<span class="badge bg-info-lt me-1">${statusCounts["In Progress"]} In Progress</span>`);
                if (statusCounts["Not Started"] > 0 && studentsInClassSummary.length > 0) summaryItems.push(`<span class="badge bg-secondary-lt me-1">${statusCounts["Not Started"]} Not Started</span>`);
                
                if (summaryItems.length > 0) {
                    html += ` <span class="ms-2">${summaryItems.join(' ')}</span>`;
                } else if (studentsInClassSummary.length > 0) {
                     html += ` <span class="ms-2 badge bg-secondary-lt">${studentsInClassSummary.length} Not Started (No records)</span>`;
                } else {
                    html += ` <span class="ms-2 text-muted">No students in class to track.</span>`;
                }
                html += `</div>`;
            }
            html += `</div>`; // End list-group-item
        }
        html += `</div>`; // End list-group
        container.innerHTML = html;

    } catch (error) {
        console.error("Error loading recent activity performance:", error);
        container.innerHTML = `<p class="text-danger">Could not load activity performance summary. ${error.message}</p>`;
    }
}

function escapeHTMLSummary(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>"']/g, function (match) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[match];
    });
}
