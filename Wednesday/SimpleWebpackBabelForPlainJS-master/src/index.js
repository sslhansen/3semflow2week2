import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import userFacade from "./userFacade"
import jokeFacade from "./jokeFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function getAllJokes() {
  const jokes = jokeFacade.getJokes()
  let jokeLis = jokes.map(joke => `<li> ${joke} </li>`)
  const jokesAsString = jokeLis.join("")
  document.getElementById("jokes").innerHTML = jokesAsString
}
getAllJokes();

function getJokeByid() {
  let id = document.getElementById("jokeId").value
  let joke = jokeFacade.getJokeById(id)
  document.getElementById("jokeById").innerHTML = joke
}

document.getElementById("jokeButton").addEventListener("click", getJokeByid)

function addJoke() {
  let newJoke = document.getElementById("newJoke").value
  jokeFacade.addJoke(newJoke)
  getAllJokes()
}

document.getElementById("addJokeButton").addEventListener("click", addJoke)

/* JS For Exercise-2 below */
function getJokeApi() {
  return fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(responses => {
      return responses.json();
    })
}

function getJoke() {
  getJokeApi().then(function (result) {
    return document.getElementById("quoteP").innerHTML = result.joke
  })
}



document.getElementById("quoteButton").addEventListener("click", function () {
  getJoke();
})


getAllUsers()
/* JS For Exercise-3 below */
function getAllUsers() {
  userFacade.getUsers()
    .then(users => {
      const userRows = users.map(user => `
  <tr>
  <td>${user.id}</td>
  <td>${user.age}</td>
  <td>${user.name}</td>
  <td>${user.gender}</td>
  <td>${user.email}</td>
  </tr>
  `)
      const userRowsAsString = userRows.join("")
      document.getElementById("allUserRows").innerHTML = userRowsAsString
    })
}

document.getElementById("userByIdButton").addEventListener("click", function () {
  const userId = document.getElementById("userByIdInput").value
  userFacade.getUser(userId)
    .then(user => {
      var newUser = {
        age: user.age,
        name: user.name,
        gender: user.gender,
        email: user.email
      }
      document.getElementById("userByIdP").innerHTML = JSON.stringify(newUser)
    })
})

document.getElementById("addUserButton").addEventListener("click", function () {
  const newUser = {
    age: document.getElementById("addUserAgeInput").value,
    name: document.getElementById("addUserNameInput").value,
    gender: document.getElementById("addUserGenderInput").value,
    email: document.getElementById("addUserEmailInput").value,
  }
  userFacade.addUser(newUser)
  getAllUsers()
})

document.getElementById("editUserButton").addEventListener("click", function () {
  const edittedUser = {
    id: document.getElementById("editUserIdInput").value,
    age: document.getElementById("editUserAgeInput").value,
    name: document.getElementById("editUserNameInput").value,
    gender: document.getElementById("editUserGenderInput").value,
    email: document.getElementById("editUserEmailInput").value,
  }
  userFacade.editUser(edittedUser)
  getAllUsers()
})

document.getElementById("deleteUserButton").addEventListener("click", function () {
  const id = document.getElementById("deleteUserIdInput").value
  userFacade.deleteUser(id)
  getAllUsers()
}
)

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exe4rcises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



