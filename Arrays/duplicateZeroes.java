class Solution {
    public void duplicateZeros(int[] arr) {
        int n = arr.length;
        int zeroCnt = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] == 0)
                zeroCnt++;
        }
        int i = n - 1, j = n - 1 + zeroCnt;

        while (i != j) {
            if (j < n) {
                arr[j] = arr[i];
            }
            j--;
            if (arr[i] == 0) {
                if (j < n) {

                    arr[j] = arr[i];
                }
                j--;
            }
            i--;

        }

    }
}