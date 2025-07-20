package Greedy;

public class JumpGameTwo {
    public int jump(int[] nums) {
        int jumps = 0, l = 0, r = 0;

        while (r < nums.length - 1) {
            int maxR = 0;

            for (int i = l; i <=r; i++) {
                maxR = Math.max(maxR, i + nums[i]);
            }
            l = r + 1;
            r = maxR;
            jumps++;
        }
        return jumps;

    }
 
    
}
