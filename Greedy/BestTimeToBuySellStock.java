package Greedy;

public class BestTimeToBuySellStock {
    class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit=0;

        int min=prices[0];
        for(int i=1;i<prices.length;i++){
            // update the min element
            if(prices[i]<min)min=prices[i];
            //calculate maxProfit
            else{
                maxProfit=Math.max(maxProfit,prices[i]-min);
            }
        }
        return maxProfit;
    }
}
    
}
