import {ListNode} from "./ListNode.js";


/**
 * image in ./assets/160.png
 * <img src="https://i.imgur.com/dDUjSPk.png" align="center"/>
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

const getIntersectionNode = function (headA, headB) {
    let a = headA
    let b = headB


    while (a !== b) {
        a = a === null ? headB : a.next // a + b =>
        b = b === null ? headA : b.next // b + a => length of list equal
    }
    return a
};

const intersectionNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))

const listNode = new ListNode(9, new ListNode(8, intersectionNode))
const listNode2 = new ListNode(11, new ListNode(12, new ListNode(13, new ListNode(14, new ListNode(15, new ListNode(16, intersectionNode))))))

console.log(getIntersectionNode(listNode, listNode2))


