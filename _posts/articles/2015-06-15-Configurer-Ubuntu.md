---
layout: post
title: Configurer Ubuntu
modified: null
categories: articles
excerpt: Quand tu croyais avoir fini
tags: 
  - Ubuntu
  - OpenSource 
  - installation
image: 
  feature: ubuntu.jpg
comments: true
share: true
date: 2015-06-13T14:57:12+02:00
author: xavier
published: true
---

# Que faire après avoir installé Ubuntu

Ubuntu est un système d'exploitation qui convient particulièrement:

* Aux geeks: outils développeurs, système le plus utilisé par les serveurs web, personnalisation infinie...
* Aux moins geeks: système fiable, stable & sans virus. Il faut néanmoins un peu de bonne volonté pour l'installer. Des [associations de geeks locaux](https://aful.org/gul) (comme les geeks du dimanche) peuvent vous aider.

Voici quelques notes qui me servent installer rapidement les outils utiles.

## Installation système

###  Compléter l'installation

Ubuntu repose sur un système de paquets. Tout les logiciels et le système peuvent être installés à partir de ceux ci. Dans un premier temps, il faut mettre à jour la liste (update) et installer ces mises à jours (upgrade)

    sudo apt-get update && sudo apt-get upgrade

NB: Les commandes peuvent etre copié/collé ou tapées dans un terminal (ctrl+shift+T). '&&'' permet d'enchainer deux commandes sur la même ligne

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

Pour des options plus fines, éditer le fichier sysctl.conf:
  gksudo subl /etc/sysctl.conf

Avec par exemple:
  # Decrease swap usage to a reasonable level
  vm.swappiness=10
  # Improve cache management
  vm.vfs_cache_pressure=50

## Configuration personnelle

* Configurer Dropbox
* Config guake: quick open pour ouvrir les liens
* alt+enter sur un fichier pour redéfinir l'application par defaut

* Firefox: Adblock
* Nautilus: Ctrl+B pour modifier les signets
* Sublime Text 
  * Installer
  * Ajouter au fichier de config `"save_on_focus_lost": true,`
  * Installer package control : (https://packagecontrol.io/installation)
  * Ctrl + Shift + P, "Install Package", “Language - French - Français”
  * “View” > “Dictionary” > “Language - French - Français” > “fr_FR”
  * F6

* Ligne de commande en couleur:
décommenter la ligne dans .bashrc  ( subl ~/.basrc)
  force_color_prompt=yes



### Ubuntu Gnome flasback

Petite préférence perso, surtout pour les vieux ordinateurs, revenir à l'apparence Gnome2 tout en gardant le bénéfice des librairies GTK 3

	sudo apt-get install gnome-flashback libappindicator1

Pour Dropbox, il faut ajouter l'aire de notification à un des tableaux de bord

[Plus d'infos](http://www.binarytides.com/install-gnome-flashback-ubuntu/)

Pour aller plus loin, [utiliser git](/articles/utiliser-git)

