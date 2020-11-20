# Nth Smallest Element

- ### **[LINK TO CODE](./nth-smallest.element.js)**
- [Link to CodeWars kata](https://www.codewars.com/kata/5a512f6a80eba857280000fc)
- [Return to Table of Contents](https://github.com/alex-whan/codewars)

## Task

Given an array/list [] of integers, find the Nth smallest element in the array.

## Notes

- Array/list size is at least 3.
- Array/list's numbers could be a mixture of positives, negatives and zeros.
- Repetition in array/list's numbers could occur, so don't remove duplicate values.

## Input >> Output Examples

---

    nthSmallest({3,1,2} ,2) ==> return (2)

**Explanation:**

Since the passed-in number is `2`, then the `second` smallest element in this array/list is `2`.

---

    nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)

**Explanation:**

Since the passed-in number is `3`, then the `third` smallest element in this array/list is `7`.

---

    nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

**Explanation:**

Since the passed-in number is `5`, then the `fifth` smallest element in this array/list is `92`.
