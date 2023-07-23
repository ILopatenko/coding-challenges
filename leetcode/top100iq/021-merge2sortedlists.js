//LINK: https://leetcode.com/problems/merge-two-sorted-lists/
const mergeTwoLists = (list1, list2) => {
   let merged = new ListNode();
   const pointer = merged;

   while (list1 && list2) {
      if (list1.val <= list2.val) {
         merged.next = list1;
         list1 = list1.next;
      } else {
         merged.next = list2;
         list2 = list2.next;
      }
      merged = merged.next;
   }

   merged.next = list1 || list2;
   return pointer.next;
};
