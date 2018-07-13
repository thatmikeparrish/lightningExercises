//Create a function called `go` that takes 2 arguments: 
//1. direction (forwards, backwards, etc.)
//1. speed (mph).

//The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

function go(direction, speed) {
    console.log(`The car is moving ${direction}, at ${speed} mph.`);
    if (speed > 75) {
        console.log("Slow down!")
    }
}

go("forward", "55");
go("backward", "90");
go("forward", "82");