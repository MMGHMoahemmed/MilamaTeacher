// js/translations.js

// Object to hold all your Arabic translations
// The keys here will match the values you put in the data-translate attribute
const MIALAMA_TEACHER_TRANSLATIONS_AR = {
  // General UI
  "app.title": "تطبيق المعلم - معلامة",
  "loading": "جاري التحميل...",
  "save": "حفظ",
  "cancel": "إلغاء",
  "edit": "تعديل",
  "delete": "حذف",
  "confirm": "تأكيد",
  "close": "إغلاق",
  "yes": "نعم",
  "no": "لا",
  "search.placeholder": "ابحث هنا...",
  "error.generic": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
  "success.generic": "تم بنجاح!",

  // Navigation / Sidebar
  "nav.dashboard": "لوحة التحكم",
  "nav.students": "الطلاب",
  "nav.classes": "الفصول الدراسية",
  "nav.assignments": "الواجبات",
  "nav.grades": "الدرجات",
  "nav.profile": "الملف الشخصي",
  "nav.settings": "الإعدادات",
  "nav.logout": "تسجيل الخروج",

  // Example Page Specific
  "dashboard.welcome": "أهلاً بك، {{teacherName}}!", // {{teacherName}} is a placeholder
  "dashboard.quickStats": "إحصائيات سريعة",
  "dashboard.totalStudents": "إجمالي الطلاب",
  "dashboard.activeClasses": "الفصول النشطة",



   // Page Title
   "page.index.title": "لوحة التحكم - منصة معلامة",

   // Navbar
   "alt.logo.mialamaPlatform": "شعار منصة معلامة", // For img alt
   "nav.programExplorer": "مستكشف البرامج",
   "tooltip.appSetup": "إعدادات التطبيق",
   "button.setup": "الإعدادات",
   "aria.openUserMenu": "فتح قائمة المستخدم",
   "text.teacherRole": "معلم",
   "dropdown.profile": "الملف الشخصي", // You might have "nav.profile", this is specific to dropdown
   "dropdown.appSetup": "إعدادات التطبيق",
   "dropdown.logout": "تسجيل الخروج", // You might have "nav.logout"
 
   // Page Header
   "page.index.myClassesTitle": "فصولي الدراسية",
   "text.classCount.zero": "لا توجد فصول",
   "text.classCount.singular": "فصل واحد",
   "text.classCount.plural": "{{count}} فصول", // Basic plural, for Arabic real pluralization is complex
   "button.createNewClass": "إنشاء فصل جديد",
 
   // Page Body
   "message.noClasses": "لم تقم بإنشاء أي فصول دراسية بعد. انقر فوق \"إنشاء فصل جديد\" للبدء.",
   
   // Dynamic class card content
   "text.gradePrefix": "المستوى:",
   "text.academicYearPrefix": "العام الدراسي:",
   "button.viewClass": "عرض الفصل",
 
   // Footer
   "text.mialamaTeacherPlatform": "منصة معلامة للمعلمين",
   "text.copyright": "حقوق النشر",
   "text.allRightsReserved": "جميع الحقوق محفوظة.",
 
   // Create Class Modal
   "modal.createClass.title": "إنشاء فصل جديد",
   "aria.closeButton": "إغلاق", // For modal close buttons
   "form.label.className": "اسم الفصل",
   "form.placeholder.classNameExample": "مثال: الصف الأول - الشعبة أ",
   "form.label.academicYear": "العام الدراسي",
   "form.placeholder.academicYearExample": "مثال: 2024-2025",
   "form.label.gradeLevel": "المستوى الدراسي",
   "form.placeholder.gradeLevelExample": "مثال: 1 للمستوى الأول",
   "button.createClass": "إنشاء الفصل",
 
   // Edit Class Modal
   "modal.editClass.title": "تعديل الفصل",
   "button.saveChanges": "حفظ التغييرات",
 
   // JavaScript Messages (Alerts, displayMessage content)
   "alert.noTeacherInfo": "لم يتم العثور على معلومات المعلم. يتم الآن إعادة توجيهك إلى صفحة الإعدادات.",
   "alert.teacherProfileNotFound": "لم يتم العثور على ملف تعريف المعلم. يرجى إكمال الإعدادات.",
   "alert.genericErrorRefresh": "حدث خطأ. يرجى محاولة تحديث الصفحة. إذا استمرت المشكلة، حاول الإعداد مرة أخرى.",
   "confirm.logout": "هل أنت متأكد أنك تريد تسجيل الخروج؟ سيؤدي هذا إلى مسح بيانات الجلسة الحالية من هذا المتصفح.",
   "message.loggedOut": "لقد تم تسجيل خروجك بنجاح.",
   "alert.fillAllFields": "يرجى ملء جميع الحقول المطلوبة بشكل صحيح.",
   "alert.teacherInfoMissingCreateClass": "معلومات المعلم مفقودة. لا يمكن إنشاء الفصل.",
   "message.classCreatedSuccess": "تم إنشاء الفصل بنجاح!",
   "error.creatingClass": "خطأ في إنشاء الفصل: {{message}}",
   "message.classCouldNotFindEdit": "تعذر العثور على تفاصيل الفصل للتعديل.", // Not used in current index.html JS, but good to have
   "error.preparingClassEdit": "خطأ في تجهيز الفصل للتعديل: {{message}}",
   "alert.fillAllFieldsEdit": "يرجى ملء جميع الحقول المطلوبة بشكل صحيح للتعديل.",
   "message.classUpdatedSuccess": "تم تحديث الفصل بنجاح!",
   "error.updatingClass": "خطأ في تحديث الفصل: {{message}}",
   "confirm.deleteClass": "هل أنت متأكد أنك تريد حذف الفصل \"{{className}}\"؟ سيؤدي هذا الإجراء أيضًا إلى إزالة جميع الطلاب المرتبطين وبيانات تقدمهم. لا يمكن التراجع عن هذا الإجراء.",
   "message.classDeletedSuccess": "تم حذف الفصل \"{{className}}\" بنجاح.",
   "error.deletingClass": "خطأ في حذف الفصل: {{message}}",
   // --- setup.html ---
  "page.setup.title": "إعداد التطبيق - منصة معلامة",
  // "alt.logo.mialamaPlatform": "شعار منصة معلامة", // Already exists from index.html, ensure it's there

  "setup.pageTitle.main": "إعداد التطبيق",
  "setup.pageTitle.initError": "خطأ في التهيئة",

  "setup.teacherInfo.title": "معلومات المعلم",
  "setup.teacherInfo.status.default": "الرجاء إدخال بياناتك للبدء.",
  "setup.teacherInfo.status.welcomeBack": "أهلاً بعودتك، <strong>{{teacherName}}</strong>! يمكنك تحديث بياناتك أدناه أو المتابعة إلى لوحة التحكم.",
  "setup.teacherInfo.status.initError": "تعذرت تهيئة التطبيق. يرجى التأكد من أن متصفحك يدعم IndexedDB والمحاولة مرة أخرى. الخطأ: {{errorMessage}}",
  "setup.teacherInfo.status.enterDetailsLoadProgram": "الرجاء إدخال بياناتك للبدء. سيتم تحميل محتوى البرنامج تلقائيًا.",

  "form.label.fullName": "الاسم الكامل",
  "form.placeholder.fullName": "أدخل اسمك الكامل",
  "form.label.emailAddress": "البريد الإلكتر الإلكتروني", // Corrected typo from "البريد الإلكتروني"
  "form.placeholder.email": "أدخل بريدك الإلكتروني",
  "button.saveTeacherInfo": "حفظ معلومات المعلم",
  "button.updateTeacherInfo": "تحديث معلومات المعلم",

  "setup.proceed.title.complete": "اكتمل الإعداد!",
  "setup.proceed.title.profileActive": "الملف الشخصي نشط",
  "setup.proceed.title.profileSaved": "تم حفظ الملف الشخصي!",

  "setup.proceed.message.profileSavedFirstTime": "تم حفظ ملفك الشخصي. يتم تحميل محتوى البرنامج الأولي إذا كانت هذه هي المرة الأولى لك. يمكنك الآن المتابعة إلى التطبيق الرئيسي.",
  "setup.proceed.message.profileActive": "ملفك الشخصي نشط. يمكنك تحديثه أو المتابعة إلى لوحة التحكم.",
  "setup.proceed.message.profileSavedSuccessfully": "تم حفظ ملفك الشخصي بنجاح. يمكنك الآن المتابعة إلى لوحة التحكم.",

  "button.goToDashboard": "الذهاب إلى لوحة التحكم",
  "setup.footer.textBeforeLink": "إذا كنت قد أعددت ملفك الشخصي بالفعل، يمكنك ",
  // "text.goToDashboardLink" key should already exist for the link text itself, e.g., "الذهاب إلى لوحة التحكم"

  // JavaScript alerts and messages for setup.html
  "alert.fullNameAndEmailRequired": "الاسم الكامل والبريد الإلكتروني مطلوبان.",
  "alert.emailInUseAnotherProfile": "عنوان البريد الإلكتروني هذا مستخدم بالفعل من قبل ملف تعريف آخر. يرجى استخدام بريد إلكتروني مختلف.",
  "alert.emailInUseCheckLogin": "عنوان البريد الإلكتروني هذا مستخدم بالفعل. إذا كان هذا أنت، يرجى التحقق مما إذا كان بإمكانك تسجيل الدخول أو استعادة ملفك الشخصي.",
  "alert.teacherInfoSavedSuccess": "تم حفظ معلومات المعلم بنجاح!",
  "alert.couldNotSaveTeacherInfo": "تعذر حفظ معلومات المعلم. يرجى مراجعة وحدة التحكم بحثًا عن الأخطاء.",
  "alert.errorSavingTeacher": "خطأ في حفظ معلومات المعلم: {{errorMessage}}. تحقق من وحدة التحكم للحصول على التفاصيل.",

  // Console messages (optional, but good for consistency if developers look at console)
  "console.dbInitSetupPage": "تمت تهيئة قاعدة البيانات لصفحة الإعداد.",
  "console.errorInitDbSetupPage": "خطأ في تهيئة قاعدة البيانات في صفحة الإعداد: {{errorMessage}}",
  "console.errorSavingTeacherInfo": "خطأ في حفظ معلومات المعلم: {{errorMessage}}",

   // --- student_progress.html ---
   "page.studentProgress.title": "تقدم الطالب - منصة معلامة",
   // Navbar items like "nav.dashboard", "alt.logo.mialamaPlatform" should already exist
 
   // Breadcrumbs
   "breadcrumb.dashboard": "لوحة التحكم", // Likely same as nav.dashboard
   "breadcrumb.classDetails": "تفاصيل الفصل",
   "breadcrumb.studentProgress": "تقدم الطالب", // For the active item
 
   // Page Content
   "page.studentProgress.loadingTitle": "جاري تحميل تقدم الطالب...", // Initial H2 text
   "card.student.label": "الطالب:",
   "card.class.label": "الفصل:",
   "card.dob.label": "تاريخ الميلاد:",
   "card.gender.label": "الجنس:",
   "text.notApplicable": "غير متوفر", // For N/A values
 
   "heading.activityPerformanceOverview": "نظرة عامة على أداء الأنشطة",
   "form.label.filterByProgram": "تصفية حسب البرنامج:",
   "filter.allPrograms": "جميع البرامج",
   "filter.readingProgram": "القراءة",
   "filter.numeracyProgram": "الحساب",
 
   "message.noProgressRecorded.general": "لم يتم تسجيل أي تقدم في الأنشطة لهذا الطالب حتى الآن.",
   "message.noProgressRecorded.filtered": "لم يتم تسجيل أي تقدم في الأنشطة لهذا الطالب في برنامج {{programType}} لهذا الفصل.",
   "message.noProgressRecorded.anyProgram": "أي برنامج", // Used in the filtered message placeholder
 
   // Footer (ensure consistency or reuse existing keys if suitable)
   "footer.copyrightText": "حقوق النشر © {{year}} معلامة . جميع الحقوق محفوظة.",
 
   // JavaScript Messages & Logs
   "console.dbInitStudentProgress": "تمت تهيئة قاعدة البيانات لصفحة تقدم الطالب.",
   // "alert.noTeacherInfoSetup": "لم يتم العثور على معلومات المعلم. يتم الآن إعادة توجيهك إلى صفحة الإعدادات.", // Should exist from index/setup
   // "alert.teacherProfileNotFoundSetup": "لم يتم العثور على ملف تعريف المعلم. يرجى إكمال الإعدادات.", // Should exist from index/setup
   // "confirm.logout": "هل أنت متأكد أنك تريد تسجيل الخروج؟", // Should exist
 
   "error.missingStudentOrClassId": "معرّف الطالب أو معرّف الفصل غير متوفر. يرجى الانتقال من صفحة تفاصيل الفصل.",
   "error.studentNotFound": "لم يتم العثور على الطالب.",
   "error.classNotFoundOrPermission": "لم يتم العثور على الفصل أو ليس لديك إذن لعرض هذا الفصل.",
   "error.studentNotInClass": "الطالب لا ينتمي إلى الفصل المحدد.",
   "page.studentProgress.titleForStudent": "تقدم الطالب: {{studentName}}",
   "breadcrumb.classLinkText": "الفصل: {{className}}",
   "console.errorStudentProgressPage": "خطأ في صفحة تقدم الطالب: {{errorMessage}}",
   "error.loadingStudentProgress": "حدث خطأ أثناء تحميل تقدم الطالب: {{errorMessage}}",
   "page.title.error": "خطأ", // For page title when an error occurs
   "text.loadingProgress": "جاري تحميل التقدم...", // For spinner text
 
   // Performance Statuses (used as keys and for display)
   "status.completed": "مكتمل",
   "status.mastered": "متقن",
   "status.inProgress": "قيد التنفيذ",
   "status.needssupport": "يحتاج إلى دعم",
   "status.notstarted": "لم يبدأ بعد",
   "status.unknown": "غير معروف", // Fallback for status
 
   // Dynamic Content Labels
   "text.notesLabel": "ملاحظات:",
   "text.recordedLabel": "سُجل في:",
   "button.viewInLesson": "عرض في الدرس",
   "message.noMatchingProgressFilter": "لم يتم العثور على تقدم مطابق للتصفية المحددة.",


   // In js/translations.js, add to MIALAMA_TEACHER_TRANSLATIONS_AR:

  // --- profile.html ---
  "page.profile.title": "ملفي الشخصي - منصة معلامة",

  // Page Header
  "page.profile.mainTitle": "ملفي الشخصي والإعدادات",

  // Profile Update Card
  "card.profile.updateTitle": "تحديث معلومات الملف الشخصي",
  "form.label.fullName": "الاسم الكامل", // Reusing existing key, ensure consistency
  "form.placeholder.fullName": "أدخل اسمك الكامل", // Reusing existing key
  "form.label.emailAddress": "البريد الإلكتروني",  // Reusing existing key
  "form.placeholder.email": "أدخل بريدك الإلكتروني", // Reusing existing key
  "form.hint.emailIdentification": "يستخدم بريدك الإلكتروني للتعريف.",
  "button.profile.update": "تحديث الملف الشخصي",

  // Data Management Card
  "card.data.managementTitle": "إدارة البيانات",
  "data.export.title": "تصدير قاعدة البيانات",
  "data.export.description": "قم بتنزيل جميع بيانات التطبيق الخاصة بك (المعلمون والفصول والطلاب والتقدم وما إلى ذلك) كملف JSON. يمكن استخدام هذا كنسخة احتياطية أو لنقل البيانات.",
  "button.data.export": "تصدير قاعدة البيانات بالكامل",
  "data.import.title": "استيراد قاعدة البيانات",
  "data.import.description": "استيراد البيانات من ملف JSON الذي تم تصديره مسبقًا.",
  "data.import.warning": "تحذير: سيؤدي هذا إلى الكتابة فوق جميع البيانات الموجودة في تطبيقك. لا يمكن التراجع عن هذا الإجراء.",
  "form.hint.importFileSelect": "حدد ملف `.json` الذي تم تصديره مسبقًا من هذا التطبيق.",
  "button.data.import": "استيراد قاعدة البيانات",

  // JavaScript Messages & Logs (Profile Update)
  "console.dbInitProfilePage": "تمت تهيئة قاعدة البيانات لصفحة الملف الشخصي.",
  "alert.noTeacherInfoSetup": "لم يتم العثور على معلومات المعلم. يتم الآن إعادة توجيهك إلى صفحة الإعدادات.", // Reusing existing key
  "alert.teacherProfileNotFoundSetup": "لم يتم العثور على ملف تعريف المعلم. يرجى إكمال الإعدادات.", // Reusing existing key
  "confirm.logout": "هل أنت متأكد أنك تريد تسجيل الخروج؟", // Reusing existing key
  "alert.fullNameAndEmailRequired": "الاسم الكامل والبريد الإلكتروني مطلوبان.",
  "alert.emailInUseAnotherProfile": "عنوان البريد الإلكتروني هذا مستخدم بالفعل من قبل ملف تعريف آخر. يرجى استخدام بريد إلكتروني مختلف.",
  "alert.teacherInfoUpdatedSuccess": "تم تحديث الملف الشخصي بنجاح!",
  "alert.teacherInfoUpdateFailed": "فشل تحديث الملف الشخصي. يرجى المحاولة مرة أخرى.",
  "error.profile.loading": "حدث خطأ أثناء تحميل ملفك الشخصي: {{errorMessage}}",
  "error.profile.updating": "خطأ في تحديث الملف الشخصي: {{errorMessage}}",

  // JavaScript Messages & Logs (Data Management)
  "error.dbNotInitializedExport": "قاعدة البيانات غير مهيأة. لا يمكن التصدير.",
  "error.exportFunctionMissing": "وظيفة التصدير غير متوفرة. (وظيفة exportFullDatabase مفقودة)",
  "confirm.dataImportOverwrite": "تحذير: استيراد هذا الملف سيؤدي إلى استبدال جميع البيانات الموجودة (المعلمون والفصول والطلاب والتقدم، إلخ) بالكامل. لا يمكن التراجع عن هذا الإجراء.\n\nهل أنت متأكد تمامًا من أنك تريد المتابعة؟",
  "confirm.dataImportFinal": "للتأكيد، يرجى كتابة 'استبدال بياناتي' في المربع أدناه. هذه هي فرصتك الأخيرة للإلغاء.",
  "import.confirmationPhrase": "استبدال بياناتي", // The phrase the user needs to type
  "error.importFileNotSelected": "الرجاء تحديد ملف JSON للاستيراد.",
  "error.importInvalidFileType": "نوع الملف غير صالح. الرجاء تحديد ملف .json.",
  "error.fileRead": "خطأ في قراءة الملف المحدد.",
  "error.dbNotInitializedImport": "قاعدة البيانات غير مهيأة. لا يمكن الاستيراد.",
  "error.importFunctionMissing": "وظيفة الاستيراد غير متوفرة. (وظيفة importDatabaseFromJson مفقودة)",
  "alert.importSuccessfulRecommendRefresh": "تم استيراد قاعدة البيانات بنجاح! يوصى بتحديث التطبيق أو تسجيل الخروج وتسجيل الدخول مرة أخرى لضمان انعكاس جميع التغييرات.",
  "alert.importCompleteSessionCleared": "اكتمل الاستيراد. تم مسح جلستك. يرجى تحديث الصفحة وإعداد ملف تعريف المعلم الخاص بك مرة أخرى إذا لزم الأمر، أو تسجيل الدخول إذا كان ملف التعريف الخاص بك جزءًا من الاستيراد.",
  "alert.importFailed": "فشل استيراد قاعدة البيانات. تحقق من وحدة التحكم لمزيد من التفاصيل.",
  "alert.importCancelledByUser": "تم إلغاء الاستيراد من قبل المستخدم.",
  "alert.importCancelledPhraseMismatch": "تم إلغاء الاستيراد. عبارة التأكيد غير متطابقة.",


  // In js/translations.js, add to MIALAMA_TEACHER_TRANSLATIONS_AR:

  // --- program_explorer.html ---
  "page.programExplorer.title": "مستكشف البرنامج - منصة معلامة",
  // Navbar items like "nav.dashboard", "nav.programExplorer", "alt.logo.mialamaPlatform" should already exist

  // Page Header
  "page.programExplorer.mainTitle": "مستكشف محتوى البرنامج",
  "page.programExplorer.description": "تصفح الوحدات والدروس والأنشطة لجميع البرامج.",

  // Program Sections
  "program.reading.title": "برنامج القراءة",
  "program.reading.loading": "جاري تحميل وحدات برنامج القراءة...",
  "program.numeracy.title": "برنامج الحساب",
  "program.numeracy.loading": "جاري تحميل وحدات برنامج الحساب...",

  // Dynamic Content - General
  "text.unitLabel": "الوحدة {{unitNumber}}", // For (Unit X)
  "text.sequenceLabel": "تسلسل: {{sequenceNumber}}", // For (Seq: X)
  "text.clickToLoad.lessons": "انقر لتحميل الدروس...",
  "text.clickToLoad.activities": "انقر لتحميل تفاصيل الدرس والأنشطة...",
  "text.loadingUnits": "جاري تحميل الوحدات...",
  "text.loadingLessons": "جاري تحميل الدروس...",
  "text.loadingActivities": "جاري تحميل الأنشطة...",
  "text.noUnitsFound": "لم يتم العثور على وحدات لبرنامج {{programType}}.",
  "text.noLessonsFound": "لم يتم العثور على دروس لهذه الوحدة.",
  "text.noActivitiesFound": "لم يتم العثور على أنشطة لهذا الدرس.",
  "error.couldNotLoadUnits": "تعذر تحميل وحدات {{programType}}. {{errorMessage}}",
  "error.couldNotLoadLessons": "تعذر تحميل الدروس. {{errorMessage}}",
  "error.couldNotLoadActivities": "تعذر تحميل الأنشطة. {{errorMessage}}",
  "error.lessonDetailsNotFound": "لم يتم العثور على تفاصيل الدرس.",

  // Lesson Overview Card (in activity details)
  "lesson.overviewTitlePrefix": "نظرة عامة على الدرس:",
  "lesson.objectivesLabel": "الأهداف:",
  "lesson.materialsLabel": "المواد:",
  "lesson.teachingFocusLabel": "محور التدريس:",
  "lesson.estTimeLabel": "الوقت المقدر:",
  "lesson.minutesSuffix": "دقائق", // For "X mins"

  // Activities Section
  "activities.title": "الأنشطة:",
  "activity.typeLabel": "النوع:",
  "activity.teacherInstructionsLabel": "تعليمات المعلم:",
  "activity.expectedInteractionLabel": "التفاعل المتوقع:",
  "activity.assessmentNotesLabel": "ملاحظات التقييم:",
  "activity.pedagogicalNotesLabel": "ملاحظات تربوية:",
  "activity.classroomManagementLabel": "إدارة الفصل:",
  "activity.contentNashidLabel": "المحتوى (مثال: نشيد): {{nashidTitle}}",

  // JavaScript Messages & Logs
  "console.dbInitProgramExplorer": "تمت تهيئة قاعدة البيانات لصفحة مستكشف البرنامج.",
  "error.loadingProgramContent": "حدث خطأ أثناء تحميل محتوى البرنامج: {{errorMessage}}",

  // In js/translations.js, add to MIALAMA_TEACHER_TRANSLATIONS_AR:

  // --- class_summary.html ---
  "page.classSummary.title": "ملخص الفصل - منصة معلامة",
  // Navbar items like "nav.dashboard", "nav.programExplorer", "alt.logo.mialamaPlatform", "dropdown.profile", etc., should already exist.

  // Breadcrumbs
  // "breadcrumb.dashboard": "لوحة التحكم", // Should exist
  // "breadcrumb.classDetails": "تفاصيل الفصل", // Should exist
  "breadcrumb.classSummary": "ملخص الفصل", // For the active item

  // Page Header
  "page.classSummary.mainTitle": "ملخص تقدم الفصل",
  "page.classSummary.forClassLabel": "للفصل:",
  "text.loading": "جاري التحميل...", // Re-use if exists, or add

  // Lesson Implementation Summary Card
  "card.lessonImplementation.title": "تقدم تنفيذ الدروس",
  // "program.reading.title": "برنامج القراءة", // Should exist from program_explorer.html
  // "program.numeracy.title": "برنامج الحساب", // Should exist from program_explorer.html
  "text.totalLessons": "إجمالي الدروس:",
  "text.implementedLessons": "الدروس المنفذة:",
  "text.implementedPercentSuffix": "منفذة", // For "X% Implemented"

  // Recent Activity Performance Card
  "card.recentActivity.title": "أداء الأنشطة الأخيرة",
  "filter.last5Implemented": "آخر 5 دروس منفذة",
  "filter.last10Implemented": "آخر 10 دروس منفذة",
  "filter.allImplemented": "جميع الدروس المنفذة",
  "text.loadingRecentActivity": "جاري تحميل أداء الأنشطة الأخيرة...",

  // Loading Spinner Text
  "text.loadingClassSummary": "جاري تحميل ملخص الفصل...",

  // Footer
  // "text.copyright", "text.allRightsReserved" should exist

  // JavaScript Messages (to be used in class_summary_logic.js)
  "error.classSummary.criticalLoad": "خطأ حرج: تعذر تحميل منطق الصفحة.",
  "error.classSummary.classIdMissing": "معرّف الفصل مفقود. لا يمكن تحميل الملخص.",
  "error.classSummary.teacherInfoMissing": "معلومات المعلم مفقودة. لا يمكن تحميل الملخص.",
  "error.classSummary.classNotFound": "لم يتم العثور على الفصل.",
  "error.classSummary.loadingData": "حدث خطأ أثناء تحميل بيانات ملخص الفصل: {{errorMessage}}",
  "text.noImplementedLessonsFound": "لم يتم العثور على دروس منفذة لعرض ملخص الأداء.",


  // In js/translations.js, add to MIALAMA_TEACHER_TRANSLATIONS_AR:

  // --- class_details.html ---
  "page.classDetails.title": "تفاصيل الفصل - منصة مي علامة",
  // "breadcrumb.dashboard": "لوحة التحكم", // Should exist
  "breadcrumb.classDetails.active": "تفاصيل الفصل", // For the active breadcrumb, might be replaced by class name dynamically

  // Page Header
  "page.classDetails.loadingTitle": "جاري تحميل تفاصيل الفصل...",
  "page.classDetails.titleForClass": "الفصل: {{className}}",
  "page.classDetails.subHeader": "المستوى {{gradeLevel}} | العام الدراسي: {{academicYear}}",

  // Tabs
  "tab.students": "الطلاب ({{count}})",
  "tab.programReading": "برنامج القراءة",
  "tab.programNumeracy": "برنامج الحساب",
  "tab.classSummary": "ملخص الفصل",

  // Students Tab
  "studentsTab.title": "الطلاب في {{className}}",
  "button.exportStudentsCSV": "تصدير قائمة الطلاب (CSV)",
  "button.addStudent": "إضافة طالب",
  "text.noStudentsMessage": "لم يتم إضافة أي طلاب إلى هذا الفصل بعد.",
  "table.header.name": "الاسم",
  "table.header.dob": "تاريخ الميلاد",
  "table.header.gender": "الجنس",
  "table.header.actions": "الإجراءات",
  // "text.notApplicable": "غير متوفر", // Should exist
  "tooltip.viewProgress": "عرض التقدم",
  "tooltip.editStudent": "تعديل الطالب",
  "tooltip.deleteStudent": "حذف الطالب",

  // Add Student Modal
  "modal.addStudent.title": "إضافة طالب جديد",
  // "form.label.fullName": "الاسم الكامل", // Should exist
  "form.placeholder.studentFullName": "أدخل الاسم الكامل للطالب",
  "form.label.dob": "تاريخ الميلاد",
  "form.label.gender": "الجنس",
  "form.select.gender.default": "اختر الجنس",
  "form.select.gender.male": "ذكر",
  "form.select.gender.female": "أنثى",
  "form.select.gender.other": "آخر",
  "form.label.parentContact": "معلومات الاتصال بالوالدين (اختياري)",
  "form.placeholder.parentContact": "مثال: رقم الهاتف، البريد الإلكتروني",
  "button.addStudent.submit": "إضافة الطالب",
  // "cancel": "إلغاء", // Should exist

  // Edit Student Modal
  "modal.editStudent.title": "تعديل بيانات الطالب",
  // "button.saveChanges": "حفظ التغييرات", // Should exist

  // Program Tabs (Reading/Numeracy) - Content within these tabs
  "programTab.reading.title": "تنفيذ برنامج القراءة",
  "programTab.numeracy.title": "تنفيذ برنامج الحساب",
  "text.loadingProgramUnits": "جاري تحميل وحدات برنامج {{programType}}...",
  "text.noProgramUnitsFound": "لم يتم العثور على وحدات لبرنامج {{programType}} في قاعدة البيانات.",
  "error.couldNotLoadProgramUnits": "تعذر تحميل محتوى برنامج {{programType}}. {{errorMessage}}",
  "lesson.statusLabel": "الحالة:",
  "lesson.status.completed": "مكتمل",
  "lesson.status.notStarted": "لم يبدأ بعد",
  "button.markImplemented": "تحديد كمنفذ",
  "button.viewEditImplementation": "عرض/تعديل التنفيذ",
  "button.viewLessonActivities": "عرض الدرس والأنشطة",
  "text.noLessonsInUnit": "لم يتم العثور على دروس لهذه الوحدة.",

  // Mark Lesson Implemented Modal
  "modal.markLesson.title": "تحديد تنفيذ الدرس",
  "modal.markLesson.confirmText": "أنت على وشك تحديد الدرس: \"{{lessonTitle}}\" كمنفذ للفصل: \"{{className}}\".",
  "form.label.implementationDate": "تاريخ التنفيذ",
  "form.label.actualDuration": "المدة الفعلية (بالدقائق)",
  "form.placeholder.durationMinutes": "مثال: 45",
  "form.label.notesObservations": "ملاحظات/مشاهدات",
  "form.checkbox.markAsCompleted": "تحديد كمكتمل",
  "button.saveImplementation": "حفظ التنفيذ",

  // Class Summary Tab (Integrated) - Some keys might be reused from class_summary.html translations
  "summaryTab.title": "ملخص تقدم الفصل لـ {{className}}",
  // "summaryTab.lessonImplementation.title" -> use "card.lessonImplementation.title"
  // "summaryTab.lessonImplementation.reading.title" -> use "program.reading.title"
  // "summaryTab.lessonImplementation.numeracy.title" -> use "program.numeracy.title"
  // "summaryTab.lessonImplementation.totalLessons" -> use "text.totalLessons"
  "summaryTab.lessonImplementation.completedLessons": "الدروس المكتملة:", // Or use "text.implementedLessons"
  "summaryTab.lessonImplementation.completedPercentSuffix": "مكتملة", // For "X% Completed"
  // "summaryTab.recentActivity.title" -> use "card.recentActivity.title"
  // "summaryTab.recentActivity.filter.last5" -> use "filter.last5Implemented"
  // "summaryTab.recentActivity.filter.last10" -> use "filter.last10Implemented"
  // "summaryTab.recentActivity.filter.all" -> use "filter.allImplemented"
  // "summaryTab.recentActivity.loading" -> use "text.loadingRecentActivity"
  "summaryTab.recentActivity.noImplementations": "لم يتم العثور على دروس مكتملة منفذة لهذا الفصل لتلخيص أداء النشاط.",
  "summaryTab.recentActivity.noStudentsToTrack": "لا يوجد طلاب في الفصل لتتبعهم.",
  "summaryTab.recentActivity.noRecords": "لم يبدأ بعد (لا توجد سجلات)",
  "summaryTab.lesson.implementedDate": "منفذ في: {{date}}",

  // JavaScript Messages for class_details.html
  "alert.classIdMissing": "لم يتم توفير معرّف الفصل. يرجى العودة إلى لوحة التحكم واختيار فصل.",
  "console.dbInitClassDetails": "تمت تهيئة قاعدة البيانات لصفحة تفاصيل الفصل.",
  // "alert.noTeacherInfo", "alert.teacherProfileNotFound", "confirm.logout" should exist
  "error.classNotFoundOrPermissionDetails": "لم يتم العثور على الفصل أو ليس لديك إذن لعرض هذا الفصل.", // More specific than student_progress one
  "error.loadingClassDetails": "حدث خطأ أثناء تحميل تفاصيل الفصل: {{errorMessage}}",
  "alert.studentNameRequired": "الاسم الكامل للطالب مطلوب.",
  "alert.studentAddedSuccess": "تمت إضافة الطالب بنجاح!",
  "error.addingStudent": "خطأ في إضافة الطالب: {{errorMessage}}",
  "error.studentDetailsNotFound": "تعذر العثور على تفاصيل الطالب.",
  "error.preparingStudentEdit": "خطأ في تجهيز الطالب للتعديل: {{errorMessage}}",
  "alert.studentUpdatedSuccess": "تم تحديث بيانات الطالب بنجاح!",
  "error.updatingStudent": "خطأ في تحديث الطالب: {{errorMessage}}",
  "confirm.deleteStudent": "هل أنت متأكد أنك تريد حذف الطالب \"{{studentName}}\"؟ سيؤدي هذا أيضًا إلى إزالة جميع سجلات تقدمهم. لا يمكن التراجع عن هذا الإجراء.",
  "alert.studentDeletedSuccess": "تم حذف الطالب \"{{studentName}}\" بنجاح.",
  "error.deletingStudent": "خطأ في حذف الطالب: {{errorMessage}}",
  "alert.implementationDateRequired": "تاريخ التنفيذ مطلوب.",
  "alert.lessonImplementationUpdated": "تم تحديث تنفيذ الدرس بنجاح!",
  "alert.lessonMarkedImplemented": "تم تحديد الدرس كمنفذ بنجاح!",
  "error.savingImplementation": "خطأ في حفظ التنفيذ: {{errorMessage}}",
  "alert.export.classDetailsNotLoaded": "لم يتم تحميل تفاصيل الفصل. لا يمكن التصدير.",
  "alert.export.noStudents": "لا يوجد طلاب في هذا الفصل للتصدير.",
  "alert.export.success": "تم تصدير قائمة الطلاب بنجاح.",
  // "error.export.functionMissing" should exist
  "error.export.generic": "خطأ في تصدير الطلاب: {{errorMessage}}",
  "error.loadingSummaryData": "خطأ في تحميل بيانات الملخص: {{errorMessage}}",
  "student.Male" : "ذكر",
  "student.Female" : "أنثى",

  // In js/translations.js, add to MIALAMA_TEACHER_TRANSLATIONS_AR:

  // --- lesson_view.html ---
  "page.lessonView.title": "عرض الدرس - منصة مي علامة",
  "page.lessonView.loadingTitle": "جاري تحميل تفاصيل الدرس...",
  "page.lessonView.titleForLesson": "الدرس: {{lessonName}}",
  "page.lessonView.subHeader": "للفصل: {{className}}",

  // Breadcrumbs
  // "breadcrumb.dashboard": "لوحة التحكم", // Should exist
  // "breadcrumb.classDetails": "تفاصيل الفصل", // Should exist
  "breadcrumb.lessonView.active": "عرض الدرس",

  // Lesson Info Card
  "card.lessonInfo.titlePrefix": "معلومات الدرس:", // Or just use lesson name if preferred
  // "lesson.objectivesLabel": "الأهداف:", // Should exist from program_explorer.html
  "lesson.noObjectivesListed": "لم يتم إدراج أهداف.",
  // "lesson.teachingFocusLabel": "محور التدريس:", // Should exist
  // "lesson.materialsLabel": "المواد:", // Should exist
  "lesson.noMaterialsListed": "لم يتم إدراج مواد.",
  // "lesson.estTimeLabel": "الوقت المقدر:", // Should exist
  // "lesson.minutesSuffix": "دقائق", // Should exist
  "lesson.teacherGuidePagesLabel": "صفحات دليل المعلم:",
  "lesson.studentBookPagesLabel": "صفحات كتاب الطالب:",
  "text.pageRange": "البداية: {{startPage}}، النهاية: {{endPage}}",

  // Activities Section
  "heading.activitiesAndProgress": "الأنشطة وتقدم الطلاب",
  // "text.loadingActivities": "جاري تحميل الأنشطة...", // Should exist
  "text.noActivitiesFoundLesson": "لم يتم العثور على أنشطة لهذا الدرس.",

  // Activity Card (within Activities Section)
  "activity.sequenceLabelShort": "(تسلسل: {{sequenceNumber}})",
  // "activity.typeLabel": "النوع:", // Should exist
  // "activity.teacherInstructionsLabel": "تعليمات المعلم:", // Should exist
  "activity.noInstructionsProvided": "لم يتم تقديم تعليمات.",
  // "activity.contentNashidLabel": "المحتوى (مثال: نشيد): {{nashidTitle}}", // Should exist
  "heading.studentProgressForActivity": "تقدم الطلاب لهذا النشاط:",

  // Bulk Update Controls (within Activity Card)
  "bulkUpdate.selectAllLabel": "تحديد الكل",
  "bulkUpdate.selectStatusPlaceholder": "-- حالة جماعية --",
  "bulkUpdate.applyToSelectedButton": "تطبيق على المحدد",
  "bulkUpdate.applyButton.disabledTooltip": "الدرس غير منفذ. قم بتحديده كمنفذ في صفحة تفاصيل الفصل لتمكين هذه الميزة.",
  "bulkUpdate.applyingButton": "جاري التطبيق...",

  // Student Progress Table (within Activity Card)
  "table.header.studentName": "اسم الطالب", // Or reuse "table.header.name"
  "table.header.status": "الحالة",
  "table.header.notes": "ملاحظات",
  // "table.header.actions": "الإجراءات", // Should exist
  "text.noStudentsToTrackProgress": "لا يوجد طلاب في هذا الفصل لتتبع تقدمهم.",
  "form.placeholder.teacherNotes": "ملاحظات المعلم...",
  "button.saveProgress": "حفظ",
  "button.saveProgress.tooltip": "حفظ التقدم لـ {{studentName}}",
  "button.saveProgress.saving": "جاري الحفظ...",
  "button.saveProgress.saved": "تم الحفظ",

  // JavaScript Messages & Global Messages
  "alert.lessonView.classOrLessonIdMissing": "معرّف الفصل أو معرّف الدرس غير متوفر. يرجى الانتقال من صفحة تفاصيل الفصل.",
  "console.dbInitLessonView": "تمت تهيئة قاعدة البيانات لصفحة عرض الدرس.",
  "error.lessonView.classNotFoundOrPermission": "لم يتم العثور على الفصل أو ليس لديك إذن لعرض هذا الفصل.",
  "error.lessonView.lessonNotFound": "لم يتم العثور على الدرس.",
  "warn.lessonView.noImplementation": "لم يتم العثور على سجل تنفيذ للدرس {{lessonId}} في الفصل {{classId}}. قد يكون تتبع النشاط محدودًا حتى يتم تحديد الدرس كمنفذ.",
  "info.lessonView.lessonNotImplementedNote": "ملاحظة: لم يتم تحديد هذا الدرس كمنفذ للفصل. يرجى تحديده في صفحة تفاصيل الفصل لتتبع التقدم رسميًا. قد يتم تعطيل بعض الميزات.",
  "error.lessonView.loadingDetails": "حدث خطأ أثناء تحميل تفاصيل الدرس: {{errorMessage}}",
  "alert.bulkUpdate.noStatusSelected": "الرجاء تحديد حالة لتطبيقها.",
  "alert.bulkUpdate.lessonNotImplemented": "لا يمكن تطبيق حالة جماعية. لم يتم تحديد الدرس رسميًا كمنفذ لهذا الفصل حتى الآن. يرجى تحديده في صفحة تفاصيل الفصل لتمكين هذه الميزة.",
  "alert.bulkUpdate.noStudentsSelected": "الرجاء تحديد طالب واحد على الأقل لتطبيق الحالة عليه.",
  "alert.bulkUpdate.success": "تم تطبيق الحالة الجماعية '{{status}}' على {{count}} طالب/طلاب للنشاط '{{activityName}}'.",
  "error.bulkUpdate.generic": "خطأ في تطبيق الحالة الجماعية: {{errorMessage}}",
  "alert.saveProgress.lessonNotImplemented": "لا يمكن حفظ تقدم النشاط. لم يتم تحديد الدرس رسميًا كمنفذ لهذا الفصل حتى الآن. يرجى تحديده في صفحة تفاصيل الفصل لتمكين هذه الميزة.",
  "error.saveProgress.generic": "خطأ في حفظ تقدم الطالب {{studentId}} في النشاط {{activityId}}: {{errorMessage}}",

  // Statuses (re-ensure these exist and are consistent with student_progress.html and class_details.html)
  // "status.notStarted": "لم يبدأ بعد",
   "status.inprogress": "قيد التنفيذ",
  // "status.completed": "مكتمل",
  // "status.needsSupport": "يحتاج إلى دعم",
  // "status.mastered": "متقن",
  // "status.unknown": "غير معروف",

  // Footer (ensure consistency)
  // "text.copyright", "text.allRightsReserved", "footer.copyrightText" should exist


  // "text.loading" should exist


  // "alert.noTeacherInfoSetup", "alert.teacherProfileNotFoundSetup", "confirm.logout" should exist from other pages
  // "page.title.error" should exist
  // "text.notApplicable" should exist
  // "footer.copyrightText" should exist


  // Add more keys and their Arabic translations as needed
  // For example:
  // "login.title": "تسجيل الدخول",
  // "login.username": "اسم المستخدم",
  // "login.password": "كلمة المرور",
  // "login.button": "دخول",
};

/**
 * Applies translations to elements with the data-translate attribute.
 * @param {string} [languageCode='ar'] - The language code for translations (currently only 'ar' is supported here).
 * @param {object} [dynamicValues={}] - An object containing values for placeholders in translations.
 */
function applyTranslations(languageCode = 'ar', dynamicValues = {}) {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    let translation = MIALAMA_TEACHER_TRANSLATIONS_AR[key]; // Assuming 'ar' for now

    if (translation) {
      // Handle simple placeholders like {{placeholderName}}
      translation = translation.replace(/\{\{(\w+)}}/g, (match, placeholderName) => {
        return dynamicValues[placeholderName] !== undefined ? dynamicValues[placeholderName] : match;
      });
      element.textContent = translation;
    } else {
      console.warn(`Translation key "${key}" not found for language "${languageCode}".`);
      // Optionally, you could leave the original text or set it to the key itself
      // element.textContent = key;
    }
  });

  // Also handle placeholders in attributes like 'placeholder' or 'title'
  const elementsWithTranslatableAttrs = document.querySelectorAll('[data-translate-placeholder], [data-translate-title], [data-translate-aria-label]');
  elementsWithTranslatableAttrs.forEach(element => {
    const placeholderKey = element.getAttribute('data-translate-placeholder');
    const titleKey = element.getAttribute('data-translate-title');
    const ariaLabelKey = element.getAttribute('data-translate-aria-label');

    if (placeholderKey) {
        let translation = MIALAMA_TEACHER_TRANSLATIONS_AR[placeholderKey];
        if (translation) {
            translation = translation.replace(/\{\{(\w+)}}/g, (match, placeholderName) => {
                return dynamicValues[placeholderName] !== undefined ? dynamicValues[placeholderName] : match;
            });
            element.setAttribute('placeholder', translation);
        } else {
            console.warn(`Translation key "${placeholderKey}" for placeholder not found.`);
        }
    }
    if (titleKey) {
        let translation = MIALAMA_TEACHER_TRANSLATIONS_AR[titleKey];
        if (translation) {
            translation = translation.replace(/\{\{(\w+)}}/g, (match, placeholderName) => {
                return dynamicValues[placeholderName] !== undefined ? dynamicValues[placeholderName] : match;
            });
            element.setAttribute('title', translation);
        } else {
            console.warn(`Translation key "${titleKey}" for title not found.`);
        }
    }
    if (ariaLabelKey) {
        let translation = MIALAMA_TEACHER_TRANSLATIONS_AR[ariaLabelKey];
        if (translation) {
            translation = translation.replace(/\{\{(\w+)}}/g, (match, placeholderName) => {
                return dynamicValues[placeholderName] !== undefined ? dynamicValues[placeholderName] : match;
            });
            element.setAttribute('aria-label', translation);
        } else {
            console.warn(`Translation key "${ariaLabelKey}" for aria-label not found.`);
        }
    }
  });
}

/**
 * Sets the document language and direction.
 * For Arabic, this means lang="ar" and dir="rtl".
 */
function setDocumentLanguageAndDirection(languageCode = 'ar') {
  document.documentElement.lang = languageCode;
  if (languageCode === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr'; // Or based on language specifics
  }
}

// --- Initialization ---
// Call this function when the DOM is ready to apply translations
document.addEventListener('DOMContentLoaded', () => {
  setDocumentLanguageAndDirection('ar'); // Set to Arabic and RTL
  // Example: If you have dynamic data like the teacher's name for the welcome message
  // const teacherData = { teacherName: "أستاذ أحمد" };
  // applyTranslations('ar', teacherData);
  applyTranslations('ar'); // Apply static translations
});

// If you need to re-apply translations after dynamic content is loaded,
// you can call applyTranslations() again.
// Example:
// window.updateContentAndTranslate = function(dynamicData = {}) {
//   // ... your code to update content ...
//   applyTranslations('ar', dynamicData);
// }
