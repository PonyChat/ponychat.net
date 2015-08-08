+++
title = "HostServ Help"
date = "2015-08-03T20:10:56-07:00"
type = "help"
+++

Basic Requesting
----------------

Please be sure to read the below vhost policy before requesting a vhost.

To request a vhost, type in the following:

```
/msg HostServ REQUEST vhost.goes.here
```

where `vhost.goes.here` is the vhost you want to request.

The Vhost Policy
----------------

1. All vhosts must contain at least one letter or character.
2. No vhost may be a valid domain name that is not owned by the person 
   requesting it. For example if you own `foo.com`, you can request it to be 
   your vhost after proving it (see below). Otherwise vhost requests that are 
   real domain names will be rejected.
3. The vhost system may not be used for ban evasion.
4. Requested vhosts may be rejected for resembling another user's vhost.
5. Requested vhosts may not contain an IP address (v4 or v6).
6. The vhost system may not be used to harass other users.
7. A vhost can only be chaned 30 days after the previous vhost change.
8. A vhost may not be constructed as to confuse people for it being a normal
   cloaked hostmask.

PonyChat staff reserves the right to reject, cancel or deny any access to th 
vhost system on any account for any reason, stated or not.

Proving Domain Ownership
------------------------

1. Email `staff@ponychat.net` from a superuser address at that exact domain you 
   are requesting.
2. Set a page at route `/ponychat.txt` saying you are allowing the account name 
   to use that domain as a vhost on PonyChat.
3. Set a DNS TXT record saying that you are allowing the account name to use 
   that domain as a vhost on PonyChat.

At this time we are not allowing `.onion` addresses as vhosts.

Examples of Forbidden Vhosts
----------------------------

- `vhost.goes.here` -- example vhost
- `ponychat.net` -- reserved for staff use
- `cntrlt-68-34-358-99.ponynet.equ` -- Possibly confusing as a normal cloaked hostmask
- `foobang.is.a.bad.chanop` -- Harassment via vhost
