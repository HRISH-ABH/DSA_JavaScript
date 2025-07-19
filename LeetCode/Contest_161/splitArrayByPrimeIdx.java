package LeetCode.Contest_161;

import java.util.ArrayList;

// You are given an integer array nums.

// Split nums into two arrays A and B using the following rule:

// Elements at prime indices in nums must go into array A.
// All other elements must go into array B.
// Return the absolute difference between the sums of the two arrays: |sum(A) - sum(B)|.

// A prime number is a natural number greater than 1 with only two factors, 1 and itself.

// Note: An empty array has a sum of 0.©leetcode

class Solution {
    public long splitArray(int[] nums) {
        // create two arrays
        //filter out prime indices and non prime indices
        // sum of both then abs diff


        
        ArrayList<Integer>primeIdx=new ArrayList<>();
        ArrayList<Integer>nonPrimeIdx=new ArrayList<>();
        long sumP=0,sumN=0;
        for(int i=0;i<nums.length;i++){
            if(isPrime(i)) primeIdx.add(nums[i]);
            else nonPrimeIdx.add(nums[i]);
        }

        for(int i : primeIdx){
            sumP+=i;
        }
        for(int i : nonPrimeIdx){
            sumN+=i;
        }
        return Math.abs(sumP-sumN);

    }

    private boolean isPrime(int n) {
        if (n <= 1)
            return false;
        if (n <= 3)
            return true;
        if (n % 2 == 0 || n % 3 == 0)
            return false;

        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }
        return true;
    }
}

