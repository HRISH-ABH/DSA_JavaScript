


// You are given two categories of theme park attractions: land rides and water rides.

// Land rides
// landStartTime[i] – the earliest time the ith land ride can be boarded.
// landDuration[i] – how long the ith land ride lasts.
// Water rides
// waterStartTime[j] – the earliest time the jth water ride can be boarded.
// waterDuration[j] – how long the jth water ride lasts.
// A tourist must experience exactly one ride from each category, in either order.

// A ride may be started at its opening time or any later moment.
// If a ride is started at time t, it finishes at time t + duration.
// Immediately after finishing one ride the tourist may board the other (if it is already open) or wait until it opens.
// Return the earliest possible time at which the tourist can finish both rides.

public class Question1 {
    class Solution {
    public int earliestFinishTime(int[] landStartTime, int[] landDuration, int[] waterStartTime, int[] waterDuration) {

        int minTime=Integer.MAX_VALUE;

        for(int i=0;i<landStartTime.length;i++){
            int startLand=landStartTime[i];
            int durLand=landDuration[i];

            for(int j=0;j<waterStartTime.length;j++){
                int startWater=waterStartTime[j];
                int durWater=waterDuration[j];


                int endLand=startLand+durLand; //land ride 

                int waterStart=Math.max(endLand,startWater);
                int endTimeLandFirst=waterStart+durWater;


                int endWater=startWater+durWater;
                int landStart=Math.max(endWater,startLand);
                int endTimeWaterFirst=landStart+durLand;

                int min=Math.min(endTimeLandFirst,endTimeWaterFirst);
                minTime=Math.min(min,minTime);
            }
        }
        return minTime;
        
    }
}
}
