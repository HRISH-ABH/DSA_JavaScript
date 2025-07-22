package Others;

public class LargestNumberAtLeastTwice {
    class Solution {
    public int dominantIndex(int[] nums) {
        int largest = nums[0], idx = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > largest) {
                largest = nums[i];
                idx = i;
            }
        }

        for (int i = 0; i < nums.length; i++) {
            if (i != idx && 2 * nums[i] > largest) {
                return -1;
            }
        }
        return idx;

    }
}
}
