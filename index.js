
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

function createEmployeeRecords(arr) {
    return arr.map(employee => {
        return createEmployeeRecord(employee)
    })
}

function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(" ")
        employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return employee
    }

function createTimeOutEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(" ")
        employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
        })
        return employee
        }
       
function hoursWorkedOnDate(employee, workDate){
    let timeIn = employee.timeInEvents;
    let resultIn = timeIn.find(element => element.date === workDate )
    let timeOut = employee.timeOutEvents;
    let resultOut = timeOut.find(element => element.date === workDate )
        // employee.timeInEvents.date.find(date)
        // return (resultOut.hour)-(resultIn.hour)
    let hoursWorked = resultOut.hour - resultIn.hour;
        return hoursWorked/100
        }

function wagesEarnedOnDate(employee, formDate){
    let hourlyRate = employee.payPerHour;
    let hoursWorked = hoursWorkedOnDate(employee, formDate)
    return hourlyRate * hoursWorked
}

function allWagesFor(employee){
    let eachDayObject= employee.timeInEvents;
    let allDates = eachDayObject.map(dateObj => dateObj.date)
    // console.log(`this is my value ${allDates}`)
    let wages = allDates.map(date => wagesEarnedOnDate(employee, date))
    let reducer = (accumulator, curr) => accumulator + curr;
    return wages.reduce(reducer)
}

function calculatePayroll(employeeArray) {
    let wagesArray = employeeArray.map(employee => allWagesFor(employee))
    console.log(wagesArray)
    let reducer = (accumulator, curr) => accumulator + curr;
    return wagesArray.reduce(reducer)
}