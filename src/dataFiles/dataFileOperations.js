let Fs = require('fs');
let writeData = (jsonData) => {
    try {
        Fs.writeFileSync('userData.json', jsonData);
        console.log("(Inside Write data Function) {jsonData = }", jsonData);
    } catch (e) { console.log("error") }
};

// let readData = () => {
//     console.log(data);
// };

//newData ----> String
let ProcessRecords = (employeeData) => {
    writeData(employeeData);
}
export default ProcessRecords;