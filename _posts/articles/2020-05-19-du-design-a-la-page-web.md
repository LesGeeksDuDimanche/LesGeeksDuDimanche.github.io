

# Du design à la page web

Lors d'un article précédent[^1], nous avions vu comment le Web est consitué de pages HTML reliées les unes aux autres. Le spécialiste de la création de ces pages web s'appelle l'**intégrateur web** (ou l'intégratrice). C'est cette personne qui est en charge de la transformation d'une **maquette graphique** en langages HTML et CSS fonctionnels. Durant notre dernier live sur YouTube[^15] nous avons fait une démonstration du processus d'intégration d'une telle maquette. Vous pouvez en trouver une rediffusion[^2] sur notre chaîne YouTube.

Pour cet atelier, je vais utiliser une maquette graphique gracieusement mise à disposition par Plamen Ivanov, sur le site Dribbble[^25]. Il s'agit d'une page d'accueil pour un site de rencontre, plutôt dans l'air du temps, non?

![LoveStory, une page d'accueil pour site de rencontre, par Plamen Ivanov](https://i.imgur.com/Z6cPH1g.jpg)

[^1]: Les Bricodeurs, ["Créé ta première page web"](https://lesbricodeurs.fr/articles/creer-premiere-page-web/)
[^15]: YouTube, [Du design à la page web](https://youtu.be/mdSJ6_4NCYc)
[^2]: YouTube, [Crée ta première page web](https://youtu.be/b3m6CFbikcA)
[^25]: [LoveStory](https://dribbble.com/shots/3066130-Dating-Website-Theme-Free-Psd), maquette graphique par Plamen Ivanov, sur Dibbble

# Les outils

Pour cette présentation, j'ai utilisé les trois outils suivants.

- Un **éditeur de texte**: j'ai choisi Atom[^3] mais n'importe lequel peut faire l'affaire (même le bloc-note de Windows!). Cet éditeur, comme beaucoup, est gratuit, mais il est aussi _open source_.
- Un logiciel de **traitement d'image**: qui est optionnel si le designer nous fourni toutes les ressources, mais toujours bien utile. J'ai choisi Krita[^4], même s'il se spécialise plutôt dans le "digital painting", il dispose tout de même des fonctionnalités de base qui me sont très utiles (et il peut lire les fichier Photoshop, même s'il ne le ferait pas aussi bien que ce dernier). Lui aussi gratuit et open source.
- Un **navigateur web**: Firefox[^5] est mon choix par défaut, mais là encore, tous se valent pour l'utilisation que j'en ai faite. L'important c'est de savoir où trouver les _outils de développement_ (par exemple, avec le raccourci `ctrl+shift+i` dans Firefox). Lui aussi évidemment gratuit.

[^3]: [Atom](https://atom.io/), un éditeur de texte open source
[^4]: [Krita](https://krita.org/fr/), un logiciel de traitement d'image open source
[^5]: Documentation pour les outils de développeurs de [Firefox](https://developer.mozilla.org/fr/docs/Outils)

## Quelques rappels

La vidéo vous demandera une petite connaissance préalable des langages HTML et CSS. Voici toutefois quelques rappels qui pourront vous rendre cette présentation plus claire:

- Le _World Wide Web_ est un ensemble de documents reliés les uns aux autres par des **liens hypertextes**. Ces pages sont stockées sur des **serveurs**, puis envoyées aux utilisateurs qui en font la demande via leur **navigateur web**.
- Les pages ainsi reçues sont écrites en HTML, qui est un langage de description de document. Il s'écrit à l'aide de **balises** qui peuvent s'imbriquer les unes dans les autres. La liste des balises existantes est standardisée par le _World Wide Web Consortium_ (W3C pour les intimes). La _Fondation Mozilla_ en tient une liste très à jour sur le Mozilla Developers Network[^6].
- Si le HTML structure le contenu d'une page, sa mise en page est assurée par des **feuilles de styles** écrites en CSS. Ce langage permet d'appliquer des styles sur les **éléments** HTML d'une page web (les balises et leur contenu).

[^6]: Documentation en ligne du [Mozilla Developers Network](https://developer.mozilla.org/fr/)

## Hors du cadre

Il y a beaucoup à dire sur l'intégration de page web, et nous ne pourrons évidemment pas tout voir dans une même vidéo. Seront exclus de la leçon:

- Les **frameworks** CSS comme Bootstrap, Foundation ou Bulma.
- Le **responsive web design**, qui permet d'adapter la page au type d'écran de l'utilisateur (pour la navigation sur mobile en grande partie).

## La sémantique des éléments HTML

Ce qu'il faut savoir, c'est que les balises HTML sont analysées par les robots des moteurs de recherche, afin de comprendre ce qu'il y a dans votre page, ce qui lui donne de l'importance. Pour le référencement, il est donc important d'avoir une page aussi **clairement structurée** que possible. Cela passe par l'utilisation des balises conformément au rôle que le W3C leur a défini. C'est ce que l'on appelle la **sémantique** du HTML. Encore une fois, se référer à la documentation du Mozilla Developers Network[^6] est fortement conseillé.

### Une première séparation

Afin de voir plus clair dans le travail que je dois faire, j'aime bien commencer par décomposer visuellement la maquette graphique que j'ai reçue afin d'en identifier les principaux **éléments structurels**. Cela me permet ensuite de choisir les balises adaptées au rôle des éléments que j'ai séparés.

```htmlmixed
<html lang="fr">
    <head>
        <title>BricoLove</title>
    </head>
    <body>
        <header> /* Mon en-tête */ </header>
        <section> /* Ma section */ </section>
        <footer> /* Mon pied de page */ </footer>
    </body>
</html>
    
```

Dans le cas de ma page, j'ai défini trois grandes zones distinctes: 

- L'en-tête de ma page, qui contient des liens de navigation et formulaire de recherche. Pour cela, la balise `<header>` sera parfaite.
- Une section de contenu qui présente les différents services que propose le site. C'est très courant dans une page d'accueil et ça va dans la balise ... `<section>`!
- Un pied de page, contenant des informations complémentaires et des liens vers les réseaux sociaux, ce sera mon `<footer>`.

### Le contenu au centre du web

Tout cela est proprement séparé, mais pour le moment, mon site est vide. Or, le but du Web, c'est de proposer la lecture de **contenus** aux visiteurs. Les moteurs de recherche seront donc particulièrement attentifs à ces contenus.

Sur cette page d'accueil, l'essentiel de mon contenu se trouve dans la section centrale, et permet de donner envie au visiteur de s'inscrire sur le site de rencontre de mon client (on va dire que je suis rémunéré pour ce travail...). Je distingue donc aisément un premier **titre**, qui exprime très bien le caractère de ma page. Je vais donc utiliser la balise "titre de niveau 1", soit `<h1>`, qui va lui donner toute son importance.

Le **paragraphe** (balise `<p>`) qui suit apporte probablement plus d'informations sur le sujet de ce titre, mais actuellement il contient du charabia en latin! C'est très courant, lorsque le client ne nous a pas encore fourni le contenu à intégrer dans le site (parce qu'il est en cours de rédaction, par exemple), on le remplace généralement par du _faux texte_ (le plus célèbre de ces faux texte étant le _Lorem ipsum_, vous le verrez souvent). On peut par exemple en générer en utilisant un site externe, comme faux-texte.com.[^7]

[^7]: [faux-texte.com](https://www.faux-texte.com/), générateur de faux texte en ligne

![Des éléments HTML représentés sur la maquette graphique.](https://i.imgur.com/1eOLkwa.jpg)

Les éléments suivants répètent un même schéma:

- une image: j'utilise la balise `<img>`. Ce qui est important, ce sont ses **attributs**: `src` me permet de donner l'adresse URL où mon image est hébergée, alors que `alt` me permet de lui assigner un **texte alternatif**. Ce dernier permet aux personne malvoyantes de comprendre de quoi parle mon image grâce à leur lecteur d'écran, alors ne l'oublions pas!
- un titre: j'utilise ici le "titre de niveau 2" (`<h2>`), car ce titre est d'une moindre importance que celui de ma page. Le `<h1>` est d'ailleurs assez spécial et l'on ne peut en mettre qu'un seul par `<section>` maximum (ou un pour toute la page si elle est dénuée de `<section>`).
- une liste non-ordonnée: il s'agit d'une balise `<ul>`, et d'autant de balises `<li>` imbriquées que j'ai d'éléments de liste ("li" étant d'ailleurs les initiales de "list item").

## La mise en page

Ma page est maintenant structurée et expose du contenu à mes visiteurs. Seulement, avec le (manque de) design actuel, je risque de ne pas les retenir très longtemps! Je vais donc passer à la mise en page à l'aide de **règles CSS** qui vont permettre de rendre ma page agréable à lire pour les humains.

### Dimensions et centrage

Ce qu'il faut comprendre de la méthode d'affichage du HTML c'est son **modèle de boîte**. Chaque balise écrite va définir un élément HTML, qui est une boîte rectangulaire, qui peut contenir d'autres boîtes rectangulaires... Un peu comme des poupées russes!

![Le modèle de boîte, comme présenté dans... la documentation du Mozilla Developers Network!](https://mdn.mozillademos.org/files/16558/box-model.png)

Ces boîtes, je peux régler leurs dimensions internes, mais également l'espacement entre chacune d'entre elles en leur fixant des **marges**. Par exemple, je ne veux pas étaler mon contenu sur toute la largeur de l'écran, c'est trop pénible à lire. Alors je vais donner à ma `section` une taille maximale de 960 pixels avec la règle `max-width: 960px;`. Et pour avoir le texte bien en face de moi quand je lis, je vais modifier lui assigner une marge de chaque côté pour le centrer. Je ne peux par contre pas deviner la taille de l'écran de mon visiteur! Je vais alors laisser le navigateur répartir également l'espace restant dans les marges gauche et droite de ma `section` en utilisant la règle `margin: auto;`.

### Type d'affichage et alignement

Cette astuce est bien pratique lorsque j'ai un seul élément, mais pour aligner mes trois articles, je vais avoir besoin de changer le **mode d'affichage** de ces articles: c'est la propriété `display` des éléments. elle définit comment ils s'aligne les uns à la suite des autres.

- en `display: block;`, chaque élément s'affiche en dessous de l'élément qui le précède, quelles que soient leurs dimensions respectives.
- en `display: inline;`, chaque élément vient s'aligner tout de suite après son prédécesseur.

Mais j'ai besoin d'encore autre chose... c'est pourquoi je vais utiliser **flexbox**. Ce mode d'affichage est assez particulier à prendre en main, mais il permet aux éléments de se répartir équitablement l'espace de la page, ce qui nous arrange bien dans le cas présent! Je vais donc donner la règle `display: flex;` à l'**élément parent** de mes articles (ma `section` donc), et non aux articles eux-mêmes (je vous ai prévenus que c'est particulier)...

```htmlmixed=
<div style="display: flex;">
    <article>/* Premier article */</article>
    <article>/* Second article */</article>
    <article>/* Troisième article */</article>
</div>
```

## Un peu d'identité visuelle

Ma page est maintenant plus lisible. Je vais pouvoir lui donner plus de personnalité en choisissant des polices de caractères, des couleurs, etc.

### Le système de "cascade"

Je m'aperçois que les textes de la maquette graphique ne sont pas en noir, mais en bleu foncé. Je vais donc changer la propriété `color` de mon `body` et ... tous les textes de la page sont devenus bleus! C'est ce que l'on appelle l'**héritage des propriétés**. Puisque `body` contient tous les autres éléments (on dit qu'il est leur "parent", ou "ancêtre"), chaque élément va pouvoir hériter de certaines de ces propriétés (connaître les propriétés qui sont héritées et celles qui ne le sont pas viendra avec l'expérience et... la consultation du Mozilla Developers Network[^6]! Oui je suis insistant, mais sérieusement, il y a tout ce qu'il faut savoir dedans).

```CSS
body {
    color: #20628d; /* Une couleur bleu foncé, en notation hexadécimale */
}

li {
    color: black; /* Le mot-clé pour la couleur noir */
}
```

Par contre, les éléments des listes eux, sont en noir dans la maquette, je vais donc leur remettre cette couleur noire en **surchargeant** ma règle précédente. Si je donne la règle `color: black;` à mes éléments de liste, cette règle va prendre la précédence sur la règle héritée du `body`, car elle est plus spécifique.

### Les éléments "hors-flux"

Il reste à ajouter les petits éléments visuels qui donnent à la maquette de mon designer son identité particulière. Je pense à la vague qui délimite la fin de ma section et les petites coches qui précédent mes éléments de listes. Ces éléments ne sont guère utiles pour la compréhension de ma page, c'est pourquoi ils sont absents de mon code HTML, et ne seront pas interprétés par les lecteurs d'écrans pour les personnes malvoyantes.

La vague au pied de ma section est une image, mais elle n'amène pas une information suffisamment pertinente pour que j'en fasse une balise `<img>`. A la place je vais la définir en **image de fond** pour mon élément `section`, avec la règle `background-image: url(chemin/vers/mon/image.format);`.

Les images de fond ont plusieurs propriétés intéressantes pour gérer leur placement, leurs dimensions, leur répétition (ou pas)... Et les valeurs par défaut me conviennent assez peu dans le cas présent, je vais donc les modifier:

```CSS
section {
  background-image: url('assets/img/wave-blue.png');
  background-repeat: no-repeat;
  background-position: bottom;
}
```

De cette manière, je ne vais afficher ma vague qu'une seule fois tout en bas de ma section, ce qui correspond bien mieux à la maquette que j'ai récupérée.

Les petites coches avec les éléments de liste sont jolies, mais dans le cas actuel, elles ont bien peu de signification. Je vais donc les intégrer au travers de **pseudo-éléments**. C'est à dire que ces éléments seront absent de ma page HTML, mais générés par mes règles CSS au moment de l'affichage. A la différence des images de fond, qui font partie d'un élément, les pseudo-éléments se comportent comme des éléments à part, et ils vont pousser les autres éléments pour se faire de la place.

Je peux les créer soit avant, soit après un autre élément, en ciblant ce dernier. Au vu de la maquette, je vais les créer avant mes éléments de liste, en utilisant le sélecteur de pseudo-élément `::before`.

```CSS
li::before {
  content: '\2713';
}
```

Comme l'élément n'existe pas dans le HTML, je dois définir son contenu dans ma règle CSS, c'est ce que j'ai fait en lui assignant une valeur à sa propriété `content`. La coche est en fait un caractère textuel du **jeu de caractère unicode**, que les navigateurs savent très bien interpréter. On peut trouver une liste complète de ces caractères sur plusieurs sites du Web, comme par exemple Unicode Table.[^8] Ce qui est important, c'est de trouver le numéro du caractère que l'on désire, ici `2713` pour la coche. Cerise sur le gâteau, sur le site Unicode Table, j'ai directement la syntaxe à utiliser pour l'inclure dans une feuille de style CSS. Du coup, je copie, et je colle.

[^8]: [Unicode Table](https://unicode-table.com/fr/), liste des caractères unicode

## Pour résumer

L'article est déjà bien condensé par rapport aux explications que j'ai données dans la vidéo. Je vous conseille de la visionner car il y a plein de petits détails importants qui permettent de réellement coller au graphisme de la maquette, je me suis contenté ici de vous exposer les concepts généraux que j'ai mis en oeuvre.

Evidemment, faire l'intégration complète de cette maquette prend plus de temps que l'heure de vidéo que j'ai tournée. Cela demandera également pas mal d'astuce pour réaliser le formulaire de recherche tel que le graphiste l'a imaginé. Mais ça, c'est une autre histoire.

