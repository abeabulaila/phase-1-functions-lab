// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const base = 42;
    if (blocks < 42) {
        return (base - `${blocks}` )
    }
    else return (`${blocks}` - base);
}
distanceFromHqInBlocks();

const base = 42

function distanceFromHqInFeet(feetLength){
    distanceFromHqInBlocks(feetLength)
    if (feetLength < 42) {
            return(base - `${feetLength}`) * 264;
    }
    else return (`${feetLength}`- base) * 264;
    
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, base){
    if (start < 42){
        return (start - base) * 264;
    }
    else return (base - start) * 264;
}

distanceTravelledInFeet(43, 44);

function calculatesFarePrice(start, base){
let distance = Math.abs(start - base) * 264;
    if (distance < 400) {
        return 0
    }
    else if (distance > 400 && distance < 2000) {
        return (distance -400) * .02
    }
    else if (distance > 2000 && distance < 2500) {
        return (25);
    }
    else if  (distance > 2500) {
        return ("cannot travel that far");
    }
}

