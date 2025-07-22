package Others;

import java.util.HashSet;
import java.util.Set;

public class MultiplyValByTwo {
    class Solution {
    public int findFinalValue(int[] nums, int original) {
        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < nums.length; i++) {

            set.add(nums[i]);
        }

        while (set.contains(original)) {
            original *= 2;
        }
        return original;
    }
}
}
