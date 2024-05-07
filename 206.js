import { ListNode } from "./ListNode.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = (head) => {
  let node = null;

  while (head !== null) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }

  return node;
};

reverseList(ListNode.fromArray([1, 2, 3, 4, 5]));
reverseList(ListNode.fromArray([1, 2]));
