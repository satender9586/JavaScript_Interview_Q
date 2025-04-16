// find first pairs that will represent 0 after some
// ex -> [2,4,3,2,5,6,7-4,5,0]

function findFirstPair(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
          console.log([arr[i], arr[j]]);
        
      }
      break;
    }
  }
}

findFirstPair([2, 4, -2, 3, -4]);
