import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"
addData()
function addData() {
  personFacade.getAllPersons()
    .then(data => {
      const persons = data.all;
      const tableRows = persons.map(person => `
  <tr>
    <td>${person.id}</td>
    <td>${person.fName}</td>
    <td>${person.lName}</td>
    <td>${person.phone}</td>
    <td>${person.street}</td>
    <td>${person.zip}</td>
    <td>${person.city}</td>
  </tr>
  `)
      const tableRowsAsStr = tableRows.join("")
      document.getElementById("tbody").innerHTML = tableRowsAsStr
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message
        })
      }
      else { console.log("Network error"); }
    });
}

document.getElementById("reload").addEventListener("click", addData)
document.getElementById("savebtn").addEventListener("click", function () {
  const person = {
    fName: document.getElementById("fname").value,
    lName: document.getElementById("lname").value,
    phone: document.getElementById("phone").value,
    street: document.getElementById("street").value,
    zip: document.getElementById("zip").value,
    city: document.getElementById("city").value
  }
  personFacade.addPerson(person)
  addData()
})
.catch(err => {
  if (err.status) {
    err.fullError.then(e => {
      console.log(e.message)
      document.getElementById("error").innerHTML = e.message
    })
  }
  else { console.log("Network error"); }
});

