public class MaxProductSubarray {
    class Solution {
    public int maxProduct(int[] nums) {
        int preS=1,sufS=1,max=Integer.MIN_VALUE;
int n=nums.length;
        for(int i=0;i<n;i++){
            if(preS==0) preS=1;
            if(sufS==0) sufS=1;

            preS=preS*nums[i];
            sufS=sufS*nums[n-i-1];

            max=Math.max(max,Math.max(preS,sufS));
        }
        return max;
    }
}
}
