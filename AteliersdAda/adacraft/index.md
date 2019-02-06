---
title: AdaCraft
layout: page
class: ateliersada
excerpt: Découvrir la robotique et la programmation par le jeu
modified: 2018-10-16 17:30:00
image:
  feature: Bandeau4.jpg
  credit: 
  creditlink: 
---

Cette page est dédiée à notre serveur Minecraft : **Adacraft**. Nous allons vous détailler comment vous y connecter et comment utiliser notre interface de programmation visuelle !

## Minecraft

Minecraft est un jeu de construction qui offre la possibilité aux joueur de se retrouver *en ligne* sur un même *serveur* afin de jouer ensemble. Chez **Les Bricodeurs** nous avons notre propre serveur qui nous sert de support pédagogique pour apprendre la programmation visuelle ! Afin d'utiliser notre serveur en dehors de nos ateliers, il vous faudra acheter une copie du jeu dans sa version "Java" (Mac & PC), puis suivre les instructions suivantes.

## Connexion au serveur minecraft

Une fois le jeu Minecraft démarré il faut aller dans le menu `multijoueur` et ajouter un nouveau serveur en spécifiant les informations suivantes :

- Nom du serveur : `Adacraft`
- Adresse du serveur : `adacraft.mcillimity.com`

Le serveur devrait ensuite apparaître dans la liste des serveurs, et vous pourrez vous y connecter.

## L'éditeur de code visuel

Pour éditer du code et l'exécuter sur le serveur il vous d'abord créer une session d'édition. Pour cela il faut taper la commande suivante dans le *chat* du jeu (activable avec la touche `T` généralement) :

`/js adalink()`

La commande vous renverra un lien, il faut ensuite cliquer dessus ce qui vous renverra sur votre navigateur internet (il faut utiliser Google Chrome de préférence). Vous devriez alors être connecté sur notre interface en ligne, avec votre nom de joueur ainsi que les codes que vous avez déjà écrits.

Pour écrire un nouveau code, il faut entre un nom de programme dans le champ de texte disponible sous votre nom de joueur puis appuyer sur la touche `Entrée`. Vous accédez à l'éditeur que vous pouvez passer en mode block en appuyant sur le bouton `Activer/Désactiver Blockly`. Une fois cette opération effectuée vous pourrez ajouter des blocs pour programmer.

Le premier bloc à ajouter est le bloc `Programme` disponible dans la catégories de blocs « Drone ». Ajoutez ce bloc et entre un nom dans la case blanche du bloc, par exemple « programme1 ». Ajoutez d'autres blocs à l'intérieur de ce bloc afin de programmer une construction, puis sauvegardez avec le bouton `Sauvegarder`.

## Lancer son code dans le jeu

Une fois le code écrit et sauvegardé, il faudra retourner sur Minecraft pour l'exécuter. Ciblez une case puis ouvrez le *chat* (touche `T` généralement) et tapez la commande suivante 

`/js programme1.nom_joueur(self)`.

Il faudra remplacer « nom_joueur » par le nom de votre compte Minecraft (visible dans l'éditeur de code). Le code d'exécutera !

## La carte !

Une carte globale du serveur est mise à jour régulièrement, elle est disponible ici :

<a class="btn" href="http://map.lesbricodeurs.fr:8123/?worldname=construction&mapname=surface&zoom=2&x=1491&y=64&z=948">La Carte</a>
