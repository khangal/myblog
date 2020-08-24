---
layout: post
title: Setup environment
excerpt: ethereum development environment setup
---
1. Install Solidity compiler [docs](https://solidity.readthedocs.io/en/v0.5.4/installing-solidity.html)
```bash
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install solc
```

2. Install Go ethereum [docs](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu)
```bash
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```
