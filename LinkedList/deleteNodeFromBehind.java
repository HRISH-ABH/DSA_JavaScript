package LinkedList;

//   public class ListNode {
//      int val;
//      ListNode next;
//      ListNode() {}
//      ListNode(int val) { this.val = val; }
//      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
//  }
 
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // calcalate size first
        int size = 0;

        ListNode node = head;
        while (node!=null) {
            size++;
            node = node.next;
        }
        // if(head.next==null) return null;
        if (n == size) return head.next;
        // reset node
        node = head;
        int i = 1;
        while (i < size - n ) {
            node = node.next;
            i++;
        }
        node.next = node.next.next;

        return head;

    }
}
public class deleteNodeFromBehind {
    
}
