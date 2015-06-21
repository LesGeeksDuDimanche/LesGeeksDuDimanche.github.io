---
layout: page
title: Blog Note
excerpt: "Historique de nos (d)ébats"
search_omit: true
---

Vous trouverez ici pêle-mêle des notes tirées de nos goûters.

<ul class="post-list">
{% for post in site.categories.notes %} 
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_string }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
