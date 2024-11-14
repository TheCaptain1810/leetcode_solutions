/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let ptrA = headA;
  let ptrB = headB;

  while (ptrA !== ptrB) {
    ptrA = ptrA ? ptrA.next : headB;
    ptrB = ptrB ? ptrB.next : headA;
  }

  return ptrA;
};

// Using HashMap
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
/*
    class Solution {
    public:
        ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
            unordered_map<ListNode*, int> m;
            while(headA != NULL){
                m[headA]++;
                headA = headA -> next;
            }
            while(headB != NULL){
                if(m[headB] > 0){
                    return headB;
                }
                headB = headB -> next;
            }
            return NULL;
        }
    };
*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
//     class Solution {
//     public:
//         ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
//             if (!headA || !headB) return NULL;

//             ListNode* ptrA = headA;
//             ListNode* ptrB = headB;

//             while (ptrA != ptrB) {
//                 ptrA = ptrA ? ptrA->next : headB;
//                 ptrB = ptrB ? ptrB->next : headA;
//             }

//             return ptrA;
//         }
//     };
