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

## Installation System

###  Se mettre à jour

sudo apt-get update && sudo apt-get upgrade

### Des packets utiles

sudo apt-get install ubuntu-restricted-extras

sudo apt-get install synaptic Chromium Chrome

sudo apt-get install virtualbox vlc skype dropbox

### Des petits bonus

sudo apt-get install guake gimp sublime imagemagick

### Resoudre Pb flash

sudo mkdir /etc/adobe

echo "OverrideGPUValidation = 1" | sudo tee -a /etc/adobe/mms.cfg 


## Config Personnelle

Configurer dropbox

Connecter comptes chrome & chromium

firefox: Toujours en navigation privée > pour banque, impots, youporn...

Config guake: quick open

alt+enter pour redefinir app par defaut

Sublime text:	    "save_on_focus_lost": true,

## Ubuntu Gnome flasback
Petite préférence perso, surtout pour les vieux ordinateurs, revenir au look gnome 2 tout en gardant le bénéfice des librairies gnome 3

sudo apt-get install gnome-flashback libappindicator1 

Pour dropbox: ajouter notification area




