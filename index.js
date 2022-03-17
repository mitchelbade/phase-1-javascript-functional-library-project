//Functional Library Project

//COLLECTION FUNCTIONS (array or object)
const myEach = function (collection, callback){
  for(const element in collection){
    callback(collection[element])
  }
  return collection
// myEach([1, 2, 3], alert);
// => alerts each number in turn and returns the original collection

// myEach({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn and returns the original collection
}

const myMap = function (collection, callback){
  const newArr = []
  for(const element in collection){
    newArr.push(callback(collection[element]))
  }
  return newArr
// myMap([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]

// myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// => [3, 6, 9]
}

const myReduce = function (collection, callback, acc){
  const newArr = [...collection]
  acc = acc || newArr.shift()
  for(const element in newArr){
    acc = callback(acc, newArr[element], newArr)
  }
  return acc
// myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
// => 16

// myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
// => 6
}

const myFind = function (collection, predicate){
  for(const element in collection){
    const num = collection[element]
    if (predicate(num)){
      return num
    }
  }
// myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2

// myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });
// => 4
}

const myFilter = function (collection, predicate){
  const newArr = []

  for(const element in collection){
    const num = collection[element]
    if (predicate(num)){
      newArr.push(num)
    }
  }
  return newArr
// myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]

// myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })
// => []
}

const mySize = function (collection){
  return Object.keys(collection).length
// mySize({one: 1, two: 2, three: 3});
// => 3

// mySize([]);
// => 0
}

//ARRAY FUNCTIONS
const myFirst = function (arr, n){
  const newArr = []
  for(let i = 0; i < n; i++){
    newArr.push(arr[i])
//console.log(newArr)
  }
//console.log(newArr)
  return newArr.length > 1 ? newArr : arr[0]
// myFirst([5, 4, 3, 2, 1]);
// => 5

// myFirst([5, 4, 3, 2, 1], 3);
// => [5, 4, 3]
}

const myLast = function (arr, n){
  const i = arr.length - n
  return n > 1 ? arr.slice(i, arr.length) : arr[i]
//   myLast([5, 4, 3, 2, 1]);
// => 1

// myLast([5, 4, 3, 2, 1], 3);
// => [3, 2, 1]
}

const mySortBy = function (){
  //bonus
}

const myFlatten = function (){
  //bonus
}

//OBJECT FUNCTIONS
const myKeys = function (object){
  return arr
// myKeys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]
}

const myValues = function (object){
  return arr
// myValues({one: 1, two: 2, three: 3});
// => [1, 2, 3]
}