---
layout: page
title: 
excerpt: "Les Bricodeurs, c'est comme à la maison"
modified: 2015-07-24T19:44:38.564948-04:00
image:
  feature:
  credit:
  creditlink:
---


{% for member in site.data.members %} 
<div class="bio">
		<img alt="{{ member[1].name }}" src="{{ site.url }}/images/{{ member[1].avatar }}" class="bio-photo">
	<h4>    {{member[1].name}}</h4>
	<i>{{member[1].bio}}</i>
</div>
{% endfor %}