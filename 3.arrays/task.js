function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
    let results = users.filter((items) => items.gender === gender).reduce((accumulator, item, index, array) => {
        accumulator += item.age;
        if(index === array.length -1) {
          return accumulator / array.length;
        }
        return accumulator; 
      }, 0)
      
      return results;
}