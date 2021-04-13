---
layout: post
title: Debug zsh startup tim
date: 2021-02-04
---

Inject profiling code

At the beginning of your .zshrc add following: 
```
zmodload zsh/zprof
```


and at the end add:
```zprof</code>```


This will load zprof mod and display what your shell was doing durung your initialization.
Measure startup time
