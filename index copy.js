// Your code here
let employeeArray =[]
function createEmployeeRecord(employee){
    let employeeObject = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    employeeArray.push(employeeObject)
return employeeObject
}
createEmployeeRecord('mio', 'kataoka', "director", "100")

function createEmployeeRecords(arr) {
    for (each of arr) {
        createEmployeeRecord(each)
    }
}

function timeInEvent(employee, dateStamp){
    let employeeIndex = employeeArray.findIndex(element => element.firstName == employee.firstName);
    employeeArray[employeeIndex].timeInEvent = {
        type: "TimeIn",
        hour: 
        date:
    }
}
