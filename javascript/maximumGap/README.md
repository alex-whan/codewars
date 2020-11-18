# Maximum Gap

- ### **[LINK TO CODE](./maximum-gap.js)**
- [Link to CodeWars kata](https://www.codewars.com/kata/5a7893ef0025e9eb50000013)
- [Return to Table of Contents](https://github.com/alex-whan/codewars)

## Task

Given an array/list [] of integers, find the maximum difference between the successive elements in its sorted form.

## Notes

- Array/list size is at least 3 .
- Array/list's numbers will be a mixture of positives, negatives, and zeros.
- Repetition of numbers in the array/list could occur.
- The Maximum Gap is computed regardless of the sign (positive/negative).

## Input >> Output Examples

    maxGap ({13,10,5,2,9}) ==> return (4)

**Explanation:**
The Maximum Gap after sorting the array is 4, the difference between 9 - 5 = 4.

    maxGap ({-3,-27,-4,-2}) ==> return (23)

**Explanation:**
The Maximum Gap after sorting the array is 23, the difference between |-4- (-27) | = 23.

    maxGap ({-7,-42,-809,-14,-12}) ==> return (767)

**Explanation:**
The Maximum Gap after sorting the array is 767, the difference between | -809- (-42) | = 767.

    maxGap ({-54,37,0,64,640,0,-15}) ==> return (576)

**Explanation:**
The Maximum Gap after sorting the array is 576, the difference between | 64 - 640 | = 576.
