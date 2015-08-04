+++
date = "2015-08-03T07:38:45-07:00"
title = "Hosted BNC Beta Availability"
+++

Over the last few months a lot of research and development has been done into 
how the services that PonyChat provides can be more convenient and easy to 
access for everyone. One thing that came up time and time again was a way for 
people to stay connected to PonyChat even when they were away from their 
keyboard or the like.

A lot of research has been done, and we believe we have a solution by the name 
of [Shout](http://shout-irc.com/). We also have a simple
[web interface](https://bnc-signup.ponychat.net) for signing up for an account 
on it once you get accepted into the beta program.

[![](https://i.imgur.com/KXFrRQZl.png)](https://i.imgur.com/KXFrRQZ.png)

The bouncer server `moondancer.ponychat.net` is running CoreOS and all services 
(Shout, the user request panel, etc) are all running inside containers. Our 
eventual goal is to have every PonyChat service served like this. Consider this 
our test of the future of production cluster management.

Join us in [`#bnc`](/webchat?autojoin=bnc) to request getting on the list!

-- Xena
