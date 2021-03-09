---
layout: post
title: gsettings Command in ubuntu
excerpt: Customizing Ubuntu UI
date: 2020-04-13
---

## setting

```bash
gsettings set SCHEMA [:PATH]  KEY VALUE
```

Example:

```bash
gsettings set org.gnome.desktop.wm.keybindings panel-main-menu "[]"
```

## resetting

```bash
gsettings reset SCHEMA [:PATH]  KEY
gsettings reset-recursively SCHEMA [:PATH]
```

Example:

```bash
gsettings reset org.gnome.desktop.wm.keybindings panel-main-menu
```

# Now for the fun stuff

https://unix.stackexchange.com/questions/388238/how-to-set-super-windows-key-to-show-all-applications-menu-in-gnome-de

disable alt+f1
```bash
gsettings set org.gnome.desktop.wm.keybindings panel-main-menu "[]"
```
