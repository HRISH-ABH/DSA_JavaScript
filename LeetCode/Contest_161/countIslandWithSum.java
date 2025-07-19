package LeetCode.Contest_161;
// You are given an m x n matrix grid and a positive integer k. An island is a group of positive integers (representing land) that are 4-directionally connected (horizontally or vertically).

// The total value of an island is the sum of the values of all cells in the island.

// Return the number of islands with a total value divisible by k.©leetcode

class Solution {

    private int row,col;
    private int [][]grid;
    private boolean [][]visited;
    private int k;
    public int countIslands(int[][] grid, int k) {

        this.grid=grid;
        this.row=grid.length;
        this.col=grid[0].length;
        this.visited=new boolean[row][col];
        this.k=k;
        int ans = 0;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j <col; j++) {
                if (grid[i][j] > 0 && !visited[i][j]) {
                    int sum = dfs(i, j);
                    if (sum % k == 0) {
                        ans++;
                    }
                }
            }
        }
        return ans;

    }

    private int dfs(int i,int j){
        if(i<0 || j<0 || i>=row ||j>=col) return 0;
        if(visited[i][j] || grid[i][j]<=0) return 0;

        visited[i][j]=true;
        int sum=grid[i][j];

        sum+=dfs(i+1,j); //right
        sum+=dfs(i-1,j);//left
        sum+=dfs(i,j+1);//up
        sum+=dfs(i,j-1);//down


        return sum;
    }
}

