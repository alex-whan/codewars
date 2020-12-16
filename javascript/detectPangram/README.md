# Detect Pangram

- ### **[LINK TO CODE](./detect-pangram.js)**
- [Link to CodeWars kata](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)
- [Return to Table of Contents](https://github.com/alex-whan/codewars)

## Task

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence `"The quick brown fox jumps over the lazy dog"` is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return `True` if it is, `False` if not. Ignore numbers and punctuation.

## Input >> Output Examples

---

    "The quick brown fox jumps over the lazy dog." => returns TRUE

**Explanation:**

- All letters appear at least once within the string.

---

    "Hello there! Lovely day for coding." => returns FALSE

**Explanation:**

- All letters do not appear at least once within the string.
