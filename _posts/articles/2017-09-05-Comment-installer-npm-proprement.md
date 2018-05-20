---
title: Comment installer npm proprement
date: 2017-09-05 11:57:12 Z
categories:
- articles
tags:
- Editeur
- developpement
- installation
layout: post
modified: 
excerpt: Please God save us from NPM
image:
  feature: 
comments: true
share: true
author: xavier
---

![npm]({{ site.url }}/images/npm2.png){: .pull-right}

# Mais qu'est que npm? 

Npm est le gestionnaire de paquets de Node.js. Node.js est un serveur, basé sur le moteur V8 de chrome qui permet d'interpréter du code javascript coté serveur. Grace à npm vous pouvez installer des paquets et leurs dépendances. 
Aujourd'hui node et npm sont aussi utilisés par les développeurs webs comme suite d'outils de développement. En effet, beaucoup de dévelopeurs web développent des outils en javascript et les publient sur [npmjs](https://www.npmjs.com/)

# Installation

Pour installer node et npm, il suffit de taper une des commande suivante. Si vous êtes sous windows, vous pouvez installer Cygwin, une virtualbox avec linux ou utiliser "Linux Subsystem". 

Pour les systèmes Debian et Ubuntu 
`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`

`sudo apt install -y nodejs`

Pour les systèmes à base de RPM
`curl -sL https://rpm.nodesource.com/setup_10.x | bash -`

Sous mac vous pouvez le télecharger [ici](https://nodejs.org/dist/v8.11.1/node-v8.11.1.pkg)

Comme on nous l'a signalé [sur twitter](https://twitter.com/le_mulot/status/905102883431088128), vous pouvez aussi utiliser nvm. Nvm est un gestionnaire de version de node.js. Vous trouverez plus d'informations par [ici](https://github.com/creationix/nvm/blob/master/README.md)

## Installer le global localement
Quand vous installez des paquets via npm, si vous ne précisez rien, ils seront installés dans le dossier actuel, généralement du projet en cours. Certains paquets, notamment les outils doivent s'installer globalement avec l'option **-g**. Pour éviter que ceux-ci s'installent dans un dossier système et exigent l'accès root, vous pouvez:

* créer un dossier dédié 
`mkdir ~/.npm-global`
* Configurer npm pour utiliser ce dossier 
`npm config set prefix '~/.npm-global'`
* Ajouter cette ligne à votre fichier .profile ou .bashrc 
`export PATH=~/.npm-global/bin:$PATH`
* Mettre à jour les variables 
`source ~/.profile`

## Utilisation

#### Installer un paquet
Globalement vous avez trois façon d'installer un paquet via npm : 

* **npm install -g XYZ** Vous permet d'installer une nouvelle commande. Meteor, yarn, yeoman par exemple.
* **npm install XYZ** Vous permet d'ajouter un paquet au projet en cours. Il est automatiquement ajouté au fichier package.json dans le dossier en cours
* **npm install --save-dev XYZ** Vous permet d'ajouter un paquet au projet en cours qui servira uniquement pendant le developpement du projet

#### Lancer un projet
Quand vous récupérez un projet, généralement vous devrez lancer les commandes suivantes:

* **npm install** Installe toutes les dépendances du fichier package.json

Les commandes suivantes sont définies dans le package.json, le nom peut varier:

* **npm dev** Pour lancer le projet en version développement
* **npm build** Pour lancer la construction du site.

## Quelques paquets sympas

* yarn est un gestionnaire de paquet un peu plus efficace qu'npm
* gulp est un outil pour assembler une page 
* yo (yeoman) est un outil pour préparer le dossier pour un nouveau projet

`npm install -g yarn yo`
`npm i -D gulp gulp-util gulp-plumber gulp-WHATEVER`

_Note : npm i -D == npm install --save-dev_

Voilà. Si vous avez des questions, écrivez-nous ! [@LesBricodeurs](https://twitter.com/lesbricodeurs)
