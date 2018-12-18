---
title: Visualisation du projet de loi de finance
date: 2018-12-18 08:34:00 Z
categories:
- articles
tags:
- dataviz
- budget
- civictech
image:aj ajus
  feature: 
excerpt: Les chiffres et les couleurs
layout: post
author: xavier
share: true
thumbnail: images/actionexterieure.png
image:
  feature: bandeau.png
  credit: visualisation du budget de l'education sur http://budget.parlement-ouvert.fr/
---
Puisque le débat public se fascine des images et que les décisions sont dans les chiffres, donnons leur une visualisation. 

Lidée est simple : permettre aux citoyennes, aux citoyens et aux parlementaires de comprendre ce fatras de lignes comptables que constitue le budget de l'État. D'ores et déjà, au moment du vote du projet de loi de finance pour 2019 voici les premiers résultats : 
![Action exterieur]({{ site.url }}/images/actionexterieure.png){: .pull-right }
- Une [visualisation complete](http://budget.parlement-ouvert.fr/) du budget par année, avec les autorisations d'engagement (pour signer des contrats sur plusieurs années) et les crédits de paiement (crédits à dépenser dans l'année)
- Une [visualisation minimaliste]( https://rainbowviz.github.io/simpleRainbowViz/) qui permet de visualiser le projet pour 2019 et les pourcentages de variation avec le budget 2018

### Le point de départ 

Le projet de visualisation du projet de loi de finance, porté par [Alexis Thual](https://twitter.com/AlexisThual), a débuté il y a plusieurs mois notamment grace au soutien du [Bureau Ouvert](https://parlement-ouvert.fr/) de Paula Forteza et une participation au hackathon [Datafin](https://twitter.com/search?q=%23datafin). 

Il y a quelques semaines, à l'occasion de la 5em promotion de DataForGood, programme d'accompagnement de projets numériques orienté data et à intérêt social, le projet recrutait une nouvelle équipe de bénévoles. 
<blockquote class="twitter-tweet" data-lang="en"><p lang="fr" dir="ltr">Lancement de la 5em saison de <a href="https://twitter.com/hashtag/dataforgood?src=hash&amp;ref_src=twsrc%5Etfw">#dataforgood</a> ! Pour accélérer des projets numériques sur trois mois, avec un espace disponible les mercredis et du mentorat <a href="https://t.co/faHYxs6Egb">pic.twitter.com/faHYxs6Egb</a></p>&mdash; Les Bricodeurs (@LesBricodeurs) <a href="https://twitter.com/LesBricodeurs/status/1053612635386716160?ref_src=twsrc%5Etfw">October 20, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

On entre ensuite dans les questions plus techniques, vous pouvez sauter aux [conclusions](#conclusion)

### Les données et leur traitement

La première étape, et la plus longue, a été d'abord d'aller chercher les bonnes données : Entre celles qui servent à la rédaction des projets de loi de finances, celles issues de l'exécution des dépenses dans les logiciels comptables, celles utilisées lors des controles et analyses de la Cour des Comptes... 

Ensuite, un travail sur la réconciliation des lignes d'une année à l'autre. Les intitulés des actions budgétaires peuvent changer, pour des questions d'organisation, d'affichage ou parfois simplement de tpyos. Un [joli travail ](https://github.com/rainbowViz/nomenclaturePlf) d'Alexis que je vous invite à consulter si vous avez quelques affinités avec python, numpy ou Keras.

### La visualisation et frontend

Le choix de la principale librairie de visualisation s'est naturellement porté sur D3.js. La librairie offre divers outils comme les échelles de couleurs et une grande souplesse dans l'affichage. Selon un procédé approximatif, on a testé différentes visualisations : Bubble, Sankey, Suburst..., notamment au moyen de [rawgraphs.io](http://app.rawgraphs.io/).

Pour le frontend, React a été retenu accompagné de Redux. Il s'agit du [framework le plus populaire en 2018](https://2018.stateofjs.com/front-end-frameworks/overview/), pour autant il faut reconnaitre que la fragmentation des dévelopeurs entre différents frameworks ne facilite pas les contributions pour ces petites projets. Ma petite contribution est restée en [vanilla js](http://vanilla-js.com/), par incompétence ou choix idéologique, je n'ai pas encore tranché.

![Frameworks]({{ site.url }}/images/frameworks.jpg){: .center-image }

Quand au style, c'est à la main et clairement une forme appel à l'aide. Petit usage de spectre.css. C'est léger et rigolo, jusqu'à ce qu'il faille ajouter des lignes pour l'adapter sur tel écran ou avoir des *modals*.

### <a name="conclusion"></a>Les limites et conclusion
**Cohérence des données** L'open data c'est sympa, mais si les données ne sont pas dans des formats standardisés, tant dans le format technique que dans leur organisation, il est difficile et douloureux de travailler avec. C'est le cas des budgets d'année en année, mais aussi entre les documents issus de diverses administrations. Il me semble que ce travail de préparation devrait être organisé.

**Granularité des données** Le plus petit niveau de granularité qui nous a été disponible sous forme exploitable est la sous-action, c'est-à-dire des budgets de quelques centaines de millions à quelques milliards. Je ne sais pas vous, mais je n'ai aucune idée de ce que l'on fait d'un milliard. En dehors de la défense peut etre, je ne vois pas beaucoup de raison de masquer les détails. Les données de l'éxécution ne sont guère plus précises, alors qu'elles sont de toute façon nécessaires au controle comptable. Donner du grain à moudre factuel me semble le meilleur moyen de contrer les "fake news". 

**Soutenir la communauté** Au cours des réunions de ce projet au Liberté Living Lab et au Bureau Ouvert, nous avons rencontré un nombre important de passionnés aux compétences techniques ou entrepreneuriale pour mener à bien des projets sur ces questions. Seulement les seules modalités de fonctionnement disponibles semblent être le bénévolat ou le marché public. Le premier a ses limites temporelles, le second est inadapté pour ces projets d'initiative citoyenne. C'est l'occasion de renouveler les formes d'action et de partenariats.

Le projet est open source et ouvert. Alors n'hésitez pas à nous contacter ou proposer une amélioration du code.  

![Budget Iris]({{ site.url }}/images/budgetiris.png){: .center-image }

