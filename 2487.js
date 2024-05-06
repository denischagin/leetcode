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
const removeNodes = (head) => {
  let result = head;
  const stack = [];

  while (head !== null) {
    while (head.val > stack.at(-1)?.val) {
      stack.pop();
    }

    stack.push(head);
    head = head.next;
  }

  let next = null;
  while (stack.length !== 0) {
    result = stack.pop();
    result.next = next;
    next = result;
  }

  console.log(result.toArray());
  return result;
};

removeNodes(ListNode.fromArray([5, 2, 13, 3, 8]));
removeNodes(ListNode.fromArray([1, 1, 1, 1]));
