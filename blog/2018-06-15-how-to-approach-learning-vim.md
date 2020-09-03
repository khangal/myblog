---
layout: post
excerpt: Vim learning tips
date: 2018-06-15
tags: ['vim']
---

## Why vim?
1. It's not that hard to learn. (3 weeks is enough)
2. Enjoyable. You want to spend more time doing coding.
3. You don't have to learn any another text editors ever.

## 1. Watch this video
<iframe width="668" height="380" src="https://www.youtube.com/embed/OnUiHLYZgaA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Video summary:

1. Do the vimtutor.
2. Stay out of insert mode, stay in normal mode.
3. Don't use arrow keys, use 'h, j, k, l'
4. Then stop using 'h, j, k, l' and learn better movement characters.
5. Learn motion|text-object + command combinations.
  - dap - delete + around + paragraph (deletes paragraph)
  - dw - delete + word (deletes word)
  - ci) - change + inside + ')' (delete inside parentheses and go to insert)

## 2. Learn how to install plugins
There's bunch of plugin managers like (pathogen, Vundle, vim-plug).
I recommend using [vim-plug](https://github.com/junegunn/vim-plug)

## 3. Essential plugin list
- Some kind of fuzzy search: preferrably [fzf](https://github.com/junegunn/fzf.vim), [ctrlp](https://github.com/kien/ctrlp.vim)
- [surround.vim](https://github.com/tpope/vim-surround)
- For project explorer: netrw + [vim-vinegar](https://github.com/tpope/vim-vinegar)
  (netrw is vim's built in project explorer)

## 4. Advancedish
- Use relative number
- Use [vim-fugitive](https://github.com/tpope/vim-fugitive) to work with git.

## 5. My vim configuration
  Mine is based on [thoughtbots dotfiles](https://github.com/thoughtbot/dotfiles)
  . It includes minimal default configurations such as *set soft tabs* and very
  useful plugins that I later learned to use.
  

## Additional resources
- [vimcasts](http://vimcasts.org) screencasts
- Search on youtube "thoughtbot vim"
