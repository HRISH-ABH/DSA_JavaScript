package SlidingWindow;

public class MaximumAverageSubarray {
    class Solution {
    public double findMaxAverage(int[] nums, int k) {
       
        int sum=0;
        // first window sum
        for(int i=0;i<k;i++){
            sum+=nums[i];
        }
        // maxSum = first average sum
        double maxSum=(double) sum/k;

        // sliding

        for(int i=k;i<nums.length;i++){
            sum+=nums[i]-nums[i-k]; //remove the leftmost element
            // new maxx
            maxSum=Math.max(maxSum,(double)sum/k);
        }

        return maxSum;
    }
}
    
}
