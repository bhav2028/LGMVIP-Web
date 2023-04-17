
var entry_info = document.getElementById("show");
entry_info.addEventListener("click", display);

var row = 1;

function display(){

    var fName = document.getElementById("fname").value;
    var eMail = document.getElementById("mail").value;
    var age = document.getElementById("age").value;
    var mob = document.getElementById("mobno").value;

    if (!fName || !eMail || !age || !mob) {
        alert("Please enter the information!");
        return;
    }

    var display = document.getElementById("stu-info");
    var newRow = display.insertRow(row);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = fName;
    cell2.innerHTML = eMail;
    cell3.innerHTML = age;
    cell4.innerHTML = mob;

    row++;
}