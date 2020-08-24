---
layout: post
title: gsettings Command in ubuntu
excerpt: Customizing Ubuntu UI
date: 2020-04-13
---

# Intro

## setting
gsettings set SCHEMA [:PATH]  KEY VALUE

Example:
gsettings set org.gnome.desktop.wm.keybindings panel-main-menu "[]"

## resetting
gsettings reset SCHEMA [:PATH]  KEY
gsettings reset-recursively SCHEMA [:PATH]

Example:
gsettings reset org.gnome.desktop.wm.keybindings panel-main-menu


# Now for the fun stuff
https://unix.stackexchange.com/questions/388238/how-to-set-super-windows-key-to-show-all-applications-menu-in-gnome-de

gsettings set org.gnome.desktop.wm.keybindings panel-main-menu "[]"
