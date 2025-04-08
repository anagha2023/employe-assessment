const employees = [
    { name: "Alice Johnson", department: "HR" },
    { name: "Bob Smith", department: "Engineering" },
    { name: "Charlie Brown", department: "Marketing" },
    { name: "David Wilson", department: "Engineering" },
    { name: "Eve Adams", department: "HR" }
]
// console.log(employees)
const dept = document.getElementById("dept");
const employeelist = document.getElementById("empdetails");
dept.addEventListener("change",(e)=>{
    console.log(e.target.value)
    renderEmployees(e.target.value)
})
const renderEmployees = (data)=>{
    employeelist.innerHTML="";
    const output = data==="All"?employees:employees.filter(emp=>emp.department===data)
    output.forEach(emp=>{
        const li = document.createElement("li");
        li.textContent=`${emp.name} - ${emp.department}`
        employeelist.appendChild(li);

    })

}
renderEmployees("All")