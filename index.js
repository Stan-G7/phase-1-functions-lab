// Code your solution in this file!
// index.js

// Calculates the distance in blocks from the headquarters
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  // Calculates the distance in feet from the headquarters
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; // Assuming 1 block = 264 feet
  }
  
  // Calculates the distance travelled in feet
  function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264; // Assuming 1 block = 264 feet
  }
  
  // Calculates the fare price based on the distance travelled
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  
 
  