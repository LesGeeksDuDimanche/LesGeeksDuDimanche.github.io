---
layout: post
title: Les technos derrière Pokemon Go
modified:
categories: articles
excerpt: TODO
tags: [game, gps]
image:
  feature:
date: 2015-06-18T23:42:40+02:00
author: martin
comments: true
share: false
---

Géolocalisation
	Comment ça fonctionne
GPS
	Triangulation messages satellites
wifi/reseau : infos dans
Comment utliliser
API/SDK
	
Réalité augmenté
	Libraires …

# La géolocalisation

La première technologie utilisé dans Pokemon Go est la géolocalisation. Tous les utilisateurs de smartphone l’ont déjà utilisé pour trouver une adresse, mais savent-ils tous comment ça marche? En réalité, la géolocalisation utilise trois technologies différentes:

- Le GPS (Global Positionning System) est un système développé par l’armée américaine permettant de calculer avec une grande précision (quelques mètre)
- La triangulation du réseau cellulaire
- Le WIFI

# Le gyroscope du smartphone

Bousole + assiete

# La réalité augmenté

La réalité augmenté combine les deux technologies précédentes avec la caméra du smartphone. En effet, l'application peut voir si un pokemon est dans le champ de vue de la caméra car d'une part elle sait où le smartphone se trouve, mais aussi dans quelle direction elle regarde (boussole) et avec quelle inclinaison (gyroscope). Le Pokemon est affiché en 3D en tenant compte de ces informations, ce qui permettra de l'afficher de face si on se trouve en face de lui, ou de dos si on est derrière lui.

