package Recursion;

public class ReverseString {

    public String str;
    public String reverseStr;

    public ReverseString(String str) {
        this.str = str;
        this.reverseStr="";
    }

    public void reverseString(String str,int idx){
        if(idx==str.length()) return;
        reverseString(str, idx+1);
        System.out.println(str.charAt(idx));
        reverseStr+=str.charAt(idx);
    }

    public static void main(String[] args) {
        ReverseString obj=new ReverseString("abcd");
        obj.reverseString(obj.str, 0);
       System.out.println( obj.reverseStr);
    }
    
}
