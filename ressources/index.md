---
title:  Les ressources des bricodeurs
layout: embed
excerpt: Les présentations des ateliers.
modified: 2015-07-24 23:44:38.564000000 Z
image:
    feature: true
---

<div id="main" class="main">
    <div class="entry">
        <div class="entry-wrapper">
            <header class="entry-header"><h1 class="entry-title">{{page.title}}</h1></header>
            <div class="entry-content">
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

