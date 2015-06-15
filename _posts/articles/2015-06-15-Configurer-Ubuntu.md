---
layout: post
title: Configurer Ubuntu
modified:
categories: articles
excerpt:
tags: [Ubuntu,OpenSource,installation,]
image:
  feature:
date: 2015-06-13T08:31:11+02:00
author: xavier
---
# Que faire après avoir installé ubuntu

## Installation système

###  Se mettre à jour

    sudo apt-get update && sudo apt-get upgrade

### Des packets utiles

Principalement lecture de medias:

    sudo apt-get install ubuntu-restricted-extras synaptic chromium chrome virtualbox vlc skype dropbox

### Des petits bonus pour les geeks

    sudo apt-get install guake gimp  imagemagick

### Troubleshooting

Resoudre Pb flash

    sudo mkdir /etc/adobe
    echo "OverrideGPUValidation = 1" | sudo tee -a /etc/adobe/mms.cfg


## Config Personnelle

* Configurer dropbox
* Config guake: quick open
* alt+enter pour redefinir app par defaut
* Installer sublime text+ config:	    "save_on_focus_lost": true,

### Ubuntu Gnome flasback

Petite préférence perso, surtout pour les vieux ordinateurs, revenir au look gnome 2 tout en gardant le bénéfice des librairies gnome 3

	sudo apt-get install gnome-flashback libappindicator1

Pour dropbox: ajouter notification area

### Config Git
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    git config --global push.default simple

ajout au .bashrc

    alias gitaj='git add . && git commit -m "blabla" && git push'





