// Q2. Minimum Removals to Balance Array

// You are given an integer array nums and an integer k.

// An array is considered balanced if the value of its maximum element is at most k times the minimum element.

// You may remove any number of elements from nums​​​​​​​ without making it empty.

// Return the minimum number of elements to remove so that the remaining array is balanced.

// Note: An array of size 1 is considered balanced as its maximum and minimum are equal, and the condition always holds true.


class Question2 {
 class Solution {
    public int minRemoval(int[] nums, int k) {
        Arrays.sort(nums);
        int length = 1; //single elem
        int l = 0;

        for (int end = 0; end < nums.length; end++) {
            while (nums[end] > (long) nums[l] * k) {
                l++;
            }
            length = Math.max(length, end - l + 1);
        }
        return nums.length - length;

    }
}
}