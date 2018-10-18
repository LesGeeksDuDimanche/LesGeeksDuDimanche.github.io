---
title: Notes BDD - 12 juillet
date: 2015-07-13 21:06:54 Z
categories:
- notes
tags:
- formations
- distribution
- linux
- web
layout: post
modified: 
excerpt: "."
image:
  feature: 
comments: true
share: true
---

**Tech Web**
Docker vs chef

  [https://www.scriptrock.com/articles/docker-chef](https://www.scriptrock.com/articles/docker-chef)

 
xclip: copier coller en ligne de commande #grosgeek
Gulp Browser

     

**Distrib les bricodeurs**
Sourcer en loggant les appels apt-get install
/usr/local/bin/apt-get

          script puis executable
   
  #!/bin/bash
  # ^-- using /bin/bash rather than /bin/sh enables printf %q
   
  # Shell-quote the command to unambiguously present arguments even if it contains
  # newlines, spaces, etc.
  printf -v cmd '%q ' "${0##*/}" "$@"
   
  # Trim the trailing space
  cmd=${cmd%" "}
   
  # Log that command
  printf '%s\n' "$cmd" >> ~/install/paquets.sh
   
  # ...and run the real command.
  exec /usr/bin/apt-get "$@"

 
 
**Uberisation**

- Mailchimp
- Kanga
- BlablaCar des objets

 
**Formations**

  Human talk
  CNAM

 

