# Product Array

- ### **[LINK TO CODE](./product-array.js)**
- [Link to CodeWars kata](https://www.codewars.com/kata/5a905c2157c562994900009d)
- [Return to Table of Contents](https://github.com/alex-whan/codewars)

## Task

Given an array/list [] of integers, construct a product array of same size such that `prod[i]` is equal to the product of all the elements of the array except `arr[i]`.

## Notes

- Array/list size is at least 2.
- Array/list's numbers will be only positives
- Repetition of numbers in the array/list could occur.

## Input >> Output Examples

---

    productArray ({12,20}) ==> return {20,12}

**Explanation:**

- The first element in array (12) is the product of all the array's elements except the first element.
- The second element (20) is the product of all the array's elements except the second element.

---

    productArray ({1,5,2}) ==> return {10,2,5}

**Explanation:**

- The first element (10) is the product of all array's elements except the first element (1).
- The second element (2) is the product of all array's elements except the second element (5).
- The Third element (5) is the product of all array's elements except the Third element (2).

---

    productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}

**Explanation:**

- The first element (180) is the product of all array's elements except the first element (10).
- The second element (600) is the product of all array's elements except the second element (3).
- The third element (360) is the product of all array's elements except the third element (5).
- The fourth element (300) is the product of all array's elements except the fourth element (6).
- Finally, the fifth element (900) is the product of all array's elements except the fifth element (2).
