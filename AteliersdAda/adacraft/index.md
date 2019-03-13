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

<style type="text/css">

p{
  text-align: justify;
}

.c_img{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.r_img{
  float: right;
  margin-left: 1em;
}

.clearfix::after{
  content: "";
  clear: both;
  display: table;

iframe{
  width: 100%;
}

}

</style>

Cette page est dédiée à notre serveur Minecraft : **Adacraft**. Nous allons vous détailler comment vous y connecter et comment utiliser notre interface de programmation visuelle !

## Minecraft

Minecraft est un jeu de construction qui offre la possibilité aux joueur de se retrouver *en ligne* sur un même *serveur* afin de jouer ensemble. Chez **Les Bricodeurs** nous avons notre propre serveur qui nous sert de support pédagogique pour apprendre la programmation visuelle ! Afin d'utiliser notre serveur en dehors de nos ateliers, il vous faudra acheter une copie du jeu dans sa version "Java" (Mac & PC), puis suivre les instructions suivantes.

## Connexion au serveur minecraft

<div class="clearfix">
  
  <img class="r_img" src="{{ site.url }}/images/adacraft_tuto/server_connect.png">
  <p>Une fois le jeu Minecraft démarré il faut aller dans le menu <code>Multijoueur</code>, cliquer sur <code>Nouveau serveur</code> et ajouter le serveur Adacraft en spécifiant comme adresse du serveur <code>ada.lesbricodeurs.fr</code>. Le serveur devrait ensuite apparaître dans la liste des serveurs, cliquez dessus pour vous y connecter !</p>

</div>

## L'éditeur de code visuel

Pour éditer du code et l'exécuter sur le serveur il vous d'abord créer une session d'édition. Pour cela il faut taper la commande `/js adalink()` dans le *chat* du jeu (activable avec la touche `T` généralement) puis appuyer sur la touche `Entrée`.

<img class="c_img" src="{{site.url}}/images/adacraft_tuto/editor_connect.png">

La commande vous renverra un lien, il faut ensuite cliquer dessus ce qui ouvrira votre navigateur internet (utiliser Google Chrome de préférence). Vous devriez alors être connecté sur notre interface en ligne, avec votre nom de joueur ainsi que les codes que vous avez déjà écrits.

Pour écrire un nouveau code, il faut entre un nom de programme dans le champ de texte disponible sous votre nom de joueur puis appuyer sur la touche `Entrée`. Vous accédez à l'éditeur que vous pouvez passer en mode block en appuyant sur le bouton `Activer/Désactiver Blockly`. Une fois cette opération effectuée vous pourrez ajouter des blocs pour programmer.

<div class="clearfix">
  
  <img class="r_img" src="{{site.url}}/images/adacraft_tuto/program_create.png" style="border: 1px solid black;">
  <p>Pour écrire un nouveau code, il faut entre un nom de programme dans le champ de texte disponible sous votre nom de joueur puis appuyer sur la touche <code>Entrée</code>. Vous accédez à l'éditeur que vous pouvez passer en mode block en appuyant sur le bouton <code>Activer/Désactiver Blockly</code>. Une fois cette opération effectuée vous pourrez ajouter des blocs pour programmer.</p>

</div>

Le premier bloc à ajouter est le bloc `Programme` disponible dans la catégorie <span style="background-color: #b16358; color: white; padding: 2px; border-radius: 3px;">Drone</span>. Nommez votre programme en écrivant dans le champ du bloc prévu pour cela, par exemple inscrivez « maison » si votre programme servira à construire une maison. Tout votre programme se situera à l'intérieur de ce bloc, ajoutez maintenant des blocs à votre programme puis enregistrez avec le bouton <code>Sauvegarder</code>.

<img class="c_img" src="{{site.url}}/images/adacraft_tuto/program_edit.png" style="border: 1px solid black;">

## Lancer son code dans le jeu

Une fois le code écrit et sauvegardé, il faut retourner sur Minecraft pour l'exécuter. Ciblez une case puis ouvrez le *chat* (touche `T` généralement) et tapez la commande <code>/js nom_programme.nom_joueur(self)</code> en remplacant « nom_programme » et « nom_joueur » par vos valeurs. Appuyez sur la touche <code>Entrée</code> et regardez votre code s'exécuter !

<img class="c_img" src="{{site.url}}/images/adacraft_tuto/program_run.png">

## La carte !

Une carte globale du serveur est mise à jour régulièrement, elle est disponible ici :

<iframe src="http://188.165.206.136:8123/?worldname=construction&mapname=surface&zoom=3&x=1388&y=64&z=846" width="100%" height="400px"></iframe> 

<iframe src="http://map.lesbricodeurs.fr/?worldname=construction&mapname=surface&zoom=3&x=1388&y=64&z=846" width="100%" height="400px"></iframe>

<a class="btn" href="http://map.lesbricodeurs.fr/?worldname=construction&mapname=surface&zoom=2&x=1491&y=64&z=948">La Carte</a>
