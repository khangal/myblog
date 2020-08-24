---
layout: post
title: Unicode and character sets
date:   2017-11-24 18:32:12 +0800
excerpt: Notes take from Joel Spolsky's blog post
---

## ASCII

ASCII 7bit (128 hurtelh decimal too)
- 32-s baga temdegtuud ni unprintable
  jisheeni: 7 - computer beep, 12 - print

- 32-128-r buh useg, toog durseldeg baiv.

## OEM character sets
ASCII 7 bit ashigladag. 1 byte 8 bit-tei. Uldsen 1 bit-g ni avshiglaval ahiad
ashiglaagui 128-255 hurtel ashiglagdaagui baiv.

Eniig olon gazar humuus zereg oilgood yanz buriin character setuud end tendgui
uusch ehlev.

OEM character set (128-255) end tendgui ooroor durslegdej baiv.
  - American would send their résumés to Israel they would arrive as rגsumגs.

## ANSI
Ene buh OEM mess-g standard-lav.
128-hurtel buh too ni ASCII-tai adil.
128-255 hurtelh toog "code page" gej nerlev. Israel DOS will use 862, Greek
users used 737.

Ene ni erni hangaltgui baiv, Azid bur elgiin yum bolov.
Tegeed internet garch ireh ued ene baidal ni diildhee boliod unicode garch irev.

## Unicode code points
Ene ni shal ooroor character-tai haritsdag baiv.
Every letter maps to code point.

A -> U+0041 (Latin capital letter A)
Hello -> U+0048 U+0065 U+006C U+006C U+006F

## Unicode Encodings
Ehnii sanaanuudiin neg ni toonuudiig 2 byte-d hadgalah bv. (UTF-16)
Hello - > (FFFE) 00 48 00 65 00 6C 00 6C 00 6F (little-endian mode)
Hello - > (FEFF) 48 00 65 00 6C 00 6C 00 6F 00 (big-endian mode)
endianness is for cpu performance

Sul tal ni angli usguudiig 2 byte-d hadgalah yamarch hereggui baiv.s

## UTF-8
In UTF-8, every code point from 0-127 is stored in a single byte.
Only code points 128 and above are stored using 2, 3, in fact, up to 6 bytes.

U+0048 U+0065 U+006C U+006C U+006F stored as 48 65 6C 6C 6F

### TL;DR just use utf-8
