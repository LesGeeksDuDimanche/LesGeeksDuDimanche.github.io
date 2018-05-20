---
title: Que faire après avoir installé Ubuntu ?
date: 2015-06-13 12:57:12 Z
categories:
- articles
tags:
- Ubuntu
- OpenSource
- installation
layout: post
modified: 
excerpt: Quand tu croyais avoir fini
image:
  feature: ubuntu.jpg
comments: true
share: true
author: xavier
---

Ubuntu est un système d'exploitation qui convient particulièrement:

* Pour les moins geeks : système fiable, stable & sans virus. C'est idéal pour un ordinateur public, en MJC ou celui de vos parents. Il faut néanmoins parfois un peu de bonne volonté pour l'installer. Des [associations de geeks locaux](https://aful.org/gul) comme Les Bricodeurs peuvent vous aider.
* Pour les plus geeks : outils de développement, système le plus utilisé par les serveurs web, de nombreux logiciels, une grande communauté, personnalisation infinie

Voici quelques notes qui me servent installer rapidement les outils utiles.

##  Compléter l'installation

Ubuntu repose sur un système de paquets. Tout les logiciels et le système peuvent être installés à partir de ceux ci. Dans un premier temps, il faut mettre à jour la liste (update) et installer ces mises à jours (upgrade).

    sudo apt-get update && sudo apt-get upgrade

NB: Les commandes peuvent etre copiées/collées ou tapées dans un terminal (ctrl+shift+T). '&&'' permet d'enchainer deux commandes sur la même ligne

Quelques paquets utiles pour lire des médias :

    sudo apt-get install ubuntu-restricted-extras vlc

Des logiciels courants utiles 
    
    sudo apt-get install synaptic chromium chrome skype dropbox

Des petit outils bonus pour les geeks :

    sudo apt-get install guake gksu virtualbox

Pour de la retouche d'images

    sudo apt-get install gimp imagemagick 


## Optimisation

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
* Config guake : quick open pour ouvrir les liens
* alt+enter sur un fichier pour redéfinir l'application par defaut

* Firefox : Adblock
* Nautilus : Ctrl+B pour modifier les signets
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

Petite préférence perso, surtout pour les vieux ordinateurs, revenir à l'apparence Gnome2 tout en gardant le bénéfice des librairies GTK 3. Vous pouvez aussi utiliser Ubuntu Mate pour sensiblement le même résultat.

	sudo apt-get install gnome-flashback libappindicator1

Pour Dropbox, il faut ajouter l'aire de notification à un des tableaux de bord

[Plus d'infos](http://www.binarytides.com/install-gnome-flashback-ubuntu/)

Pour aller plus loin, [Les raccourcis sous Ubuntu](/articles/raccourcis-sous-ubuntu)

