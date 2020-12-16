# Maximum Multiple

- ### **[LINK TO CODE](./max-multiple.js)**
- [Link to CodeWars kata](https://www.codewars.com/kata/5aba780a6a176b029800041c)
- [Return to Table of Contents](https://github.com/alex-whan/codewars)

## Task

Given a `Divisor` and a `Bound`, find the largest integer `N`, such that:

- `N` is divisible by divisor.

- `N` is less than or equal to bound.

- `N` is greater than 0.

## Notes

- The parameters (`divisor`, `bound`) passed to the function are only positive values.
- The divisor is guaranteed to be found.

## Input >> Output Examples

---

    maxMultiple (2,7) ==> return (6)

**Explanation:**

- (6) is divisible by (2), (6) is less than or equal to bound (7), and (6) is > 0.

---

    maxMultiple (10,50)  ==> return (50)

**Explanation:**

- (50) is divisible by (10), (50) is less than or equal to bound (50), and (50) is > 0.

---

    maxMultiple (37,200) ==> return (185)

**Explanation:**

- (185) is divisible by (37), (185) is less than or equal to bound (200), and (185) is > 0.
