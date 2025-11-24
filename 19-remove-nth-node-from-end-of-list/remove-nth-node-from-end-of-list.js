/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
        let node=[];
        let curr=head;
        while(curr){
            node.push(curr);
            curr=curr.next;
        }
        let removeIndex=node.length-n;
        if(removeIndex==0){
            return head.next;
        }
        node[removeIndex-1].next=node[removeIndex].next;
        return head;
};