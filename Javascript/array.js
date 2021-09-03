function getSecondLargest(nums) {
  let n = nums.sort(function (a, b) {
    return a - b;
  });
  console.log(n);
  let largNO = n[nums.length - 1];
  let s;
  for (let i = 0; i < nums.length; i++) {
    if (largNO > nums[i]) s = nums[i];
  }

  return s;
}

console.log(getSecondLargest([1, 2, 3, 4, 3, 5, 43, 54]));
