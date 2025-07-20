package Recursion;

import java.util.Stack;

public class reverseStack {
    Stack<Integer>st;
    Stack<Integer>reversedSt=new Stack<>();

    public void reverseS(Stack<Integer>st,int idx){
        this.st=st;
        if(idx==st.size()) {
            return;
        } 

        int temp=st.pop();;
        
        reverseS(st, idx+1);
        reversedSt.push(temp);

System.out.println(reversedSt);
    } 

    public static void main(String[] args) {
        reverseStack stack=new reverseStack();
        Stack<Integer>stk=new Stack<>();
        stk.push(1);
        stk.push(2);
        stk.push(3);
        stk.push(4);
        stk.push(5);
        stack.reverseS(stk,0);
    }
    
}
