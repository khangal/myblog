---
layout: post
title: fs-commands
excerpt: Notes
note: true
---

lsblk - list block devices

# Copy iso to usb
dd - disk dump
dd if=~/Downoloads/archlinux.iso of=/dev/sdb status="progress"

# Check if pc supports uefi
ls /sys/firmware/efi/efivars

# Select wifi from terminal
prefer ethernet cable
wifi-menu

# Sync time from network
timedatectl set-ntp true

# Manipulate partition
fdisk /dev/sdb
boot partition - 200MB
swap partition - 150% ram size (6G)
root partition - C disk size
home partition - D disk size
w (write and wipe all)

# make filesystem
mkfs.ext4 /dev/{boot,root,home}
mkfs.ext4 boot partition
mkfs.ext4 root partition
mkfs.ext4 home partition

# make swap partition
mkswap /dev/{swap}
swapon /dev/{swap}

# automatic partition mount on boot
this file does that vim /etc/fstab

genfstab -U /mnt >> /mnt/etc/fstab

# archchroot /mnt

# pacman -S networkmanagar
