/* document.getElementById("populateDatabase").addEventListener("click", function(){
    document.getElementById("displayDatabase").innerHTML = database;
}); */

const populateButton = document.querySelector("#populateDatabase")

populateButton.addEventListener("click", populateDB)