---
title: Les technos derrière Pokemon Go
date: 2016-07-27 10:42:40 Z
categories:
- articles
tags:
- game
- gps
layout: post
modified: 
excerpt: Pendant que vous cherchez les Pokemon, Pokemon Go vous trouve
image:
  feature: 
author: martin
comments: true
share: true
thumbnail: images/taupe.jpg
---

Derrière Pokemon Go, un cocktail de technologies développées sur plusieurs décennies. Le succès de l'application devrait susciter le développement d'innovations reposant sur la géolocalisation et la réalité augmentée. Petits rappels...

# La géolocalisation

La première technologie utilisée dans Pokemon Go est la géo-localisation. Tous les utilisateurs de smartphone l’ont déjà utilisée pour trouver une adresse, mais savent-ils tous comment ça marche? En réalité, la géolocalisation utilise trois technologies différentes :

![GPS](/images/triangulation.jpg){: .pull-right}

- Le GPS (Global Positionning System) 
- Le positionnement par le réseau cellulaire
- Le Wi-Fi

Ces technologies reposent sur des procédés similaires, repérer votre smartphone par rapport à des points connus puis calculer son emplacement exact. Les calculs utilisent les propriété des triangles et de trigonométrie pour retrouver la position à partir des angles (triangulation) ou des distances (trilatération). Et oui, le jeu d'origine japonaise sur votre smartphone du troisième millénaire applique des formules de classe de 3ème. 

L'entreprise derrière Pokemon Go, Niantic, a déjà quelques années d'expérience sur le sujet. Fondée par des ingénieurs de Google maps, voilà 8 ans qu'avec le jeu Ingress elle a pu affiner leur utilisation pour compenser les lacunes et repérer les tricheurs.

### Le GPS

Le GPS est un système développé par l’armée américaine permettant de calculer la position avec une grande précision (quelques mètres).
L'idée est simple : 

* Des satellites envoient en permanence l'heure exacte grace à leurs horloges atomiques et leur identité par messages radios
* Une puce de votre smartphone récupère ces messages 
* En les comparant, votre smartphone calcule la distance de chacun et en déduit votre position 
![GPS]({{ site.url }}/images/gps.gif){: .center-image }

### Le positionnement par le réseau cellulaire

Votre smartphone est régulièrement connecté à plusieurs antennes-relais pour éviter les déconnexions quand vous quittez la zone de couverture de l'une. Il compare le temps que mettent à lui répondre chacune de ces antennes. En sachant la position de ces antennes, il suffit de tracer un cercle autour de chacune avec la distance de votre smartphone. Vous êtes alors à la rencontre de trois cercles.

Vous avez sans doute remarqué quand vous démarrez Google Maps que le cercle de votre position est très large au début. Il vous a connecté sur une antenne dont il connaît la position. Puis une fois le calcul effectué, GPS ou réseau cellulaire, vous êtes géolocalisé avec précision.

### Le WIFI

Point de sorcellerie, une fois votre téléphone connecté ou à portée d'un signal Wi-Fi, l'identifiant de ce Wi-Fi est repéré dans une base de donnée qui liste leurs positions. Encore une fois, en en recoupant plusieurs, on peut atteindre une bonne précision. 

Lorsque vous êtes en intérieur cela peut être le seul repère, à cause du fait que vous ne captiez pas les signaux GPS et parfois mal les signaux cellulaires. Essayez: désactivez et réactivez le wifi, il est probable que vous voyiez votre personnage se déplacer.

# La boussole et le gyroscope

Chaque smartphone est équipé d'une boussole, d'un gyroscope et d'un accéléromètre. Le gyroscope, couplé avec l'accéléromètre, est utilisé pour déterminer la position dans laquelle vous tenez votre smartphone (paysage ou portrait), et d'adapter le contenu en conséquence. En réalité c'est bien plus sophistiqué que ça comme le montre l'application *Boussole* de l'iPhone par exemple. Il existe d'ailleurs des applications permettant de remplacer le niveau à bulle par son smartphone pour vous dire à quel point c'est précis!

# La réalité augmentée

La réalité augmentée combine ces deux dernières technologies avec la caméra du smartphone. En effet, l'application peut voir si un Pokemon est dans le champ de vue de la caméra car d'une part elle sait où le smartphone se trouve, mais aussi dans quelle direction elle regarde (boussole) et avec quelle inclinaison (gyroscope). Le Pokemon est affiché en 3D en tenant compte de ces informations, ce qui permettra de l'afficher en face de vous ou dans votre pot à fleurs.

![La taupinette](/images/taupe.jpg)
