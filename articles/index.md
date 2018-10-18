---
title: Articles
layout: page
excerpt: Ce que l'on raconte
search_omit: true
---

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
{% for post in site.categories.articles %} 
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d" }} {% assign m = post.date | date: "%-m" %}
{% case m %}
  {% when '1' %}Janvier
  {% when '2' %}Février
  {% when '3' %}Mars
  {% when '4' %}Avril
  {% when '5' %}Mai
  {% when '6' %}Juin
  {% when '7' %}Juillet
  {% when '8' %}Août
  {% when '9' %}Septembre
  {% when '10' %}Octobre
  {% when '11' %}Novembre
  {% when '12' %}Décembre
{% endcase %} {{ post.date | date: "%Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>

Vous pouvez aussi consulter nos [notes et comptes rendus](/notes/) ou par [tags](/tags/)