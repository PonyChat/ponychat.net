+++
title = "Webchat Troubleshooting"
date = "2015-04-16T20:10:56-07:00"
type = "help"
+++

PonyChat offers a webchat client using [LightIRC](http://www.lightirc.com/). 
For most people this will work fine. This page will help address the most 
common issues with LightIRC.

# LightIRC Shows "Get Flash Player"

LightIRC uses Flash to make a direct connection from your machine to PonyChat's 
servers. A common issue is it showing "Get Flash Player" and will look 
something like this:

![](/img/help/webchat/get.png)

There are two fixes to this:

1. Install Adobe Flash Player
2. Use KiwiIRC or Mibbit

## Install Adobe Flash Player

Click on the "get flash player" image.

You will get to a page that looks like this:

![](/img/help/webchat/install.png)

Click on Install and then follow the further directions. Restart your browser 
and you should be good to go!

## Use KiwiIRC or Mibbit

On the bottom of the page, we have a selection bar for other clients. At the 
time of this writing, we also support [KiwiIRC](http://kiwiirc.com) and 
[Mibbit](http://mibbit.com) HTML webchats.

![](/img/help/webchat/other.png)

### KiwiIRC

Click on the KiwiIRC link and you should be shown a screen that looks like 
this:

![](/img/help/webchat/kiwi.png)

Choose a nickname and a channel to join, then hit start.

### Mibbit

Click on the Mibbit link and you should be shown a screen that looks like this:

![](/img/help/webchat/mibbit.png)

Choose a nickname and hit connect.

# LightIRC shows Error 2030

LightIRC cannot make a connection to port 8430 on PonyChat's servers. LightIRC 
does this so it can make sure it has permission to connect to PonyChat. If you 
get this error please refresh the page. If it persists please try another one 
of our webchat options.
