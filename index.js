// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    if(distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) >= 400 && 
                distanceTravelledInFeet(start, destination) <= 2001) {
        return (Math.abs((destination - start) * 264) - 400) * .02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && 
                distanceTravelledInFeet(start, destination) <= 2499) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}