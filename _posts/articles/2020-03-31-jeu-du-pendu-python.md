---
title: Le jeu du pendu en Python
date: 2020-03-31 09:30:00 Z
categories:
- articles
tags:
- programmation
- coderenligne
- Python
layout: post
excerpt: Haut et court
comments: true
share: true
author: xavier
---

Après avoir vu les [bases de python](https://lesbricodeurs.fr/articles/decouvrir-la-programmation-avec-Python/), nous allons réutiliser ces notions pour réaliser un jeu du pendu. Vous pouvez revoir la [vidéo correspondante ici](https://youtu.be/-oeEa8yKVSk?t=1697).

Le jeu du pendu consiste à deviner un mot. Le joueur propose une lettre. Si elle fait partie du mot le programme dit où se trouve cette lettre dans le mot. Si elle ne fait pas partie du mot, on commence à dessiner un pendu. À la septième erreur le dessin est terminé et le joueur a perdu. 

### Solution et variables

Nous allons commencer par définir les variables dont nous allons avoir besoin. En premier lieu nous devons choisir le mot à deviner. Pour le moment nous allons fixer la solution à "casserole". 
```python
solution = "casserole"
```
Ensuite, nous allons définir le nombre d'essais possibles. Soit on compte les erreurs de 0 jusqu'à 7, soit on compte les tentatives restantes de 7 à 0. Le second me semble plus lisible. Lorsque la variable `tentatives` atteint `0`, le joueur perd la partie.

```python
tentatives = 7
```
![illustration pendu python]({{ site.url }}/images/tutos/python-3.jpg)

Dans le jeu du pendu, on montre à tout moment au joueur le mot avec les lettres qui ont été trouvées et des blancs pour les lettres qui restent à deviner. Ici, nous utiliserons le tiret `_` pour représenter une lettre qui n'a pas encore été découverte. 

Pour l'initialiser, nous ajoutons autant de blancs qu'il y a de caractères dans la solution en utilisant une boucle `for`.

```python
affichage = ""
for l in solution:
  affichage = affichage + "_ "
```
Enfin, nous gardons une liste des lettres qui ont été découvertes, pour pouvoir mettre à jour l'affichage. Pour commencer cette liste est vide. Chaque proposition de lettre correcte sera ajoutée

```python
lettres_trouvees = ""
```
### C'est l'histoire d'une lettre qui tombe ...
Maintenant il s'agit de demander à l'utilisateur sa proposition de lettre. Nous lui rappellons le mot à deviner d'abord. Puis nous réutilisons la fonction `input()` que nous avons vu précédement.

```python
print("Mot à deviner : ", affichage)
proposition = input("proposez une lettre : ")
```
Maintenant il s'agit de traiter cette proposition. Il y a deux possibilités. Si la proposition est une lettre contenue dans la solution, alors il faut l'ajouter à la liste des lettres trouvées. Sinon le joueur perd une tentative. 

Pour représenter cette condition, nous utilisons la structure `if ... in ...:` que nous avons vu:  **Si** (`if`) la proposition est **dans** (`in`) la solution **alors** (`:`)ajouter la proposition aux lettres trouvées. 

Pour dire ce qu'il faut faire dans le cas contraire nous utilisons le mot clé `else` : **Sinon** (`else:`) réduire les tentatives de 1.
```python
  if proposition in solution:
    lettres_trouvees = lettres_trouvees + proposition
  else:
    tentatives = tentatives - 1
```

{% capture notice_increment %}

L'instruction `tentatives = tentatives - 1` peut paraître étonnante de premier abord, mais il suffit de comprendre l'ordre dans lequel le programme résout les opérations:
1. Le programme calcule de le résultat de la soustraction `tentatives - 1`, il s'agit de la valeur contenue dans la variable `tentatives`, à laquelle on retire 1.
2. Ce résultat est affecté à la variable `tentatives`
 
Cette opération est très courante en programmation, on l'appelle la **décrémentation** (inverse de l'**incrémentation** qui consiste à rajouter 1 à chaque tour de boucle). En Python, on peut l'écrire de manière alternative:
- `tentatives = tentatives - 1` 
- `tentatives -= 1`

Les deux syntaxes ont exactement le même effet, mais vous vous apercevrez que les développeuses et développeurs ont tendance à préferer les versions courtes. 🤷

{% endcapture %}
{% include notice.html content=notice_increment %}

On peut ajouter `print()` pour indiquer à l'utilisateur si la lettre appartient à l'ensemble ou non. 
```python
  if proposition in solution:
    lettres_trouvees = lettres_trouvees + proposition
    print("-> Bien vu!")
  else:
    tentatives = tentatives - 1
    print("-> Nope. Il vous reste", tentatives, "tentatives")

```
Vous pouvez déjà tester votre jeu. Cela fonctionne comme prévu?

![Pendaison]({{ site.url }}/images/tutos/danse.gif

### ... qui répète à chaque étage "jusqu’ici tout va bien" ...
Aussi satisfaisant que ça puisse être, pour le moment notre jeu répond une seule fois, puis s'arrête. Nous avons besoin d'une boucle qui répète les instructions précédentes. Nous allons utiliser le mot clé `while` ("tant que" en anglais). Nous voulons que tant que le nombre de tentatives est supérieur à 0, l'ordinateur affiche le mot à deviner, demande une proposition et l'analyse. Comme pour `for` ou `if`, la syntaxe est le mot clé `while`, la condition, `:` et un espacement à gauche. 
```python

while tentatives>0:
    print("Mot à deviner : ", affichage)
    proposition = input("proposez une lettre : ")
    if proposition in solution:
        lettres_trouvees = lettres_trouvees + proposition
        print("-> Bien vu!")
    else:
        tentatives = tentatives - 1
        print("-> Nope. Il vous reste", tentatives, "tentatives")
    
```
Ces instructions seront donc répétées tant que le nombre de tentatives n'est pas dépassé. Il est très courant que les jeux aient ce genre de boucle principale qui attend les saisies de l'utilisateur.

Il nous reste à mettre à jour de l'affichage. Dans cette boucle, donc décalé vers la droite, nous commençons par effacer ce que contenait la variable `affichage`. Pour cela, nous remplaçons son contenu par une chaîne de caractères vide. 

Ensuite, pour chaque lettre de la solution (`for ... in ....`), nous allons regarder si elle fait partie des lettres trouvées(`if ... in ...`). Dans ce cas, on ajoute à l'affichage la lettre et un espace pour la lisibilité. Sinon, cette lettre n'a pas été trouvée et on affiche donc un blanc. 

```python
    affichage = ""
    for x in solution:
      if x in lettres_trouvees:
          affichage += x + " "
      else:
          affichage += "_ "

```
### ... l'important n’est pas la chute, c’est l’atterrissage.
Le programme devrait fonctionner completement, mais il reste à afficher la victoire ou la perte du jeu. 

Pour la victoire, nous allons dans la boucle ajouter un `if` qui évaluera si il reste des lettres à découvrir. Pour cela, nous allons simplement regarder si il reste des tirets dans la variable affichage. 
```python
    if "_" not in affichage:
      print(">>> Gagné! <<<")
      break
```
Le mot clé `break` sert à sortir de la boucle `while`. Quand le programme rencontre ce mot, il termine la boucle et continue les instructions du programme principal. Pour bien le visualiser, on peut ajouter une ligne, à la fin tout à gauche.
```python
print("    * Fin de la partie *    ")
```
Pour la perte, elle est déja prévue. Testez votre programme en donnant des lettres qui ne sont pas dans la solution plus de 6 fois. Que se passe-t-il ?

![Question]({{ site.url }}/images/tutos/question.gif

En effet, la condition de la boucle `while` prévoit déjà de terminer la boucle principale à la septième erreur. Le jeu affiche donc * Fin de la partie *. 

Pour que ce soit un vrai jeu du pendu, il manque un dessin de pendu. Nous devons afficher à chaque erreur un bout de la scene. Nous allons utiliser le charmant dessin suivant. Petit aveu, je n'ai jamais été fort en dessin. 

      ==========Y= 
      ||/       |  
      ||        0  
      ||       /|\ 
      ||       /|  
     /||           
     =============

Si le joueur a fait une erreur, on affiche la ligne de bas du dessin. S'il a fait deux erreurs, on affiche les deux lignes du bas... Pour être malin on va dire d'afficher la ligne du bas s'il y a 6 tentatives restantes ou moins, d'afficher l'avant dernière ligne s'il reste 5 tentatives ou moins... 

      ==========Y=          ==0 tentatives restantes
      ||/       |           <=1 tentatives restantes
      ||        0           <=2 tentatives restantes
      ||       /|\          <=3 tentatives restantes
      ||       /|           <=4 tentatives restantes
     /||                    <=5 tentatives restantes
     =============          <=6 tentatives restantes

Dans le code, après la ligne où on réduit le nombre de tentatives, on ajoute donc la série de conditions suivantes. *Nota Bene*, ces conditions sont décalées de deux "crans" (voir [indentation](https://lesbricodeurs.fr/articles/decouvrir-la-programmation-avec-Python/#indentation)) vers la droite. Le premier parce que l'on est dans la boucle `while` principale du jeu et le second correspondant au `else`.
```python
    if tentatives==0:
        print(" ==========Y= ")
    if tentatives<=1:
        print(" ||/       |  ")
    if tentatives<=2:
        print(" ||        0  ")
    if tentatives<=3:
        print(" ||       /|\ ")
    if tentatives<=4:
        print(" ||       /|  ")
    if tentatives<=5:                    
        print("/||           ")
    if tentatives<=6:
        print("==============\n")
```
![Pendaison]({{ site.url }}/images/tutos/pendu.gif)

### Code complet

Voici le programme complet, qui ajoute quelques éléments:
- **Le choix aléatoire d'un mot**, en utilisant la fonction random.choice() qui permet de sélectionner un mot aléatoirement parmi une liste. 
- **Le nettoyage de l'entrée de l'utilisateur**, pour ne retenir que la première lettre saisie et en minuscule. 
- **Quelques retours à la ligne** pour la lisibilité avec le caractère spécial `\n`.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Mar 24 07:36:15 2020
@author: @Xalava
"""

import random
choix = ["casserole", "cuillere", "patate", "souris"]
solution = random.choice(choix)

solution = "casserole"
tentatives = 7
affichage = ""
lettres_trouvees = ""

for l in solution:
  affichage = affichage + "_ "

print(">> Bienvenue dans le pendu <<")

while tentatives > 0:
  print("\nMot à deviner : ", affichage)
  proposition = input("proposez une lettre : ")[0:1].lower()

  if proposition in solution:
      lettres_trouvees = lettres_trouvees + proposition
      print("-> Bien vu!")
  else:
    tentatives = tentatives - 1
    print("-> Nope\n")
    if tentatives==0:
        print(" ==========Y= ")
    if tentatives<=1:
        print(" ||/       |  ")
    if tentatives<=2:
        print(" ||        0  ")
    if tentatives<=3:
        print(" ||       /|\ ")
    if tentatives<=4:
        print(" ||       /|  ")
    if tentatives<=5:                    
        print("/||           ")
    if tentatives<=6:
        print("==============\n")

  affichage = ""
  for x in solution:
      if x in lettres_trouvees:
          affichage += x + " "
      else:
          affichage += "_ "

  if "_" not in affichage:
      print(">>> Gagné! <<<")
      break
     
print("\n    * Fin de la partie *    ")
```

## Pour aller plus loin

Si vous souhaitez en apprendre plus sur la programmation en Python, et que vous vous intéressez également au *développement web*, je vous invite à consulter notre série [apprendre à coder en ligne](https://lesbricodeurs.fr/apprendre-a-coder-en-ligne/), qui va s'étoffer dans les semaines à venir.