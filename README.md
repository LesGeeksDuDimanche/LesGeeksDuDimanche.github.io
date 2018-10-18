# Les Bricodeurs

Les Bricodeurs est au départ un groupe informel de geeks qui se réunit le dimanche pour développer ensemble et débattre des enjeux technologiques depuis 2014. \#ClashEnBash

Depuis l'association évolue sur les champs de l'éducation au numérique, de l'accompagnement de projet civictech et du développement communautés techniques.

Cette page retranscrit les activités et débats [lesbricodeurs](http://lesbricodeurs.fr). Vous êtes les bienvenus pour contribuer, compléter, corriger . La façon la plus simple est de visiter [Prose.io](http://prose.io) ou [classeur](http://classeur.io/), vous connecter avec github et editer les fichiers de la section _posts.

## Technologie

La page utilise [Jekyll](http://jekyllrb.com) + octopress avec le thème So Simple du designer & graphiste [Michael Rose](http://mademistakes.com).
Pour plus d'informations: [Configuration](http://mmistakes.github.io/so-simple-theme/theme-setup/)

## Installation
Télécharger le dépot

	git clone git@github.com:LesGeeksDuDimanche/LesGeeksDuDimanche.github.io.git

Installer ruby et outils de base (sur ubuntu)

	sudo apt install ruby ruby-dev make gcc nodejs ruby-bundler 

Installer les "gem" utiles à ce projet, localement

	bundle install

## Utilisation

Lancer le serveur en local avec une configuration appropriée

	bundle exec jekyll serve -wV -c configDEV.yml

### Utiliser octopress pour ajouter les articles 

Octopress permet d'automatiser la création de posts. Copier coller le précédent fonctionne aussi très bien.

	sudo gem install octopress --pre

Ecrire un nouvel article 
	
	octopress new post "Concombre et code" --dir articles

Ecrire une nouvelle page 
	
	octopress new page page-sympa/

### Particulier

Faire un post lien : 

	link: http://mademistakes.com  

Utiliser les twitter et facebook cards
	
	thumbnail : image/image.jpg

### Bug fix

Il peut etre nessaire d'installer sitemap
	
	sudo gem install jekyll-sitemap --pre
	
### Pour modifier du js


	npm install -g grunt-cli
	npm install
	grunt

### Mettre à jour 

bundle update jekyll

## Licence

Le contenu du site est sous licence Creative Commons Attribution Share Alike 4.0 International
