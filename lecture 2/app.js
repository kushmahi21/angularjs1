var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyup);
}

function keyup(event) {
  calculateNumbericOutput();
}

functon calculateNumbericOutput() {
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for(var i=0; i<student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }

  // Insert result into Page
  var output= "Total Numeric value of person's name is" + totalNameValue;
  document.getElementById('output').innnerText = output;
}
