
const addItem = (itemTitle, itemDescription, itemAmount, itemTopping, itemFlavor) => {

    const newItem = {
        title: itemTitle,
        description: itemDescription,
        amount: itemAmount,
        topping: itemTopping,
        flavor: itemFlavor,
    }

    return newItem
}

function populateDB () {

    const oatmealCremePie = addItem("Oatmeal Creme Pies", "Two soft oatmeal cookies and a layer of creme filling in between.", 12, "none", "Oatmeal");
    const swissRolls = addItem("Swiss Rolls", "Chocolate cake rolled around a layer of creme filling and drenched with fudge coating.", 12, "none", "Chocolate Cake");
    const nuttybuddy = addItem("Nutty Buddy", "Classic crunchy wafer bars layered with peanut butter and covered in rich chocolate fudge", 24, "Chocolate Fudge", "Chocolate and Peanut Butter");


    const database = [oatmealCremePie,swissRolls,nuttybuddy]
    
    const stringified = JSON.stringify(database)
    localStorage.setItem("database", stringified)

    /* const saveDatabase = function (database, localStorageKey) {
        const stringifiedDatabase = JSON.stringify(database)    
        localStorage.setItem(localStorageKey, stringifiedDatabase)
    };
    
    saveDatabase(database, "database"); */

}

