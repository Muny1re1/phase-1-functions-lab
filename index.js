let numberOfBlocks;

function distanceFromHqInBlocks(blocks){
   const hqPosition = 42;
   numberOfBlocks = Math.abs(blocks - hqPosition);
   return numberOfBlocks;
}
console.log(distanceFromHqInBlocks(50))
function distanceFromHqInFeet(blocks){
    const feetPerBlock = 200;
    const distanceInFeet = feetPerBlock * parseFloat(distanceFromHqInBlocks(blocks));
    return distanceInFeet;
}
console.log(distanceFromHqInFeet(50))
distanceTravelledInFeet=(blocks)=>{
const distanceInFeet = distanceFromHqInFeet(blocks);
return distanceInFeet;
};
console.log(distanceTravelledInFeet(50));
calculateFarePrice=(start, destination)=>{
    distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 'This trip is a free sample.';
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const fare = distanceInFeet *2;
        return `That will be ${distanceInFeet} cents`;
    } else if(distanceInFeet > 2000 && distanceInFeet<= 2500){
        return `That will be 25 dollars.`
    } else {
        return 'This trip is not allowed.';
    }
};
console.log(calculateFarePrice(42, 52));