---
layout: post
title: "Blockchain notes"
excerpt: "It's just private notes."
date: 2019-02-15
---

## Bitcoin scalability issues
Number of transactions network can confirm in the certain amount of time.

- Bitcoin blocks are created every 10 min, and a block can hold 1MB of
transaction March of 2018. It means bitcoin blockchain can process 3
transactions a second.

- In 2015, transaction volume exceeded network's capacity so much, blocks run
  out of space meaning that transactions are not included in blockchain and
  unconfirmed. It led to proposals such as Bitcoin XT, Bitcoin Classic,
  Segregated witness (SegWit)

# Bitcoin mechanics & Optimizations

- bitcoin address includes 3 things: public key, version byte(which network
  we're on), checksum(to avoid human error)

## Content's of a transaction
- metadata: id, locktime, size
- input: previously created UTXOs, proof eligible of redeeming UTXOs
- output: new UTXO

## Brain wallet and key stretching
key stretching: hash again and again & again, for example you could hash a string
"foobarbaz" 10 times with SHA256

## Don't keep your money on exchanges for long term

*How decentralized exchanges like bisq work?*
