---
layout: post
title: "Week 4: Bitcoin in Real Life"
excerpt: "Wallet Mechanics, Mining, & More"
date: 2019-02-15
note: true
---

## Types of Users

Full node miner comprises of:
- Wallet, to manage public and private keys
- Miner, to support the network and earn a mining reward
- Full Blockchain
- Network Routing, to connect p2p

## What wallets do?
- Store private key
- store, send, receive, and list transactions

### Types of wallets
- hot wallet - connected to the internet
- cold wallet - not connected to the internet

## SPV (Simple Payment Verification) is Thin clients
Simple Payment Verification is method for verifying if particular transactions
are included in a block without downloading the entire blockchain.

## Key generation practices
- Best practice is to never reuse pseudonyms, it means using new public, private
  keys for every transactions.
- Why?
  - Someone should not be able to determine how much bitcoin you own
  - Compromising one key is independent of the other ones
  - Keys are computationally easy to generate
- Wallet software will handle this

## JBOK (Just a bunch of keys) Wallets
- Store keys every time transact, or generate bunch of keys pre transaction and
  use them

## HD (Heirarchical Deterministic) Wallets
- transaction 1: hash(master key + 1)
- transaction 2: hash(master key + 2) etc

Using this we don't need to store all hashes in wallets.

# Mining mechanics
