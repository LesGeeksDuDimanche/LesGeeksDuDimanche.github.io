---
title: Raccourcis Sous Ubuntu
date: 2015-06-17 16:06:01 Z
categories:
- articles
tags:
- Ubuntu
- OpenSource
- Configuration
layout: post
modified: 
excerpt: Ca peut toujours servir
image:
  feature: 
comments: true
share: true
---

# RACCOURCIS ET COMMANDES

_Rq : les commandes utilisées par linux sont les mêmes que celles d'Unix. Celles utilisée par Mac aussi sont les mêmes que celles d'Unix. Et ces commandes n'ont pas changées depuis les années 60. Elles continueront à exister et à rester les mêmes pour de nombreuses années encore._

**Raccourcis Linux**

Ctrl+H : fait apparaitre les fichiers et dossiers cachés

**Commandes de la console**

*   Ctrl+Alt+F1 : Accès à la vraie console (Ctrl+Alt+F7 pour en sortir)
*   Ctrl+Alt+T : Accès à la console gnome-terminal
*   Maj+Ctrl+C / Maj+Ctrl+V : Copier / Coller dans la console
*   Ctrl+C : arrête la commande en cours dans la console
*   Ctrl+U : supprime tout ce qui est à gauche du curseur et Ctrl+Y colle ce qui vient d'être supprimé
*   setxkbmap fr : passer en mode azerty
*   history : voir la liste des dernières commandes exécutées
*   whereis application ou commande : indique les chemins d'accès des fichiers d'installation d'une application (logiciel) ou d'une commande
*   which application ou commande : indique dans le chemin d'accès de l'executable de la commande ou de l'application
*   man commande : détail à quoi sert la commande écrit
*   cd
*   ls (-a)
*   pwd : affiche le chemin absolu où on est actuellement
*   du (-a -h -s) : indique la taille du répertoire courant
*   mkdir nom_repertoire : créé un répertoire
*   mv : permet de changer le nom d'un fichier ou à le déplacer dans un autre dossier.
*   cp : fait une copie du fichier
*   rm (-v -r): permet de supprimer le fichier (attention pas de corbeille dans la console donc les fichiers sont définitivement supprimés)
*   sudo shutdown -h now (en mode console réelle) : éteint l'ordi. -r pour un redémarrage
*   clear : efface le contenu de la console
*   exit
*   commandes pour lecture fichier : [](http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/manipuler-les-fichiers)[http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/manipuler-les-fichiers](http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/manipuler-les-fichiers)
*   commandes pour copier/coller ou déplacer des fichiers et dossiers : [](http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/manipuler-les-fichiers)[http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/manipuler-les-fichiers](http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/manipuler-les-fichiers). Le joker * est intéressant : peut permettre de copier tous les fichiers commançant par 2015* par exemple.
*   sudo su : permet d'être root en permanence (commande exit pour sortir de ce mode)
*   ajouter un utilisateur

    *   sudo adduser tintin
    *   passwd tintin permet de changer le mot de passe de tintin
    *   deluser tintin pour supprimer le compte tintin. Pour également supprimer son /home faire la commande deluser --remove-home tintin

*   créer un groupe d'utilisateurs :

    *   ls -l dans /home par exemple pour voir à qui appartiennent les dossiers : indiquera le nom des utilisateurs et le nom des groupes auxquels ils appartiennent.
    *   sudo addgroup amis
    *   usermod -g ami tintin
    *   sudo delgroup amis pour supprimer un groupe

*   Modifier les droits d'accès : [](http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/les-utilisateurs-et-les-droits)[http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/les-utilisateurs-et-les-droits](http://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux/les-utilisateurs-et-les-droits)
*   Editeurs célèbres de texte pour console linux : Nano, Vim et Emacs

	*   Editeur de texte (texte brut) /= Traitement de texte (texte avec mise en forme)
    *   Nano est le plus simple à utiliser
    *   nano fichier.txt (si le fichier n'existe pas alors il est créé)
    *   Ctrl+C permet d'annuler
    *   Voir si j'ai un fichier .nanorc dans /home/yann. Si non alors le créer (en fichier caché çàd en ajoutant un point devant nanorc) et ajouter les commandes suivantes (une par ligne)

    *   set mouse (la souris est utilisable sur la console)
    *   set autoindent
    *   Le fichier nanorc global (non caché) est situé dans /etc/nanorc. Il est valable pour tous les utilisateurs.

_PS : un truc cool avec la console est que l'on peut se connecter à distance sur un autre ordi s'il est connecté à internet. Cette fonctionnalité est très utilisée pour administrer un serveur web sur lequel linux est installé (càd la majorité des serveurs)._

**Alias**

*   ~ = /home/user
