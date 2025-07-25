import java.util.HashSet;
import java.util.Set;

public class MaxUniqueSubArrSumAfterDel {
    class Solution {
    public int maxSum(int[] nums) {
        
        Set<Integer> set = new HashSet<>();
        int sum=0, neg=Integer.MIN_VALUE;

        for(int i=0;i<nums.length;i++){
            if(nums[i]<=0 && nums[i]>neg){
               neg=nums[i];
            }
           else if(nums[i]>0 && !set.contains(nums[i])){
                set.add(nums[i]);
                sum+=nums[i];
           }
        }

        

        return sum>0?sum:neg;
    }
}
}
