---
title: Découvrir la programmation avec Python
date: 2020-03-30 09:30:00 Z
categories:
- articles
tags:
- programmation
- e-learning
- coderenligne
- Python
layout: post
excerpt: Résumé du livestream des bricodeurs pour présenter la programmation avec Python
comments: true
share: true
author: xavier
---

Python est aujourd’hui un des langages de programmation les plus utilisés au monde. Il permet de réaliser des scripts, des sites web, d’analyser des données et même de construire des intelligences artificielles. À la fin de ce tutoriel, vous connaîtrez les premières notions du langage Python et de la programmation. Ces bases ont étés vues pendant la [présentation en direct (livestream)](https://youtu.be/-oeEa8yKVSk?t=227) du 26 mars 2020. 

## Environnement

Pour débuter, je vous recommande d'utiliser Repl.it. C'est un service en ligne qui permet d'écrire, exécuter et partager du code. Pas besoin de créer un compte pour essayer, il suffit de suivre [ce lien](https://repl.it/languages/python3). Créer un compte vous permettra de sauvegarder vos créations.
    
Vous voyez à gauche les fichiers. Le principal fichier est main.py (*main* signifie principal en anglais). Au milieu se trouve l'éditeur de texte où nous écrirons le programme. À droite vous avez la console où le programme sera exécuté.

![Repl.it pour python]({{ site.url }}/images/tutos/Python-repl.it.jpg)


## Bonjour Python
Première chose dont nous allons avoir besoin est une fonction pour afficher quelque chose dans la console. C'est la fonction `print()`, ce qui signifie afficher ou imprimer en anglais. Entre les parenthèses on donne à la fonction ce que l'on souhaite afficher. Ici, on souhaite afficher un texte tel quel. En informatique on parle de **chaîne de caractères** (*string* en anglais).

```python
print("Bonjour toi")
```
![Bonjour Python]({{ site.url }}/images/tutos/python-2.jpg)

Nous pouvons afficher un texte complet. Pour chaque appel à `print()` l'affichage revient à la ligne.

```python
print("Bonjour toi !")
print("Bienvenue dans ce premier tutoriel Python.")
```

## Variables et valeurs

Pour pouvoir enregistrer le texte et le réutiliser pendant l'exécution du programme, nous allons utiliser une variable. Une variable est une boîte dans laquelle on peut enregistrer une information. Ici, nous allons enregistrer le texte d'accueil "Bonjour toi". La valeur "Bonjour toi" est **affectée** à la variable `message` que nous venons de créer.

    
 ![Variable]({{ site.url }}/images/tutos/variable.gif)
   
Dès lors, nous pouvons afficher le contenu de la variable message:
```python
message = "Bonjour toi"
print(message)
```


Nous avons choisi de nommer notre variable "message" mais nous aurions pu lui donner n'importe quel nom, comme "accueil" ou "truc". On choisi généralement un nom qui permet de comprendre ce que contient la variable. 

{% capture notice_nom_variables %}
Les noms de variables sont composés de lettres (sans accents) et chiffres (mais pas en première position). On ne peut pas utiliser d'espaces, alors pour séparer les mots on utilise le symbole "\_". 

Attention aux majuscules et minuscules. "Message" et "message" sont deux variables différentes pour Python. 
{% endcapture %}
{% include notice.html content=notice_nom_variables %}

## Interagir avec l'utilisateur 

Pour que le programme soit un peu plus personnalisé et interactif, nous allons demander à l'utilisateur son prénom. Pour ceci, nous allons utiliser la fonction `input()` (qui signifie "entrée" en anglais). La fonction prend en paramètre un texte à afficher, par exemple pour poser une question. 
```python
message = "Bonjour "
prenom = input("Quel est ton prénom? ")
print(message + prenom)
```

{% capture notice_concatenation %}
Comme les variables sont des chaînes de caractères le symbole `+` signifie de les mettre bout à bout l'une après l'autre. On appelle cette action une **concaténation**. Si les deux variables contiennent un nombre, `+` opère une addition simple. 

{% endcapture %}
{% include notice.html content=notice_concatenation %}

## Les conditions

Enfin, pour être plus chaleureux, si le programme reconnaît le prénom il affichera un message d'accueil supplémentaire. Pour cela nous utiliserons le mot clé `if` ("si" en anglais). Si le prénom est "Xavier", nous dirons "ravi de te revoir". Vous pouvez écrire votre prénom si vous préferez...
```python
message = "Bonjour "
prenom = input("Quel est ton prénom? ")
print(message + prenom)

if prenom == "Xavier":
    print("Ravi de te revoir")
```
Il est important de noter la syntaxe propre au langage python. La première ligne indique la **condition** (SI le prénom de l'utilisateur est "Xavier"), puis après les deux points et l'espacement sur la gauche, les **instructions** à executer (affiche "Ravi de te revoir" et affiche "par contre tu es décoiffé"). Tout ce qui sera dans le même alignement sera exécuté dans les mêmes conditions.

```python
message = "Bonjour "
prenom = input("Quel est ton prénom? ")
print(message + prenom)

if prenom == "Xavier":
    print("Ravi de te revoir")
    print("par contre tu es décoiffé")
```

Le symbole `==` compare la variable `prenom` à la chaîne "Xavier". On écrit deux fois le symbole égal pour distinguer du `=` simple qui sert pour l'affectation d'une variable comme nous avons vu plus haut.

Rien qu'avec ça, vous pouvez déjà construire votre propre jeu "Choisi ta propre aventure". Vous racontez une histoire avec des print(). Puis quand l'utilisateur doit faire un choix, par exemple porte de droite ou porte de gauche, vous racontez la suite de l'histoire en fonction du choix. Vous pouvez même compter les points de vie avec une variable !

{% capture notice_indentation %}
<div id="indentation"></div>
L'espacement sur la gauche s'appelle "l'**indentation**" (on peut utiliser 2 ou 4 espaces, ou la touche "tab"). C'est important pour le langage Python. Dans notre exemple, c'est par ce que l'on indente l'appel à la fonction`print("Ravi de te revoir")`, que l'ordinateur comprendra qu'elle est liée à la condition `if prenom == "Xavier"`. Sinon, l'ordinateur afficherait "Ravi de te revoir" quel que soit le prénom de l'utilisateur !
{% endcapture %}

{% include notice.html content=notice_indentation %}

## Première analyse de texte en Python

Un des principaux usages de ce langage est l'analyse de données, de textes, d'images... Ici, nous allons faire une analyse très simple du prénom de l'utilisateur. 

La première analyse porte sur le nombre de fois que l'on trouve la lettre 'e'. Pour commencer, nous allons parcourir les lettres du prénom. Nous recourons au mot clé `for` ("pour" en anglais) qui execute des instructions pour chaque lettre. 

```python
for x in prenom:
    print(x)
``` 
       
Pour chaque lettre contenue dans la variable `prenom`, ce code l'enregistre dans la variable nommée "x", puis affiche le contenu de la variable `x`. Comme les instructions sont répétées on parle de **boucle**. La syntaxe est similaires à celle de la condition `if`, avec une ligne qui contrôle le fonctionnement de cette partie, `:`, retour à la ligne et l'indentation (les deux espaces ou la tabulation vers la droite).

Maintenant pour compter les "e" nous allons créer une nouvelle variable `compteur` à laquelle nous ajouterons 1 à chaque fois que nous rencontrons un "e" ou un "E".

```python
for x in prenom:
    print(x)
    if x == 'e' or x == 'E':
        compteur = compteur + 1
```

On peut alors afficher le résultat. La fonction `print()` peut afficher plusieurs éléments sur la même ligne, si on les sépare par une virgule. Le programme complet est alors : 

```python
print("Nombre de e :",compteur)
```

A la fin de l'exécution du programme, les variables contiennent les valeurs suivantes. Vous pouvez le tester  en tapant dans la console `print()` avec le nom de la variable en paramètre `print(compteur)`. Par exemple avec le prénom Emilie:

| Variable 	| Contenu    	| 
|----------	|------------	|
| prenom    | "Emilie"   	|
| message  	| "Bonjour " 	|
| compteur 	| 2           |
| x       	| "e"         |



## Lister les lettres dans un mot

Maintenant nous allons établir la liste des lettres utilisées dans le prénom. Pour ceci, nous créons une variable `liste`.

```python
liste = ""
```
Puis, comme dans le cas précédent, pour chaque lettre du prénom, nous alors essayer d'évaluer si la lettre est dans notre liste. Plutôt que le `==`, cette fois nous utilisons le mot clé `in` qui permet de vérifier si l'élement est contenu dans la liste. Puisque l'on souhaite l'ajouter si il n'est pas dans la liste, on ajoute le mot clé de négation `not`.

```python
for y in prenom:
  if y not in liste:
    liste = liste + y
```
Et voilà le programme complet !

```python
message = "Bonjour " 
prenom = input("Quel est ton prenom? ")
print( message + prenom)

compteur = 0
for lettre in prenom:
  if x == 'e' or x == 'E':
    compteur = compteur + 1
print("Nombre de e :",compteur)

liste = ""
for y in prenom:
  if y not in liste:
    liste = liste + y
print("Lettres utilisées :",liste + " ")
```

Son exécution donne
```
Quel est ton prenom? Eleonore
Nombre de e : 3
Lettres utilisées : Eleonr
```
{% capture notice_majuscules %}
Notre programme considère les majuscules et les minuscules comme des lettres différentes. Une façon de résoudre le problème serait d'utiliser la méthode `prenom.lower()` qui nous donne la version en minuscules du contenu de `prenom`, mais nous le reverrons plus tard.
{% endcapture %}
{% include notice.html content=notice_majuscules %}


## Aller plus loin

Dans la suite du livestream et l'article suivant nous verrons comment réaliser un jeu du pendu. Nous utiliserons les notions que nous venons de voir. 

Ensuite, je vous recommande fortement de vous donner un objectif, par exemple un petit programme qui compte le nombre de répétitions d'une lettre dans un texte... La programmation est beaucoup plus intéressante quand on crée en suivant sa propre créativité.

En termes d'outils, si vous préférez un logiciel installé sur votre ordinateur, je vous recommande [spyder](https://www.spyder-ide.org/) qui propose un environnement complet, léger et gratuit. Vous pouvez l'installer avec [Anaconda](https://www.anaconda.com/distribution/) pour avoir toute la panoplie d'un "data scientist".

Si vous souhaitez en apprendre plus sur la programmation en Python, et que vous vous intéressez également au *développement web*, je vous invite à consulter notre série [apprendre à coder en ligne](https://lesbricodeurs.fr/apprendre-a-coder-en-ligne/), qui va s'étoffer dans les semaines à venir.

A très vite!
