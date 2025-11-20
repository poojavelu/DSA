/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
        if(!head) return;

        let node=[];
        let curr=head;

        while(curr){
            node.push(curr);
            curr=curr.next;
        }

        let i=0,j=node.length-1;
        while(i<j){
            node[i].next=node[j];
            i++;
            if(i>=j) break;
            node[j].next=node[i];
            j--;
        }
        node[i].next=null;
};