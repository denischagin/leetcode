/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

import { ListNode } from "./ListNode.js";

const mergeKLists = (lists) => {
  const temp = lists[0];
  let headTemp = temp;
  const result = new ListNode();
  let headResult = result;

  for (let i = 1; i < lists.length; i++) {
    let headItem = lists[i];

    while (headItem !== null || headTemp !== null) {
      if (!headItem) {
        headResult.val = headTemp.val;
        headTemp = headTemp.next;
      }

      else if (!headTemp) {
        headResult.val = headItem.val;
        headItem = headItem.next;
      }

      else if (headItem?.val > headTemp?.val) {
        headResult.val = headTemp.val;
        headTemp = headTemp.next;
        // console.log('hello')
      }

      else if (headItem?.val <= headTemp?.val) {
        headResult.val = headItem.val;
        headItem = headItem.next;
      }

      if (headItem === null && headTemp === null) continue;

      headResult.next = headResult.next ? headResult.next : new ListNode();
      headResult = headResult.next;
    }

    headResult = result;
    headTemp = result;
  }

  return result;
};
console.log(
  mergeKLists([
    ListNode.fromArray([1, 4, 5]),
    ListNode.fromArray([1, 3, 4]),
    ListNode.fromArray([2, 6]),
  ]).toArray(),
);

