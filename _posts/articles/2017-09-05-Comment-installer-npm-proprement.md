---
title: Comment installer npm proprement
date: 2022-06-03 11:57:12 Z
last_modified_at: 2022-06-03 13:16:49 Z
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

Npm est le gestionnaire de paquets de Node.js. Node.js est un serveur, basé sur le moteur V8 de chrome qui permet d'interpréter du code JavaScript coté serveur. Grace à `npm` vous pouvez installer des paquets et leurs dépendances. 

Aujourd'hui `node` et `npm` sont aussi utilisés par les développeurs webs comme suite d'outils de développement. En effet, beaucoup de dévelopeurs web développent des outils en javascript et les publient sur [npmjs](https://www.npmjs.com/).

# Installation

Pour installer node et npm, il suffit d'ouvrir un terminal et de taper une des commandes suivantes. Nous vous recommandons d'installer la dernière version supportée à long terme (LTS). La version 18 est déjà prête. 


### Pour les systèmes Linux 
- Pour Debian, Ubuntu et ses dérivés:
```sh
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```
- Pour les distributions de la famille Red Hat, en tant qu'utilisateur:
```sh
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
```
- Pour les autres distributions, consulter [cette page](https://nodejs.org/en/download/package-manager/)

### Sous macOS
- Si vous utilisez homebrew, un gestionaire de paquets:
```sh 
brew install node
```
- Vous pouvez l'installer graphiquement en téléchargent l'installateur sur le [site](https://nodejs.org/en/download/)

- Pour les plus aventureux, vous pouvez utiliser la ligne de commande suivante :
```sh
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

### Sous Windows
- Depuis Windows 10, vous pouvez utiliser le [sous-système Windows pour Linux (WSL)](https://docs.microsoft.com/fr-FR/windows/wsl/install-win10) qui vous permet d'utiliser l'ensemble des commandes Linux (Ubuntu par défaut).

- De même, vous pouvez utiliser une image virtuelle comme [cryptotux](https://cryptotux.org/) qui comprend l'ensemble des utilitaires utiles au développement dont node.js.

- Vous pouvez également télécharger le [fichier d'installation](https://nodejs.org/en/download/)

## Installer le global localement
Quand vous installez des paquets via npm, si vous ne précisez rien, ils seront installés dans le dossier actuel, généralement du projet en cours. Certains paquets, notamment les outils doivent s'installer globalement avec l'option **-g**. Pour éviter que ceux-ci s'installent dans un dossier système et exigent l'accès administrateur (_"root"_ en anglais), voici une astuce:

* Créer un dossier dédié 
```sh
mkdir -p ~/.npm-global
```
* Configurer npm pour utiliser ce dossier 
```sh
npm config set prefix '~/.npm-global'
```
* Ajouter la ligne suivante à votre fichier .profile, .zshrc ou .bashrc 
```sh
export PATH=~/.npm-global/bin:$PATH
```
* Mettre à jour les variables
```sh 
source ~/.profile
```

# Utilisation

### Installer un paquet
Globalement vous avez trois façon d'installer un paquet via npm : 

* `npm install -g XYZ` Vous permet d'installer une nouvelle commande. Meteor, yarn, yeoman par exemple.
* `npm install XYZ` Vous permet d'ajouter un paquet au projet en cours. Il est automatiquement ajouté au fichier package.json dans le dossier en cours
* `npm install --save-dev XYZ` Vous permet d'ajouter un paquet au projet en cours qui servira uniquement pendant le developpement du projet

### Lancer un projet
Quand vous récupérez un projet, généralement vous devrez lancer les commandes suivantes:

* `npm install` Installe toutes les dépendances indiquées dans le fichier package.json

Les commandes suivantes sont souvent définies dans package.json, le nom peut varier:
* `npm start` Généralement le script complet pour compiler et lancer le projet
* `npm run dev` Pour lancer le projet en version développement
* `npm run build` Pour lancer la construction du site.

## Quelques paquets sympas

**tldr** est un utilitaire pour avoir des informations sur les usages le plus courant d'un programme en ligne de commande. Vous pouvez essayer avec :
```sh
npm install -g tldr
tldr npm 
```
_Note : npm i -D == npm install --save-dev_

**yarn** et **pnpm** sont des gestionnaires de paquets node.js alternatifs, plus efficaces sur certains aspects.

**speed-test** est un outil en ligne de commande pour tester votre connexion internet.

**yo (yeoman)** est un outil pour préparer le dossier pour un nouveau projet.

## Raccourcis pratiques
- `npm i` == `npm install`
- `npm i -D`  == `npm install --save-dev`

## Gestionnaire de version
Si vous utilisez fréquemment node, un gestionnaire de version de node.js pprmet d'installer et alterner entre les versions. Vous trouverez plus d'informations sur `nvm` par [ici](https://github.com/creationix/nvm/blob/master/README.md). Merci de nous l'avoir signalé [sur twitter](https://twitter.com/le_mulot/status/905102883431088128)! 

Voilà. Si vous avez des questions, écrivez-nous ! [@LesBricodeurs](https://twitter.com/lesbricodeurs)


_Article initialement publié le 5 septembre 2017 et mis à jour en le 3 juin 2022_