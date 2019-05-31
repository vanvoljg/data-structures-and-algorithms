'use strict';

module.exports = function mergeLists(list1, list2) {
  let head = list1.head;

  if (list1.length === 0 && list2.length === 0) {
    return head;
  }

  let c1 = list1.head;
  let c2 = list2.head;

  while (c1 && c2) {

    let n1 = c1.next;
    let n2 = c2.next;

    c1.next = c2;
    // if n1 is null here, the first list has no more elements
    // keep the second list going
    c2.next = n1 || c2.next;

    c1 = n1;
    c2 = n2;
    
  }

  return head;
};
