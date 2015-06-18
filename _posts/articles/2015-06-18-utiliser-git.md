---
layout: post
title: Utiliser Git
modified: 
categories: articles
excerpt: gouvernement du code par Linus pour Linux
tags: [Opensource, git]
image:
  feature:
date: 2015-06-18T23:42:40+02:00
author: xavier
---
Apprendre à utiliser git, c'est un peu comme apprendre à faire ses lacets. On peut faire sans, mais la vie devient plus simple et moins dangereuse avec.

Dans un répertoire donné git vous permet d'enregistrer les modifications de votre travail. Chaque enregistrement est appelé *commit*. L’intérêt est multiple: avoir un historique des modifications et pouvoir revenir en arrière, pouvoir partager ces modifications à plusieurs, gérer les conflits de versions, gagner le respect d'autres développeurs ...

## Configuration 

    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    git config --global push.default simple

## Quelques commandes

### Initier git

Deux options s'offrent à vous:

	git init

un dossier .git est créé dans votre repertoire pour garder l'historique des modifications.

	git clone https://github.com/LesGeeksDuDimanche/LesGeeksDuDimanche.github.io.git

Un nouveau repertoire est créé, clonant à l'identique le dépot en ligne de ce site

### Sauvegarder vos modifications

	git add .

vous permet d'ajouter l'ensemble du contenu du répertoire au prochain *commit*.

	git commit -m "modification du titre de la page d'accueil"

Permet de créer un enregistrement de l'état de votre travail, avec un petit rappel de la nature des modifications

	git push

Vous permet d'envoyer sur github ou autre les modifications effectuées.
 

## Petit hack

taper dans un terminal

    echo "alias gitaj='git add . && git commit -m "blabla" && git push'" >> ~/.bashrc

Désormais en tapant `gitaj` vous ajoutez, effectuez un commit et un push de votre code
