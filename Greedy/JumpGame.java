package Greedy;

class JumpGame {
    public boolean canJump(int[] nums) {

        int goal=nums.length-1; //last index

        //starting from behind--second last index
        for(int i=nums.length-2;i>=0;i--){

            // can we reach goal from this index?
            if(i+nums[i] >= goal){
                // update goal
                goal=i;
            }
        }
        return goal==0;
    }
}