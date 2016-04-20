---
layout: page
title: Blog Note
excerpt: "Historique de nos (d)ébats"
search_omit: true
---

Vous trouverez ici pêle-mêle des notes tirées de nos goûters. 

  <div id="fb-root"></div>
  <script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1520782838186548";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>

<div class="fb-follow" data-href="https://www.facebook.com/lesbricodeurs" data-layout="standard" data-show-faces="true">	</div> 

<ul class="post-list">
{% for post in site.categories.notes %} 
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_string }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
