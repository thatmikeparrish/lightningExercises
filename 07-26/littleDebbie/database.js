
/* const keyCriticalPointsByWeekFourofNSS = [
    "proper variable naming",
    "data structures",
    "objects, keys, values",
    "functions and their purrpose",
    "functions arguments and how to use them",
    "event listeners - responding to user interactions in the browser",
] */
let database = [];


function saveItem() {
    const itemTitle = document.getElementById("title").value;
    
    const itemDescription = document.getElementById("description").value;
    
    const itemAmount = document.getElementById("amount").value;
    
    const itemTopping = document.getElementById("topping").value; 
    
    const itemFlavor = document.getElementById("flavor").value;
    
    
    database.push(newItem(itemTitle, itemDescription, itemAmount, itemTopping, itemFlavor));
    populateDB();
    console.log("Item saved!")
}

const newItem = (itemTitle, itemDescription, itemAmount, itemTopping, itemFlavor) => {
    
    const addItem = {
        title: itemTitle,
        description: itemDescription,
        amount: itemAmount,
        topping: itemTopping,
        flavor: itemFlavor,
    };
    
    return addItem;
}

function saveDataToStorage() {
    database.push(oatmealCremePie = newItem("Oatmeal Creme Pies", "Two soft oatmeal cookies and a layer of creme filling in between.", 12, "none", "Oatmeal"))
    database.push(swissRolls = newItem("Swiss Rolls", "Chocolate cake rolled around a layer of creme filling and drenched with fudge coating.", 12, "none", "Chocolate Cake"));
    database.push(nuttybuddy = newItem("Nutty Buddy", "Classic crunchy wafer bars layered with peanut butter and covered in rich chocolate fudge", 24, "Chocolate Fudge", "Chocolate and Peanut Butter"));
    populateDB();
    console.log("Item saved!");
}

function checkForDatabase() {
    if(localStorage.getItem("database") === null) {

        console.log("No previous data...");
        saveDataToStorage();
    } else {
        database = localStorage.getItem("database");
        console.log("Loaded previous database...")
    }
}

checkForDatabase();

