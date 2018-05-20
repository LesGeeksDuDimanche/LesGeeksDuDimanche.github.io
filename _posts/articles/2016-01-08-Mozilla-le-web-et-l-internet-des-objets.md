---
title: Chirimen, l'IOT de Mozilla
date: 2016-01-08 11:06:54 Z
categories:
- articles
tags:
- IOT
- Web
- OpenSource
layout: post
modified: 
excerpt: Hello Real world
image:
  feature: chirimenTissu.jpg
comments: true
share: true
---

## Du Mozilla dans ton objet connecté

Nommé d'après un tissu japonais servant à faire les Kimono traditionnels, Mozilla lance sa plateforme open hardware. 

Equipé du Firefox OS, il s'agit d'un petit ordinateur, avec 1G de ram, 1G de mémoire flash, un port micro USB, un port USB, HDMI... Le prix devrait être en dessous de [50$](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS/Board_guide/CHIRIMEN).

<img src="{{ site.url }}/images/chirimen_2.gif" alt="Chirimen" style="width: 50%;"/>

##L'IOT pour les développeurs Web

Conçu par MozillaFactory.org au japon, le projet vise de permettre aux développeurs web de s'essayer à l'embarqué et de créer des objets connectés.
{% highlight html %}
<!doctype html>
<html lang="en" dir="ltr">
<head>
    <title>CHIRIMEN example - Led</title>
    <script type="text/javascript" src="gpio.js"></script>
    <script type="text/javascript">
        var v = 0;
        GPIO.getPort(196).then(
          function(port) {
            setInterval(toggleLight, 1000, port);
          }
        );
        function toggleLight(port){
          v = v ? 0 : 1;
          port.write(v);
        }
    </script>
</head>
<body>
</body>
</html>
{% endhighlight %}

Bien entendu, l'ensemble du code, des plans, du processus de fabrication seront documentés et open source. La date de lancement n'est pas encore annoncée.


