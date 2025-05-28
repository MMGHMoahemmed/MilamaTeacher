// js/export_utils.js

/**
 * Converts an array of objects to a CSV string and triggers a download.
 * @param {Array<Object>} dataArray The array of objects to export.
 * @param {string} filename The desired filename for the downloaded CSV (e.g., "students.csv").
 * @param {Array<string>} [explicitHeaders] Optional. An array of strings representing the CSV headers in the desired order.
 */
function exportToCSV(dataArray, filename, explicitHeaders) {
    if (!dataArray || dataArray.length === 0) {
        alert("No data available to export.");
        console.warn("exportToCSV: No data provided or data array is empty.");
        return;
    }

    const columnDelimiter = ',';
    const lineDelimiter = '\n';
    let csvString = '';

    let headers = explicitHeaders;
    if (!headers || headers.length === 0) {
        headers = Object.keys(dataArray[0]);
    }

    csvString += headers.map(header => `"${String(header).replace(/"/g, '""')}"`).join(columnDelimiter);
    csvString += lineDelimiter;

    dataArray.forEach(item => {
        const row = headers.map(header => {
            let value = item[header];
            if (value === null || value === undefined) {
                value = '';
            } else {
                value = String(value);
                if (value.includes(columnDelimiter) || value.includes(lineDelimiter) || value.includes('"')) {
                    value = `"${value.replace(/"/g, '""')}"`;
                }
            }
            return value;
        });
        csvString += row.join(columnDelimiter);
        csvString += lineDelimiter;
    });

    const BOM = "\uFEFF";
    const blob = new Blob([BOM + csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");

    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } else {
        alert("Your browser doesn't support direct download. The CSV content might open in a new window or be available for manual saving.");
        console.log("CSV Content for manual copy/paste:\n", BOM + csvString);
    }
}

/**
 * Exports the entire Dexie database to a JSON file.
 * @param {Dexie} dbInstance The Dexie database instance.
 * @param {string} [filenamePrefix="mialama_db_export"] Prefix for the export filename.
 */
async function exportFullDatabase(dbInstance, filenamePrefix = "mialama_db_export") {
    if (!dbInstance) {
        alert("Database instance is not available for export.");
        console.error("exportFullDatabase: dbInstance is undefined.");
        return;
    }

    const exportData = {};
    const tableNames = dbInstance.tables.map(table => table.name);

    try {
        await dbInstance.transaction('r', tableNames, async () => {
            for (const tableName of tableNames) {
                exportData[tableName] = await dbInstance.table(tableName).toArray();
                console.log(`Exported ${exportData[tableName].length} records from table ${tableName}`);
            }
        });

        const jsonDataString = JSON.stringify(exportData, null, 2); // Pretty print JSON
        const blob = new Blob([jsonDataString], { type: 'application/json;charset=utf-8;' });
        const link = document.createElement("a");
        const filename = `${filenamePrefix}_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;

        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            alert("Database exported successfully as " + filename);
        } else {
            alert("Your browser doesn't support direct download. The JSON content might open in a new window or be available for manual saving.");
            console.log("Database JSON for manual copy/paste:\n", jsonDataString);
        }
    } catch (error) {
        console.error("Error exporting full database:", error);
        alert("Error exporting database: " + error.message);
    }
}

/**
 * Imports data from a JSON string into the Dexie database, overwriting existing data.
 * @param {Dexie} dbInstance The Dexie database instance.
 * @param {string} jsonDataString The JSON string containing the database data.
 * @returns {Promise<boolean>} True if import was successful, false otherwise.
 */
async function importDatabaseFromJson(dbInstance, jsonDataString) {
    if (!dbInstance) {
        alert("Database instance is not available for import.");
        console.error("importDatabaseFromJson: dbInstance is undefined.");
        return false;
    }

    try {
        const importData = JSON.parse(jsonDataString);
        const tableNames = Object.keys(importData);

        // IMPORTANT: This is a destructive operation.
        // The calling function should have already confirmed this with the user.
        await dbInstance.transaction('rw', dbInstance.tables, async () => {
            console.log("Starting database import. Clearing existing data...");
            for (const table of dbInstance.tables) {
                console.log(`Clearing table: ${table.name}`);
                await table.clear();
            }
            console.log("All tables cleared.");

            for (const tableName of tableNames) {
                if (dbInstance.table(tableName)) {
                    const records = importData[tableName];
                    if (records && Array.isArray(records) && records.length > 0) {
                        console.log(`Importing ${records.length} records into table ${tableName}...`);
                        await dbInstance.table(tableName).bulkPut(records);
                    } else {
                        console.log(`No records to import for table ${tableName} or data is not an array.`);
                    }
                } else {
                    console.warn(`Table ${tableName} found in JSON but not in current DB schema. Skipping.`);
                }
            }
        });
        console.log("Database import completed successfully.");
        return true;
    } catch (error) {
        console.error("Error importing database from JSON:", error);
        alert("Error importing database: " + error.message + "\n\n" + (error.stack || ''));
        return false;
    }
}


// Placeholder for future print utility
function printElement(elementId, pageTitle = "Print Document") {
    const elementToPrint = document.getElementById(elementId);
    if (!elementToPrint) {
        alert(`Element with ID "${elementId}" not found for printing.`);
        return;
    }

    const printWindow = window.open('', pageTitle, 'height=600,width=800');
    printWindow.document.write('<html><head><title>' + pageTitle + '</title>');
    // Optional: Include stylesheets for better print formatting
    // Array.from(document.styleSheets).forEach(styleSheet => {
    //     if (styleSheet.href) {
    //         printWindow.document.write('<link rel="stylesheet" href="' + styleSheet.href + '">');
    //     } else if (styleSheet.cssRules) {
    //         printWindow.document.write('<style>');
    //         Array.from(styleSheet.cssRules).forEach(rule => printWindow.document.write(rule.cssText));
    //         printWindow.document.write('</style>');
    //     }
    // });
    printWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/css/tabler.min.css" />'); // Add Tabler for basic styling
    printWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">');
    printWindow.document.write('<style>body { margin: 20px; } @media print { .no-print { display: none !important; } }</style>'); // Basic print styles
    printWindow.document.write('</head><body>');
    printWindow.document.write(elementToPrint.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close(); // Necessary for IE >= 10
    printWindow.focus(); // Necessary for IE >= 10
    
    // Timeout to ensure content is loaded before printing
    setTimeout(() => {
        printWindow.print();
        // printWindow.close(); // Optional: close window after print dialog
    }, 500);
}


console.log("export_utils.js loaded. Includes exportToCSV() and printElement().");

