---
layout: post
title: Les technos derrière Pokemon Go
modified:
categories: articles
excerpt: Pendant que vous cherchez les Pokemon, Pokemon Go vous trouve
tags: [game, gps]
image:
  feature:
date: 2015-07-18T23:42:40+02:00
author: martin
comments: true
share: false
published: true
thumbnail: images/taupe.jpg
---

Derrière Pokemon Go, un cocktail de technologies développés sur plusieurs décennies. Le succès de l'application devrait susciter le développement d'innovations reposant sur la géolocalisation et la réalité augmentée. Petits rappels...

# La géolocalisation

La première technologie utilisé dans Pokemon Go est la géolocalisation. Tous les utilisateurs de smartphone l’ont déjà utilisé pour trouver une adresse, mais savent-ils tous comment ça marche? En réalité, la géolocalisation utilise trois technologies différentes:

![GPS]({{ site.url }}/images/triangulation.jpg){: .pull-right}

- Le GPS (Global Positionning System) 
- Le positionnement par le réseau cellulaire
- Le WIF
I

Ces technologies reposent des procédés similaires, repérer votre smartphone par rapport des points connus, puis calculer par triangulation son emplacement exact. Et oui, le jeu d'origine japonaise sur votre smartphone du troisième millénaire applique des formules de classe de 3em. 

L'entreprise derrière Pokemon Go, Niantic, a déjà quelques années d'expérience sur le sujet. Fondée par des ingénieurs de Google maps, voilà 8 ans qu'avec le jeu Ingress elle a pu affiner leur utilisation pour compenser les lacunes et repérer les tricheurs.

### Le GPS

Le GPS est un système développé par l’armée américaine permettant de calculer la position avec une grande précision (quelques mètre).
L'idée est simple : 

* Des satellites envoient en permanence l'heure exacte grace à leurs horloges atomiques et leur identité par messages radios
* Une puce de votre smartphone récupère ces messages 
* En les comparant, votre smartphone calcule la distance de chacun et en déduit votre position 
![GPS]({{ site.url }}/images/gps.gif){: .center-image }

### Le positionnement par le réseau cellulaire

Votre smartphone est régulièrement connecté à plusieurs antennes relais pour éviter les déconnections quand vous quittez la zone de couverture de l'une. Il compare le temps que mettent à lui répondre chacune de ces antennes. En sachant la position de ces antennes, il suffit de tracer un cercle autour de chacune avec la distance de votre smartphone. Vous êtes alors à la rencontre de trois cercles.

Vous avez sans doute remarqué quand vous démarrez google maps que le cercle de votre position est très large au début. Il vous a connecté sur une antenne dont il connaît la position. Puis une fois le calcul effectué, GPS ou réseau cellulaire, vous êtes géolocalisés avec précision.

### Le WIFI

Point de sorcellerie, une fois votre téléphone connecté ou à portée d'un signal wifi, l'identifiant de ce wifi est repéré dans une base de donnée qui liste leurs positions. Encore une fois, en en recoupant plusieurs, on peut atteindre une bonne précision. 

Lorsque vous êtes en intérieur, cela peut être plus précis, puis que vous ne captez pas les signaux GPS et parfois mal les signaux cellulaires. Essayez: désactivez et réactivez le wifi, il est probable que vous voyez votre personnage se déplacer.

# La réalité augmentée

La réalité augmenté combine les deux technologies avec la caméra du smartphone. En effet, l'application peut voir si un pokemon est dans le champ de vue de la caméra car d'une part elle sait où le smartphone se trouve, mais aussi dans quelle direction elle regarde (boussole) et avec quelle inclinaison (gyroscope). Le Pokemon est affiché en 3D en tenant compte de ces informations, ce qui permettra de l'afficher en face de vous ou dans votre pot à fleurs.

![La taupinette]({{ site.url }}/images/taupe.jpg)
