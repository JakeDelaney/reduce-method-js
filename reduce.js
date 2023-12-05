  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// best practice to specific initial explicit value as accumulator
const nums = [0,1,2,3,4]
let sum = nums.reduce((acc, curr) => {
  console.log(
  "Accumulator:", acc,
  "Current Value", curr,
  "Total", acc + curr
  );
  return acc + curr
}, 0) //initial value
console.log(sum)

const nums1 = [7,6,5,2,9]
let sum1 = nums1.reduce((acc, curr) => acc + curr, 0)
console.log(sum1)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
const totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
console.log("Total team member experience:", totalExperience)

// Grouping by a property, and totaling it too
const experienceByProfession = teamMembers.reduce((acc, curr) =>{
  let key = curr.profession;
  if (!acc[key]){
    acc[key] = curr.yrsExperience
  } else{
    acc[key] += curr.yrsExperience
  }
  return acc
},{})

console.log(experienceByProfession)