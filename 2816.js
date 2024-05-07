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
const doubleIt = (head) => {
  const result = head;
  const stack = [];

  while (head) {
    stack.push(head);

    head = head.next;
  }

  let temp = 0;

  let next = null;
  console.log(stack);
  while (stack.length !== 0) {
    const element = stack.pop();
    const doubleElement = element.val + element.val;

    element.val = (doubleElement + temp) % 10;
    if (doubleElement + temp >= 10) {
      temp = 1;
    } else {
      temp = 0;
    }
  }

  if (temp === 1) return new ListNode(temp, result);

  return result;
};

console.log(doubleIt(ListNode.fromArray([1, 8, 9])).toArray()); // 3 7 8
console.log(doubleIt(ListNode.fromArray([9, 9, 9])).toArray()); // 1 9 9 8
