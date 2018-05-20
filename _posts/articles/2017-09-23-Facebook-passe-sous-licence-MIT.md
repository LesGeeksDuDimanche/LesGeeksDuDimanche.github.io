---
title: React passe sous licence MIT
date: 2017-09-23 10:00:40 Z
categories:
- articles
tags:
- OpenSource
- Licence
- ReactGate
layout: post
excerpt: Open Source a gagné, mais quel Open Source ?
image:
  feature: react.jpeg
author: xavier
comments: true
share: true
thumbnail: images/taupe.jpg
---

Facebook vient de passer les librairies React, Jest, Flow, et Immutable.js sous la licence MIT, une [licence ouverte](https://lesbricodeurs.fr/articles/LicencesOuvertes/) ( *Open Source* pour nos amis anglophones ) reconnue. Au cours de ces derniers mois en effet, un scandale a agité la communauté des développeurs Web. Il est apparu que les licences de la librairie javascript React donnaient la possibilité à Facebook d'interdire éventuellement l'utilisation par un projet. 

# React

React est une librairie javascript particulièrement utilisée aujourd'hui pour la construction d'interfaces web. Publiée par Facebook en mars 2013, elle a changé l'approche du développement *Frontend* en proposant une librairie avec un nombre limité de concepts, centrée autour de l'idée de construire des *components*, des bouts d'interface indépendants mis à jour rapidement. L'exemple canonique est AirBnb, qui l'utilise pour construire les différents éléments de son interface.

# La viralité des licences ouvertes

Le débat de la viralité des licences ouvertes est ancien. Comment une licence qui impose que le code soit ouvert et que les modifications de ce code soient ouvertes contamine des projets plus importants qui incluent cet élément de code. Deux grand courants se sont distingués, d'une part le logiciel *libre*, plus protecteur de l'ouverture du code comme les licences GPL ou Apache et l'*open source* plus soucieux d'équilibrer les enjeux industriels. C'est dans ce deuxième courant que les licences MIT et BSD se situent.

# Historique de la controverse

Le projet React a été publié initialement sous licence Apache 2.0, une licence *libre*. En 2014, la version 0.12 a été publiée sous licence BSD avec une clause additionnelle autorisant Facebook à retirer la licence d'utilisation à toute entreprise qui ferait un procès en propriété intellectuelle à Facebook ou une de ses filiales. La question des brevets en effet est sensible entre les entreprises technologiques américaines. Le droit américain les incite à déposer, acquérir et protéger des brevets logiciels pour se défendre entre elles et des *patents trolls*, entreprises qui achètent des brevets uniquement pour retirer de l'argent en faisant des procès aux entreprises les enfreignant. 

Les dangers de cette clause additionnelle pour les projets *open source* utilisant la librairie React a agité la communauté des développeurs *Frontend*. De plus la Fondation Apache a relevé que la modification de la licence a posteriori pour une licence incompatible pouvait être illégale. Enfin Wordpress a, en août 2017, retiré l'utilisation de React de plusieurs [projets majeurs](https://ma.tt/2017/09/on-react-and-wordpress/).

C'est ce qui a amené finalement Facebook a utiliser une [licence MIT](https://code.facebook.com/posts/300798627056246/relicensing-react-jest-flow-and-immutable-js/) simple pour les librairies React, Jest, Flow et Immutable.js.

*Pour approfondir la [conversation](https://www.facebook.com/lesbricodeurs/photos/a.130937770579118.1073741828.130913190581576/521840714822153/)* 

_Merci à [Samy Rabih](https://twitter.com/samyrabih) pour le partage de l'information et la relecture_
