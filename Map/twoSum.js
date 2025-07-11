// Problem: Two Sum
// Given an array of integers (nums) and a target value, return the indices of the two numbers such that they add up to the target.
// Assume that each input would have exactly one solution, and you may not use the same element twice.
// Example: Input: nums = [2, 7, 11, 15], target = 9  Output: [0, 1]



function twoSum(nums, target) {
    
    let mp=new Map();
    
    for(let i=0;i<nums.length;i++){
        let secondElem=target-nums[i];
        
        if(mp.has(secondElem)) return [mp.get(secondElem),i];
        else mp.set(nums[i],i);
    }
}
