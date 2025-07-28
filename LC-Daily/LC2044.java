public class LC2044 {
    class Solution {
    int maxOR = 0;  // stores the maximum OR over all subsets

    private int helper(int[] nums, int idx, int curr) {
        int n = nums.length;

        if (idx == n) {
            return curr == maxOR ? 1 : 0;
        }

        // Include nums[idx] OR Skip it
        return helper(nums, idx + 1, curr | nums[idx]) + helper(nums, idx + 1, curr);
    }

    public int countMaxOrSubsets(int[] nums) {
        int mx = 0;
        for (int i : nums) {
            mx |= i;  // Calculate the overall max OR using all elements
        }

        this.maxOR = mx;

        return helper(nums, 0, 0);  // Start from index 0, current OR sum is 0
    }
}
}
