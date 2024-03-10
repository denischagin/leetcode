export class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  // Статический метод для преобразования массива в связный список
  static fromArray(array) {
    let head = new ListNode(array[0]);
    let current = head;
    for (let i = 1; i < array.length; i++) {
      current.next = new ListNode(array[i]);
      current = current.next;
    }
    return head;
  }

  // Метод для преобразования связного списка в массив
  toArray() {
    let array = [];
    let current = this;
    while (current !== null) {
      array.push(current.val);
      current = current.next;
    }
    return array;
  }
}
