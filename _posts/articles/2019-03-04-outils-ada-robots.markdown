---
title: "Les outils d'Ada : les robots (4/4)"
date: 2019-03-04T13:57:10+00:00
excerpt: "Une présentation des outils utilisés pendant les ateliers d'Ada !"
author: blac
categories:
- articles
tags:
- Ada
- Ateliers
- Programmation
- Robot
- Création
layout: post
share: true
image:
  feature: outils_ada/banniere.png/
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

Dans cette série d'articles nous vous présentons les outils pédagogiques que **Les Bricodeurs** utilisent pendant les ateliers d'Ada. Cet article, le dernier de la série, est dédié aux robots que nous utilisons et des outils dont nous nous servons pour les programmer.

<img class="c_img" src="{{ site.url }}/images/outils_ada/outils.png">

Une des applications concrète et ludique de la programmation est son utilisation en **robotique**. Bon nombre de robots à usage pédagogique possèdent une interface de programmation visuelle afin d’en faciliter la programmation. L’apprentissage de la robotique permet de se familiariser avec les notions de **capteur** et d’**actionneur** : un robot possède ainsi des « entrées » (par exemple un capteur de proximité ou un capteur de couleurs) et des « sorties » (par exemple des roues, une pince ou un haut-parleur). Programmer les robots revient alors à écrire un algorithme permettant de dire au robot comment utiliser ses actionneurs selon ce qu’il « voit » avec ses capteurs !

Chez Les Bricodeurs nous utilisons principalement deux types de robots : les **Thymios** et les **Ozobots**. Les Ozobots sont de petits robots qui ont l’avantage de **suivre des lignes** tracées avec un marqueur sur une feuille de papier. Leur comportement peut ensuite être modifié en ajoutant des codes de couleurs le long de leur trajet. Ils possèdent également une interface de programmation Blockly, qui permet d’utiliser leurs capteurs de proximité et les moteurs de leur roues afin de leur faire éviter des obstacles !

Les robots Thymios sont des robots plus gros que les Ozobots, ils possèdent de nombreux capteurs de proximité ainsi que des **capteurs d’orientation** qui permettent à leur programmeur de leur faire suivre des parcours très précis et diversifiés. Ils sont fournis avec plusieurs comportements déjà implémentés, ce qui rend très facile la découverte des robots et de leurs possibilités. Ils peuvent, comme les Ozobots, être programmés avec une interface Blockly !

