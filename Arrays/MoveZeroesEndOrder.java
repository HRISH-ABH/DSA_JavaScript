import java.util.Arrays;

public class MoveZeroesEndOrder {
    class Solution {
    public static void moveZeroes(int[] nums) {
        int insertIdx=0;

        for(int i=0;i<nums.length;i++){
            if(nums[i]!=0){
                nums[insertIdx++]=nums[i];
            }
        }

        for(int i=insertIdx;i<nums.length;i++){
            nums[i]=0;

        }
     
    }

}
public static void main(String[] args) {
    int [] nums={1,2,0,3,0,7,8,0};
    Solution.moveZeroes(nums);
  System.out.println(Arrays.toString(nums));
}
}
