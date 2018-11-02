getData();
function getData() {
  listArray = [
    { "id": 1, "firstName": "John", "lastName": "Doe", "handle": "m" },
    { "id": 2, "firstName": "a", "lastName": "a", "handle": "m" },
  ];


  for (var i = 0; i < listArray.length; i++) {
    var table = document.getElementById("table").getElementsByTagName("tbody")[0];
    newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = listArray[i].id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = listArray[i].firstName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = listArray[i].lastName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = listArray[i].handle;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "<a class='btn btn-success' onClick=deleteRow(this);>Delete</a><a class='btn btn-danger' onClick='edit(this)'>Update</a>"
  }

}
function getDataN() {
  var formdata = {};
  var lname = document.getElementById("lname");
  var fname = document.getElementById("fname");
  var handle = document.getElementById("handle");
  formdata["lname"] = lname.value;
  formdata["fname"] = fname.value;
  formdata["handle"] = handle.value;

  return formdata;
}
function Insert(data) {
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  var i = 0;
  newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = i++;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.fname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.lname
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.handle;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = "<a class='btn btn-success' onClick=deleteRow(this);>Delete</a><a class='btn btn-danger' onClick='edit(this)'>Update</a>"
}
var selectRow = null;
function Submit() {
  var data = getDataN();
  if (selectRow == null) {
    Insert(data);
  } else {
    update(data);
  }
  resetData();
}
function edit(td) {
  selectRow = td.parentElement.parentElement;
  document.getElementById('lname').value = selectRow.cells[2].innerHTML;
  document.getElementById('fname').value = selectRow.cells[1].innerHTML;
  document.getElementById('handle').value = selectRow.cells[3].innerHTML;

}
function update(data) {
  selectRow.cells[1].innerHTML = data.fname;
  selectRow.cells[2].innerHTML = data.lname;
  selectRow.cells[3].innerHTML = data.handle;
}
function resetData() {
  document.getElementById('lname').value = "";
  document.getElementById('fname').value = "";
  document.getElementById('handle').value = "";
}
function deleteRow(td) {
  if (confirm("Delete y/n?")) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
  }

}