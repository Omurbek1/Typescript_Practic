type NesetdNumber = number | NesetdNumber[]

const nums: NesetdNumber = [1, 2, 3, 4, 5, [1, 2, 3, [1[2[3[4[5[6[6[7]]]]]]]]]]
nums.push(1)
nums.push([1,[12]])
console.log(nums)