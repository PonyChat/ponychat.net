+++
date = "2016-07-30T07:38:45-07:00"
title = "Hosted BNC Availability"
+++

About a year ago, I announced the bnc beta program. It has worked, most of the time. There are core problems in the server-side software that we used that we could not work around. We will be sunsetting it in a few weeks after all of its current users have been migrated to our new hosted bouncer.

It is based on [ZNC](http://znc.in) and our automation for this is [open source](https://github.com/PonyChat/docker-hosted-znc) under the Creative Commons Zero License.

Usage is very basic:

1. Sign up for a NickServ account
2. Connect to `bnc.ponychat.net` on SSL port `6697` with a password formatted like this: `nickservusername:nickservpassword`. For example if your username is `AzureDiamond` and your password is `hunter2`, you would enter your password in as follows: `AzureDiamond:hunter2`
3. There is no step 3

This will work with every client everywhere, provided it can support doing SSL connections. We do not currently support webpanel access or access to the bouncer over an insecure connection (but are working on these).

Please let us know what you think about this service!

-- Xena
