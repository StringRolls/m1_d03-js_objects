const ironhacker = {
    firstName: 'Tio',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    worksAt: 'Google',
    isRemote: false
}

// 1: update favoriteLanguage to 'React' 
// ... your code here
ironhacker.favoriteLanguage = "React"


// 2: Update ironhacker's age to 29
// ... your code here
ironhacker.age = 29


// 3: Remove the 'isRemote' property
// ... your code here
delete ironhacker['isRemote']


// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
// ... your code here
ironhacker.didGraduate = true
console.log("Ironhacker:",ironhacker)


// 5: list all keys of the ironhacker object
// ... your code here
for(const key in ironhacker){
    console.log(key)
}



// 6: check if ironhacker has property 'works at'
// ... your code here
console.log(ironhacker["worksAt"], ironhacker.hasOwnProperty("worksAt"), !!ironhacker.worksAt)


// Use the following object for the remaining part 

const student = {
    firstName: 'Paola',
    lastName: 'Sanchez',
    bootcamp: 'Web Dev',
    favorites: ['JavaScript', 'HTML'],
    "is career changer": true
  };
  
  console.log('student obj before modifications: ', student);
  
  // console.log the value of firstName
  console.log(student.firstName); // => Paola
  
  // print "She is an Iornhacker!" if "is carreer changer" is true
  if (student['is career changer'])console.log("She is an Iornhacker!");
  
  // if the obj has both the first and last name, print "Studnet profile complete!"
  // CHECK DOES PROPERTY EXIST IN AN OBJECT
  if('firstName' in student && 'lastName' in student) console.log("Studnet profile complete!");

  // Add "year" property and set it to 2021
  student.year = 2021;
  
  console.log('studnet obj after year has been added: ', student);
  // => { firstName: 'Paola',
  //      lastName: 'Sanchez',
  //      bootcamp: 'Web Dev',
  //      favorites: ['JavaScript', 'HTML'],
  //      "is career changer": true,
  //      year: 2018 }
  
  // Delete the "bootcamp" property
  delete student.bootcamp;
  
  // Update the date to 2022
  student.year = 2022;
  
  // List all the object keys
  const objKeys = Object.keys(student);
  console.log('objKeys => ', objKeys); // =>  [ 'firstName', 'lastName', 'favorites', 'isCareerChanger', 'year' ]
  
  // List all the object values
  const objValues = Object.values(student);
  console.log('objValues => ', objValues); // =>  [ 'Paola', 'Sanchez', [ 'JavaScript', 'HTML' ], true, 2019 ]
  
  for (let key in student) {
    console.log(key);
  }
