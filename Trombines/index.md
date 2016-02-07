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
		<img alt="{{ member.name }}" src="{{ site.url }}/images/{{ member.avatar }}" class="bio-photo">
	<h4>    {{member.name}}</h4>
	<i>{{member.bio}}</i>
</div>
{% endfor %}


