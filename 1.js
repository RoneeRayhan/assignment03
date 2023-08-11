function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
      console.log("Object is empty");
    } else {
      for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
      }
    }
  }
  
  // Test case 
  const myObject = {
    name: "RoneeMRayhan",
    age: 33,
    occupation: "Developer"
  };

  const myObject2 = {};
  
  printObjectProperties(myObject);
  