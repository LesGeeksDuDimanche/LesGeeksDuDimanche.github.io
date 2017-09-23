---
layout: post
title: Facebook passe sous licence MIT
categories: articles
excerpt: Open source à gagné 
tags: [OpenSource, Licence, ReactGate]
image:
  feature: react.jpeg
date: 2017-09-23T12:00:40+02:00
author: xavier
comments: true
share: true
published: true
thumbnail: images/taupe.jpg
---

Facebook vient de passer les librairie React, Jest, Flow, et Immutable.js sous la licence MIT, une [licence ouverte](https://lesbricodeurs.fr/articles/LicencesOuvertes/) ( *Open Source* pour nos amis anglophones ) reconnue. Au cours de ces derniers mois en effet, un scandale à agité la communauté des développeurs web. Il est apparu que les licenses de la librairie javascript React . 

# React

React est une librairie javascript particulièrement utilisée aujourd'hui pour la construction d'interfaces web ( développement *Frontend*). Publiée par Facebook en mars 2013, elle a changé l'approche en proposant une librairie avec un nombre limité de concept, centré autour de l'idée de construire des *components*, des bouts d'interface indépendants mis à jour rapidement. L'exemple canonique est Airbnb, qui l'utilise pour construire les différents éléments de son interface.

# La viralité des licenses ouvertes

Le débat de la viralité des licences ouvertes est ancien. Comment une licence qui impose que le code soit ouvert et que les modifications de ce codent soient ouvertes contamine des projets plus importants qui inclu cet élément de code. Deux grand courants se sont distingués, d'une part le logiciel *libre*, plus protecteur de l'ouverture du code comme les licences GPL ou Apache et l'*open source* plus soucieux d'équilibrer les enjeux industriels. C'est dans ce deuxième courant que les licences MIT et BSD se situent.

# Historique de la controverse

Le projet React est a été publié initialement sous licence Apache 2.0, une licence *libre*. En 2014, la version 0.12 a été publiée sous licence BSD avec une clause additionnelle autorisant Facebook a retirer la licence d'utilisation à toute entreprise qui ferait un procès en propriété intellectuelle à Facebook ou une de ses filiales. La question des brevets en effet est sensible entre les entreprises technologiques américaines. Le droit américain les incitent à déposer, acquérir et protéger des brevets logiciels pour se défendre entre elles et des *patents trolls*, entreprises qui achètent des brevets uniquement pour retirer de l'argent en faisant des procès aux entreprises les enfreignant. 

Les dangers de cette clause additionnelle pour les projets *open source* utilisant la librairie React a agité la communauté des développeurs *Frontend*. De plus la Fondation Apache a relevé que la modification de la licence à posteriori pour une licence incompatible pouvait être illégale. Enfin Wordpress a en août 2017 retiré l'utilisation de React de plusieurs [projets majeurs](https://ma.tt/2017/09/on-react-and-wordpress/).

C'est ce qui a amené finalement Facebook a utiliser une [licence MIT](https://code.facebook.com/posts/300798627056246/relicensing-react-jest-flow-and-immutable-js/) simple pour ses projets majeurs.

*Pour approfondir la [conversation](https://www.facebook.com/lesbricodeurs/photos/a.130937770579118.1073741828.130913190581576/521840714822153/)* 
