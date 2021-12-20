/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * 21. Merge Two Sorted Lists
 * 
 * 
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.



 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1
    } else {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2
    }

};

/**
 * 參考解題 : https://blog.csdn.net/baidu_22561035/article/details/79135781
 * 解題觀念
 * 
 * 1.已有預設一個function ListNode 對 List1 跟 List2 作處理(所以  List1 跟 List2 沒辦法當作陣列操作)
 * 2.List1 跟 List2 都有兩個可以使用的方法 val 跟 next
 * 3.val === > 可以取得第一個值  /  next ===> 剩下的陣列模式
 * 4.透過呼叫自己 mergeTwoLists 繼續做排序動作
 */
