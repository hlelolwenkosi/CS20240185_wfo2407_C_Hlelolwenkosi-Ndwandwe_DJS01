/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity based on acceleration
const calcNewVel = (vel, acc, time) => {
  // Convert velocity to m/s for correct calculation
  const velInMps = vel * 1000 / 3600; // km/h to m/s
  
  // Check for invalid inputs (acc should be in m/s² and time in seconds)
  if (typeof acc !== 'number' || typeof time !== 'number' || typeof vel !== 'number') {
    throw new Error('Invalid input: Ensure velocity (km/h), acceleration (m/s^2), and time (s) are numbers.');
  }
  // Calculate new velocity in m/s
  const newVelInMps = velInMps + (acc * time);
  
  // Convert back to km/h
  return newVelInMps * 3600 / 1000; // m/s to km/h
}


// Calculates distance
const d2 = d + (vel * time) / 3600; // Distance = velocity (km/h) * time (hours)


// Calculates remaining fuel
const rf = fuel - (fbr * time); 

//calculates new velocity based on acceleration
const vel2 = calcNewVel(vel, acc, time);

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






