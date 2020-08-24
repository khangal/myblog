---
layout: post
title: Code Smells
excerpt: Tech Club
date: 2020-05-11
---

# Layout

- [Sandy Metz's slides](https://speakerdeck.com/skmetz/get-a-whiff-of-this)
- What are they?
- How they were created?
- [3rd chapter of refactoring](https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/#toc)

- Book structure
  Name
  Diagram
  Motivation
  Mechanics
  Example

- tiwet61048@zaelmo.com
- Chapter 7: Encapsulation
  Encapsulate Variable

  ```javascript
  let defaultOwner = { firstName: "Martin", lastName: "Fowler" }

  // to
  let defaultOwner = { firstName: "Martin", lastName: "Fowler" }
  export function defaultOwner() { return defaultOwnerData }
  export function setDefaultOwner(arg) { defaultOwnerData = arg }
  ```


Just to not forget

for vs higher order functions

law of demeter

type switch vs polymorphism

inheritance vs composition
