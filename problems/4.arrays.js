/** Averages the first and last value of an array.  Return null if the array has fewer than 2 elements.
* @param {number[]} arr - The input array
* @returns {number} - The average of the first and last values
*/


function firstAndLastAverage(arr=[]) 

{
  let number = 0
  
  
  if (arr.length >= 2) 
  {
  number = (arr[0] + arr[arr.length - 1])/2
  return number
  }else
  {
    return null
  }
 
}

firstAndLastAverage()


/** Duplicates all values inside an array.
* Sample input: [1,4,2,5]
* Sample output: [1,4,2,5,1,4,2,5]
* @param {number[]} arr - The input array
* @returns {number[]} - The duplicated array
*/


function duplicateArray(arr) 
{
  let number = []
for (d = 1 ; d <=2 ; d += 1)
{
  for (let i =0 ; i < arr.length; i +=1)
    {
      number.push(arr[i])
    }
}
  return number
}

console.log(duplicateArray([1,4,2,5]))

/** Removes the first 3 elements from an array. If the array has fewer than 3 elements, return an empty array.
* @param {any[]} arr - The input array
* @returns {any[]} - The array with the first 3 elements removed
*/
function removeFirstThreeElements(arr) 

{
  let empty= []
  if (arr.length >= 3 )
  {
    for (i = 1; i <= 3; i += 1)
    {
      arr.shift()
    }
    return arr
  }else
  {
    return empty
  }

}

removeFirstThreeElements([5,7,8,9,11])

module.exports = {
  firstAndLastAverage,
  duplicateArray,
  removeFirstThreeElements
}
