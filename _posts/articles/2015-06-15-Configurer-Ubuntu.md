---
layout: post
title: Configurer Ubuntu
modified:
categories: articles
excerpt:
tags: [Ubuntu,OpenSource,installation,]
image: 
  feature: ubuntu.jpg
comments: true
share: true
date: 2015-06-13T08:31:11+02:00
author: xavier
---
# Que faire après avoir installé ubuntu

Ubuntu est un système d'exploitation qui convient particulièrement:

* Aux geeks: outils developpeurs, système le plus utilisé par les serveurs web, personnalisation infinie...
* Aux pas geeks: système fiable, stable & sans virus. Il faut néanmoins un peu de bonne volonté pour l'installer. Des [associations de geeks locaux](https://aful.org/gul) (comme les geeks du dimanche) peuvent vous aider.

## Installation système

###  Completer l'installation

Dans un premier temps, mettre à jour en tapant dans un terminal:

    sudo apt-get update && sudo apt-get upgrade

Quelques paquets utiles, en particulier pour lire des médias:

    sudo apt-get install ubuntu-restricted-extras synaptic chromium chrome vlc skype dropbox

Des petit outils bonus pour les geeks:

    sudo apt-get install guake gimp imagemagick gksu virtualbox

### Troubleshooting

Resoudre un problème flash

    sudo mkdir /etc/adobe
    echo "OverrideGPUValidation = 1" | sudo tee -a /etc/adobe/mms.cfg

Reduire l'utilisation du swap ( en particulier pour les disques SSD)

	echo vm.swappiness=20 | sudo tee -a /etc/sysctl.conf
	sudo apt-get install  zram-config 

## Configuration personnelle

* Configurer dropbox
* Config guake: quick open pour ouvrir les lien
* alt+enter sur un fichier pour redefinir l'application par defaut
* Installer sublime text et ajouter au ficher de config config: `"save_on_focus_lost": true,`
* Firefox: Adblock

### Ubuntu Gnome flasback

Petite préférence perso, surtout pour les vieux ordinateurs, revenir à l'apparence gnome 2 tout en gardant le bénéfice des librairies GTK 3

	sudo apt-get install gnome-flashback libappindicator1

Pour dropbox, il faut ajouter l'aire de notification à un des tableaux de bord

[Plus d'infos](http://www.binarytides.com/install-gnome-flashback-ubuntu/)

### Configuration Git
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    git config --global push.default simple

ajout au .bashrc

    alias gitaj='git add . && git commit -m "blabla" && git push'





