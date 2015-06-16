---
layout: post
title: Configurer Ubuntu
modified: null
categories: articles
excerpt: null
tags: 
  - Ubuntu
  - OpenSource
  - installation
image: 
  feature: ubuntu.jpg
comments: true
share: true
date: {}
author: xavier
published: true
---

# Que faire après avoir installé ubuntu

Ubuntu est un système d'exploitation qui convient particulièrement:

* Aux geeks: outils developpeurs, système le plus utilisé par les serveurs web, personnalisation infinie...
* Aux moins geeks: système fiable, stable & sans virus. Il faut néanmoins un peu de bonne volonté pour l'installer. Des [associations de geeks locaux](https://aful.org/gul) (comme les geeks du dimanche) peuvent vous aider.

## Installation système

###  Compléter l'installation

Dans un premier temps, mettre à jour en tapant dans un terminal :

    sudo apt-get update && sudo apt-get upgrade

Quelques paquets utiles, en particulier pour lire des médias :

    sudo apt-get install ubuntu-restricted-extras synaptic chromium chrome vlc skype dropbox

Des petit outils bonus pour les geeks :

    sudo apt-get install guake gimp imagemagick gksu virtualbox

### Troubleshooting

Resoudre un problème Flash :

    sudo mkdir /etc/adobe
    echo "OverrideGPUValidation = 1" | sudo tee -a /etc/adobe/mms.cfg

Reduire l'utilisation du swap ( en particulier pour les disques SSD) :

	echo vm.swappiness=20 | sudo tee -a /etc/sysctl.conf
	sudo apt-get install  zram-config 

## Configuration personnelle

* Configurer Dropbox
* Config guake: quick open pour ouvrir les liens
* alt+enter sur un fichier pour redéfinir l'application par defaut
* Installer SublimeText et ajouter au ficher de config: `"save_on_focus_lost": true,`
* Firefox: Adblock
* Nautilus: Ctrl+B pour modifier les signets

### Ubuntu Gnome flasback

Petite préférence perso, surtout pour les vieux ordinateurs, revenir à l'apparence Gnome2 tout en gardant le bénéfice des librairies GTK 3

	sudo apt-get install gnome-flashback libappindicator1

Pour Dropbox, il faut ajouter l'aire de notification à un des tableaux de bord

[Plus d'infos](http://www.binarytides.com/install-gnome-flashback-ubuntu/)

### Configuration Git
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    git config --global push.default simple

Ajout au .bashrc

    alias gitaj='git add . && git commit -m "blabla" && git push'
