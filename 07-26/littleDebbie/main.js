
function populateDB () {

    const stringified = JSON.stringify(database)
    localStorage.setItem("database", stringified)
    
}
