let lightingArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"] 

const newLightingArray = [];

let newArray = lightingArray.filter(item => {
    return typeof item === 'string';
});


newArray.forEach((item) => {
    newLightingArray.push(item);

});

document.getElementById("rockstar").innerHTML += `<p>${newLightingArray.join(" ")} <p>`;



