---
title:  Les ateliers "Apprendre à coder ensemble"
layout: embed
excerpt: Les Bricodeurs organisent toutes les 2 semaines des ateliers d'initiation à la programmation et à diverses problématiques dans le numérique.
modified: 2015-07-24 23:44:38.564000000 Z
image:
    feature: true
---

<div id="main" class="main">
    <div class="entry">
        <div class="entry-wrapper">
            <header class="entry-header"><h1 class="entry-title">{{page.title}}</h1></header>
            <div class="entry-content">
                <p>Les Bricodeurs organisent toutes les 2 semaines des ateliers d'initiation à la programmation et à divers sujets dans le numérique.
                Ces ateliers sont disponibles sur le site Meet-up dans le groupe <a href="https://www.meetup.com/fr-FR/Lyon-Beginners-Apprendre-a-coder-ensemble/">Apprendre à coder ensemble</a>.</p>
                <h2 id="resources">Ressources</h2>
                {% for year in site.data.resources %}
                    <h3>{{ year.date }}</h3>
                    <ul>
                        {% for resource in year.resources %}
                            <li><strong>{{resource.date}}</strong> - <a href="{{resource.href}}" title="{{resource.title}}" target="_blank">{{resource.label}}</a></li>
                        {% endfor %}
                    </ul>
                {% endfor %}
            </div>
        </div>
    </div>
</div> 

