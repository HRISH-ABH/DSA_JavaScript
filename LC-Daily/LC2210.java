class LC2210{
    class Solution {
    public int countHillValley(int[] nums) {
        int i=0,j=1,count=0;

        while(j+1<nums.length){
            if((nums[i]<nums[j] && nums[j]>nums[j+1])
            || (nums[i]>nums[j]&&nums[j]<nums[j+1])){
                count++;
                i=j;
            }
            j++;

        }
        return count;
    }
}
}