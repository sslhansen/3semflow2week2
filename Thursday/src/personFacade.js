import SERVER_URL from './constants.js'
const URL = SERVER_URL
function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function getAllPersons() {
    return fetch(URL + "all")
        .then(handleHttpErrors)
}

function addPerson(person) {
    const options = makeOptions("POST", person)
    return fetch(URL, options)
        .then(handleHttpErrors)
}

const personFacade = {
    getAllPersons,
    addPerson
}

export default personFacade