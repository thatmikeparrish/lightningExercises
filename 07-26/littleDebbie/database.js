
/* const keyCriticalPointsByWeekFourofNSS = [
    "proper variable naming",
    "data structures",
    "objects, keys, values",
    "functions and their purrpose",
    "functions arguments and how to use them",
    "event listeners - responding to user interactions in the browser",
] */

let newData = [];

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

function saveItem() {
    const itemTitle = document.getElementById("title").value;
    
    const itemDescription = document.getElementById("description").value;
    
    const itemAmount = document.getElementById("amount").value;
    
    const itemTopping = document.getElementById("topping").value; 
    
    const itemFlavor = document.getElementById("flavor").value;
    
    newData.push(newItem(itemTitle, itemDescription, itemAmount, itemTopping, itemFlavor));
    populateDB();
    console.log("Item saved!");
    location.reload();
}

function checkForDatabase() {
    if(!localStorage.getItem("database")) {
        
        console.log("No previous data...");
    } else {
        newData = JSON.parse(localStorage.getItem("database"));
        console.log("Loaded previous database...");
    }
}

checkForDatabase();

