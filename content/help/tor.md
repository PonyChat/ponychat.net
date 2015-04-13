+++
title = "Tor Access"
date = "2015-04-12T20:10:56-07:00"
+++

Our Tor gateway is back! It is now connected to an internal hub server directly
and now changes your vhost to reflect that you are using the Tor service.
For now the address for the hidden service is `dkkip7bcgrmjr2hg.onion`.

#### Usage in Weechat

Thanks much to the anonymous user who wrote [this
guide](http://pastebin.com/k8XHaABN), which I adapted into this tutorial.

Depending on what distribution of Linux you run, the process for installing Tor
will vary. However, for Debian or Ubuntu boxes, the process for installing and
setting up a basic Tor client is:

```
$ sudo apt-get update
$ sudo apt-get install tor
$ sudo service tor start
```

After that, open a user's IRC client as normal and instruct it to connect to
the Tor Socks5 proxy at `127.0.0.1:9050`. I will show an example with Weechat
(binary package `weechat` in most distributions) below.

After opening weechat, you need to add a Tor proxy:

```
/proxy add tor socks5 127.0.0.1 9050
```

Now, create a new server:

```
/server add PonyChat-Tor dkkip7bcgrmjr2hg.onion/6697
/set irc.server.PonyChat-Tor.ssl on
/set irc.server.PonyChat-Tor.ssl_verify off
```

The second line is needed because we use our main SSL certificate for Tor
access as well as general access.

Set the proxy as Tor:

```
/set irc.server.PonyChat-Tor.proxy "tor"
```

Now you need to define a user's username and password for SASL authentication,
otherwise a user's connection will not go through.

```
/set irc.server.PonyChat-Tor.sasl_username "a user's_Account_Name"
/set irc.server.PonyChat-Tor.sasl_password "5up3rs3kr1+p@$$w0rD"
```

Finally, connect to PonyChat over Tor:

```
/connect PonyChat-Tor
```

For other operating systems such as Windows or OSX, you might have to do
a little extra work, but there are many tutorials available for connecting to
Freenode over Tor that can be easily adapted for PonyChat. However, it
generally is the same process as above.

#### Technical Information

On connection to PonyChat over tor, a new service named Zuul will greet you
with all of the information it knows about you.

```
-- | tor/registered/mdlffinoar :is now your hidden host (set by
                               tetra.ponychat.net)
-- | Zuul (guardian@ponychat.net): Your host has been scrambled to
                                   tor/registered/mdlffinoar.
-- | Zuul (guardian@ponychat.net): Please use this anonymous hidden service
                                   with care.
-- | Zuul (guardian@ponychat.net): Here is what I know about you:
-- | Zuul (guardian@ponychat.net):    Nick:       xena1
-- | Zuul (guardian@ponychat.net):    User:       xena
-- | Zuul (guardian@ponychat.net):    Gecos:      xena
-- | Zuul (guardian@ponychat.net):    IP Address: 127.0.0.1
-- | Zuul (guardian@ponychat.net):    Account     Xena
-- | Zuul (guardian@ponychat.net):
-- | Zuul (guardian@ponychat.net): If you have been assigned a VHost you wish
                                   to use, please run /msg HostServ ON
```

A detailed report like this can always get gotten from Zuul by doing:

```
/msg Zuul INFO
```

The hashed cloak that is generated will be made up like this:

```
tor/registered/<hash of account name>
```

#### Channel Moderation Information

If a channel wishes to ban all tor users they may do so in one of a few ways:

The first way is to ban the mask `*!*@tor/registered/*`. This will act as
a catch-all for any user who does not have a vhost.
Another, better way is to use the extban system to ban the internal only hidden
server that tor users connect from. An example:

```
/mode #help +b $s:onion.ponychat.net
```

This will ban all users on the server onion.ponychat.net (the name of our tor
hidden service), disallowing any users connecting via tor from accessing your
channel.

