const arr = [10, 5, 4, 8, 3, 6, 2, 7, 1, 9];
//sort array
for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < i; j++) {
    if (arr[j] < arr[i]) {
      //   [arr[i], arr[j]] =[arr[j],arr[i]]
      let swipe = arr[i];
      arr[i] = arr[j];
      arr[j] = swipe;
    }
  }
}
console.log(arr);
