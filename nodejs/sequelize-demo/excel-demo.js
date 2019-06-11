XLSX = require('xlsx');


function readExcel() {
    var workbook = XLSX.readFile('./unilog.xlsx');
    
    var first_sheet_name = workbook.SheetNames[0];
    console.log(first_sheet_name);
    
    var address_of_cell = 'A1';
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    /* Find desired cell */
    var desired_cell = worksheet[address_of_cell];
    /* Get the value */
    var desired_value = (desired_cell ? desired_cell.v : undefined);
    console.log(desired_value);
}

// readExcel()

function createExcel() {
    /* create a new blank workbook */
    var wb = XLSX.utils.book_new();
    
    var ws_name = "SheetJS";
    /* make worksheet */
    var ws_data = [
        [ "S", "h", "e", "e", "t", "J", "S" ],
        [  1 ,  2 ,  3 ,  4 ,  5 ]
    ];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    
    /* Add the worksheet to the workbook */
    XLSX.utils.book_append_sheet(wb, ws, ws_name);
    
    XLSX.writeFile(wb, './test.xlsx');
}
// createExcel();

function createExcel2() {
    var data = [
        ['a']
        [1,2,3],
        [true, false, null, "sheetjs"],
        ["foo","bar",new Date("2014-02-19T14:30Z"), "0.3"], 
        ["baz", null, "qux"],
        ['你好', '我很好xxx太好了']
    ]

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(data);
    ws['!merges'] = 
        [{ s: { c: 0, r: 0 }, e: { c: 2, r: 0 } }] 
  
    /* add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    
    /* write workbook */
    XLSX.writeFile(wb, 'write.xlsx');
}
createExcel2();

console.log(XLSX.version);



