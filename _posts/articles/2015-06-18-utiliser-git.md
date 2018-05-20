---
title: Utiliser Git
date: 2015-06-18 21:42:40 Z
categories:
- articles
tags:
- OpenSource
- git
layout: post
modified: 
excerpt: gouvernement du code par Linus pour Linux
image:
  feature: 
author: xavier
comments: true
share: true
---

Apprendre à utiliser *git*, c'est un peu comme apprendre à faire ses lacets. On peut faire sans, mais la vie devient plus simple et moins dangereuse avec.

Dans un répertoire donné *git* vous permet d'enregistrer les modifications de votre travail. Chaque enregistrement est appelé *commit*. L’intérêt est multiple : avoir un historique des modifications et pouvoir revenir en arrière, pouvoir partager ces modifications à plusieurs, gérer les conflits de versions, gagner le respect d'autres développeurs ...

Voici une brève introduction.

## Configuration

Sur ubuntu, vous pouvez installer *git* en tapant simplement `sudo apt-get install git`. Voilà.

    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    git config --global push.default simple

## Quelques commandes

### Initier git

Deux options s'offrent à vous:

	git init

Un dossier .git est créé dans votre repertoire pour garder l'historique des modifications.

	git clone https://github.com/LesGeeksDuDimanche/lesbricodeurs.fr.git

Un nouveau repertoire est créé, clonant à l'identique le dépot en ligne.

### Sauvegarder vos modifications

	git add .

vous permet d'ajouter l'ensemble du contenu du répertoire au prochain *commit*.

	git commit -m "modification du titre de la page d'accueil"

Permet de créer un enregistrement de l'état de votre travail avec un intitulé.

  git commit --amend --no-edit

Permet de réenregistrer le précedent commit en ajoutant des modifications. Eviter si vous avez déjà publié.

	git push

Vous permet d'envoyer sur le dépôt distant les modifications. Si vous avez utilisé `git clone`, celui ci est déjà configuré.

Pour compléter voici d'excellents [tutoriels](https://www.atlassian.com/git/tutorials/) sur git.


## Petit hack

En une ligne, vous pouvez ajouter, effectuer un commit puis un push de votre code. Pour le rendre accessible avec une commande `gitaj`, il suffit de taper la ligne suivant dans un terminal, puis de le recharger.

    echo "alias gitaj='git add . && git commit -m "blabla" && git push'" >> ~/.bashrc

Pour une version plus élaborée qui permet de placer son propre commentaire, ajoutez à ~/.bashrc ( `gedit ~/.bashrc` )
{% highlight bash %}
gitaj () {
   if [ -z "$1" ];  then
        # Commentaire par défaut blabla
        COMM="blabla"
       else
        # Commentaire fourni
        COMM=$1
    fi
    echo "> git add"
    git add .

    echo "> git commit"
    git commit -m $COMM

    echo "> git push"
    git push

   return 0

}

export -f gitaj
{% endhighlight %}
