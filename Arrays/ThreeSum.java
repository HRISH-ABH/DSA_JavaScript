import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ThreeSum {
    class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Set<List<Integer>>set=new HashSet<>();
        Arrays.sort(nums);
        
        for(int i=0;i<nums.length-2;i++){
            int l=i+1,r=nums.length-1;

            while(l<r){
                int sum=nums[i]+nums[l]+nums[r];

                if(sum==0){
                    set.add(Arrays.asList(nums[l],nums[i],nums[r]));
                    l++;
                    r--;
                }
                else if(sum<0){
                l++;
                }
                else{
                    r--;
                }
            }
        }
        return new ArrayList<>(set);
    }
}
}
