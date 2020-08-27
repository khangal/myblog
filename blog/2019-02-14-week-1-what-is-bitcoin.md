---
layout: post
title: "Week 1 homework: What is bitcoin?"
note: true
---

Bitcoin is built to transact peer to peer without central entity (bank).
It creates pseudonymous(written under a false name) transaction between peers without central entity tracking
their transaction. It creates "privacy".

It has 4 important properties.

## Identity
Identity using public/private key, which makes real world
human somehow anonymous, but with enough effort it's tracable.

Bitcoin’s protocol uses what’s called the Elliptic Curve Digital Signature Algorithm (ECDSA) to create a new set of private key and corresponding public key. The public key is then used with a hash function to create the public address that Bitcoin users use to send and receive funds. The private key is kept secret and is used to sign a digital transaction to make sure the origin of the transaction is legitimate.

## Transactions
What makes transaction valid? (in bank and Bitcoin):
  1. Proof of ownership (a signature)
  2. Available funds
  3. Same funds

To prevent "double spending problem" UTXO (unspent transaction output) model exists.

Transactions are possible because UTXO record system.

## Record keeping
Blockchain network is immutable distributed database. All nodes in database
has every transaction history.

## Consensus
Consensus is agreement on next transaction in database. (1 CPU = 1 Voting power)
