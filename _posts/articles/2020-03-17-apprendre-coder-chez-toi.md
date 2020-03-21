---
title: 3 ressources pour apprendre à coder de chez toi
date: 2020-03-17 18:00:00 Z
categories:
- articles
tags:
- programmation
- e-learning
- coderenligne
layout: post
excerpt: Profite d'être à la maison pour apprendre à coder!
comments: true
share: true
---

Tu es coincé.e chez toi en raison d'une épidémie internationale? Tu as toujours rêvé d'apprendre à programmer mais tu ne sais pas par où commencer? Chez Les Bricodeurs, nous sommes convaincus des vertus de l'auto-apprentissage. Dans cet article, des bricodeur.euse.s te guident vers les ressources qui leur ont permis d'apprendre la programmation, de zéro ou à partir de bases universitaires. L'offre est suffisamment étoffée aujourd'hui pour que chacun y trouve son compte.

## Khan Academy

- Public cible: Débutants de tout âge
- Langage: Javascript, HTML, CSS, SQL
- Points forts: Traduit en français, correction automatique immédiate, grande communauté internationale

Lancée en 2005 par Salman "Sal" Khan pour partager les vidéos qu'il réalisait pour enseigner les mathématiques à ses cousins, _Khan Academy_ est aujourd'hui une plateforme d'apprentissage multi-disciplinaire et traduite en de nombreuses langues, dont le français. C'est sur cette plateforme que j'ai écrit mes premières lignes de code grâce à leur leçons extrêmement didactiques et leurs exercices très progressifs. Leurs contenus sont tout à fait adapté à des enfants, adolescents comme à des adultes absolument néophytes.

![L'éditeur de code en ligne de Khan Academy](https://i.imgur.com/bbWSEfX.png)

Comme le montre l'image ci-dessus, entre deux leçons en vidéos (elles aussi traduites en français), l'apprenant a accès à des **exercices interactifs** directement dans son navigateur web. Cela lui permet de visualiser en direct les effets des modifications qu'il apporte à son programme, et la validation de l'exercice est éffectuée automatiquement et en temps réel.

Le langage de programmation enseigné est le **_Javascript_**, le langage utilisé par tous les sites internet pour créer du contenu interactif, qui a permis la réalisation d'outils populaires tels que _Gmail_, _Facebook_, _Twitter_ et tant d'autres! Egalement, des cours plus théoriques expliquent les principes élémentaires des **algorithmes** et l'apprenant sera amené a réécrire les algorithmes de tri les plus courants en utilisant la langage _Javascript_ encore une fois.

Le portail de l'informatique sur Khan Academy: https://fr.khanacademy.org/computing

## Codingame

- Public cible: Développeur.euse.s ayant connaissance d'un langage
- Langages: Bash, C, C++, C#, Clojure, D, Dart, F#, Java, JavaScript, Go, Groovy, Haskell, Kotlin, Lua, Objective‑C, OCaml, Pascal, Perl, PHP, Python3, Ruby, Rust, Scala, Swift, TypeScript, VB .NET
- Points forts: Création française (cocoricoo!), compétitions internationales, transmission de ton profil aux recruteurs

Si tu aimes te mettre au défi et donner le meilleur de toi-même, alors tu vas adorer _Codingame_! Le site, créé en 2014 par des montpelliérains, propose une large sélection de **puzzles** de difficultés différentes, à résoudre dans leur éditeur de code en ligne. Ces puzzles se présentent sous forme de mini-jeux, faisant souvent référence à la "culture geek", où tu auras à tâche de chiffrer/déchiffrer des chaînes de caractères, d'aider un personnage à se déplacer dans un labyrinthe, d'optimiser des trajectoires dans une simulation de course, etc.

![Dans _Mars Lander_, tu dois aider une navette à se poser sur Mars en gérer la puissance des propulseurs.](https://i.imgur.com/doXmwMH.png)

Pas de leçons ici, **seulement des exercices**, pour lesquels tu as le choix d'utiliser le langage de programmation parmi une liste d'une trentaine: C++, C #, Javascript, Python... Mais tes performances comptent, puisque la partie apprentissage se double d'une plateforme de recrutement en ligne! Ainsi tu peux renseigner tes compétences, ta localisation et tes prétentions de salaire, et _Codingame_ transmettras ton profil aux entreprises qui correspondent à tes critères... Ou pas, tu as tout à fait le choix de t'entraîner uniquement pour le fun!

Et pour finir en beauté, le site organise tous les trois mois environ des **compétitions internationales** durant lesquelles tous les _codingamers_ vont faire s'affronter leurs programmes dans des mini-jeux compétitifs. Que ce soit lors d'une course de _pods_ de _Star Wars_, d'une partie classique de _bomberman_ ou d'un match de _quidditch_ de l'univers de _Harry Potter_, les intelligences artificielles[^1] de chaque participants vont s'affronter dans des ligues de niveaux équilibrés. Les meilleures passeront les ligues de Bois, Bronze, Argent et Or jusqu'à atteindre la prestigieuse Ligue Légendaire et concourir pour la première place internationale!

Un aperçu des compétitions passées et à venir: https://www.codingame.com/multiplayer

[^1]: N'ayons pas peur des mots, même s'il s'agit ici d'intelligences artificielles très simples: il ne s'agit pas de recréer _Alpha Go_!

## Exercism.io

- Public cible: Niveau intermédiaire
- Langages: 50 langages disponibles
- Points forts: Pratique depuis la console, mentorat

exercism.io est une plateforme d'apprentissage créée par [Katrina Owen](https://www.kytrinyx.com) dont le code source est entièrement disponible sur [Github](https://github.com/exercism). Cette plateforme qui permet de se former à une cinquantaine de langages se distingue par trois aspects importants:

![Exercism.io](https://i.imgur.com/868p2Jy.png)

Premièrement, le développement se fait en local sur la machine, ce qui nécessite de mettre en place un environnement adéquat. La documentation permet d'y parvenir facilement, mais ça peut rester un frein pour un pur débutant car cela demande une maîtrise basique de la ligne de commande:

```
$ exercism download --exercise=two-fer --track=go

Downloaded to
/Users/martin/Exercism/go/two-fer
```

Ensuite, la méthode utilisée est le [Test Driven Development](https://devindetails.com/fr/tdd-debutant), c'est-à-dire que lorsqu'on exécute le programme, une liste de tests vérifie qu'il se comporte correctement (donc en général à la première exécution tous les tests échouent). L'élève doit implémenter l'algorithme pour faire passer les tests les uns après les autres et ainsi atteindre la fonctionnalité demandée. C'est une méthode très efficace utilisée dans le développement professionnel permettant de s'assurer que quand on modifie une partie d'un programme pour ajouter une fonctionnalité, cela ne "casse" pas le comportement initial (on appelle cela une régression et c'est la hantise de tous les développeurs :wink:).

Enfin, une fois la solution soumise à la plateforme, il est possible de demander à un mentor bénévole de valider la solution. Il peut alors s'ensuivre une série d'itérations permettant d'améliorer l'efficacité et la lisibilité du code, mais aussi de découvrir de nouvelles possibilités du langage en question.

![Katrina commenting my go solution!](https://i.imgur.com/oaw685g.png)

## C'est tout?

Les développeur.euse.s sont généralement des personnes passioné.e.s (et passionant.e.s?) qui aiment à partager leurs expériences techniques. Il est donc très facile de trouver en ligne un bon nombre de ressources traitant de la programmation dans de multiples langages et domaines d'applications: Web, jeux vidéos, objets connectés, etc. Tu trouveras aussi auprès des Bricodeurs une [communauté](https://www.helloasso.com/associations/les-bricodeurs/adhesions/adhesions-bricodeurs-2016) pour échanger. Les sites listés dans cet articles ne représentent qu'une infime partie de ces ressources qui ont été personnellement experimentées par certains bricodeur.euse.s et que nous pouvons par conséquent te conseiller.

Bon apprentissage!
