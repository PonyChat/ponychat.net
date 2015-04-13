+++
date = "2015-04-11T20:10:56-07:00"
title = "Recent Upgrades to PonyChat"
+++

Hello all,

Lots of things have been changing over here at PonyChat HQ and here is the
promised post explaining everything we have changed.

<!--more-->

## New Site

As you can see, we have done a complete overhaul of our website using a static
site generator named [Hugo](http://gohugo.io). We don't use a lot of advanced
features in it yet, but we plan to be poking at it and making this site a lot
better as time goes on.

{{< alert body="We are aware that the changeover to this new site has caused features to be lost. We are working on a way to get them back. Please have patience and we will get this done as smoothly and quickly as possible!" >}}

## New Servers

As I'm sure you all have noticed, our longtime nodes fluttershy, applejack and
pinkiepie no longer are a part of the PonyChat network. Before we deprovisioned
them they each had over two years of continuous uptime. As a side effect of
this we have temporarily disabled IdleRPG as we search for a better way to
deploy it across the new servers.

The new servers are named after the Dazzlings from My Little Pony: Friendship
is Magic: Equestria Girls: Rainbow Rocks.

| Server Name                 | Server Location    |
|:--------------------------- |:------------------ |
| `adagiodazzle.ponychat.net` | San Francisco, USA |
| `ariablaze.ponychat.net`    | Singapore          |
| `sonatadusk.ponychat.net`   | London, UK         |

They are all running CentOS 7 and have been able to take the punishment of the
new season airing with minimal to no impact on the systems performance.

## New Features

As a result of getting new servers and upgrading the IRC daemon on them, we are
proud to introduce the following new features on PonyChat:

- Denoted channel admin and founder modes
- Return of Tor access
- Return of IPV6 access
- Various usability fixes

### Denoted channel admin and founder modes

For a long time, people have requested that PonyChat add or enable
UnrealIRCd-style founder and channel admin modes. Until recently our IRC daemon
was unable to support these modes and we had disabled them. With the new
version of the IRC daemon active, we can now allow anyone to use them.

#### To use founder mode

If you are a channel founder for a channel in ChanServ, you can give yourself
or another person denoted founder on a channel as following:

```
/msg ChanServ FLAGS #channel <Person> +qO
```

For an example:

```
/msg ChanServ FLAGS #help Xena +qO
```

Once you have founder mode in a channel, you can give other people it using the
FLAGS command above, or manually give it out using `/mode #channel +y Person`.

#### To use admin mode

If you are a channel founder for a channel in ChanServ, you can give yourself
or another person denoted admin on a channel as following:

```
/msg ChanServ FLAGS #channel <Person> +aO
```

For an example:

```
/msg ChanServ FLAGS #help Xena +aO
```

Once you have admin or founder mode in a channel, you can give other people it
using the FLAGS command above, or manually give it out using `/mode #channel +a
Person`.

### Return of Tor access

Our Tor gateway is back! It is now connected to an internal hub server directly
and now changes your vhost to reflect that you are using the Tor service.
For now the address for the hidden service is `dkkip7bcgrmjr2hg.onion`. Below
I have pasted a brief usage tutorial out of my personal wiki.

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

### IPv6 Support Returns

Our new nodes all have IPv6 support and will prefer using it if possible. If
you have trouble with your IPv6 stack, please try connecting to
`irc.ipv4.ponychat.net` instead.

### Various Usability Fixes

- People connecting via web clients now get user mode `+W` and have an extra
line added to a WHOIS query showing they are connected via a web client
  - [c3d0ff4](https://github.com/Elemental-IRCd/elemental-ircd/commit/c3d0ff4c5a39c4a13ee77ab31f0800da07164bf8)
- Treat ban/quiet/invite exception/ban exception lists separately.
  Before these were all treated as one big list and channels with decently
  large lists were running into very subtle issues as to why they couldn't add
  more bans.
  - [5ba9c76](https://github.com/Elemental-IRCd/elemental-ircd/commit/5ba9c76d224afac877d9500d6ac1eb8f2bddd076)
- Support for some incredibly archaic and insecure cryptography methods were
removed.
- DH-AES and DH-BLOWFISH support were added back to the list of available sasl
authentication types.

---

Overall, these are some very exciting changes and will barely scratch the
surface in the weeks and months to come as we open up ideas we have been
incubating for a very long time.

Pony on everypony!

Xena
