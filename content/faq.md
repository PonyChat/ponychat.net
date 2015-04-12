+++
title = "Frequently Asked Questions"
date = "2015-04-11T06:55:25-07:00"
+++
        <p><a href="#register-nick">How do I register my nickname?</a></p>
        <p><a href="#register-chan">How do I register a channel?</a></p>
        <p><a href="#basic-commands">What are some of the basic commands I can use?</a></p>
        <p><a href="#command-aliases">Are there any shorter ways to message network services?</a></p>
        <p><a href="#group">Can I have more than one nickname registered to my account?</a></p>
        <p><a href="#forgot-password">I forgot my password. How do I access to my account?</a></p>
        <p><a href="#in-channel-commands">How do I use in-channel commands?</a></p>
        <p><a href="#channel-ops">How do I add channel operators to my channel?</a></p>
        <p><a href="#channel-acls">How can I restrict what users are allowed in my channel?</a></p>
        <p><a href="#enforce">How do I prevent others from using my nick?</a></p>
        <p><a href="#vhost">I want one of those vanity host names. How do I get one?</a></p>
        <p><a href="#color-in-commands">Services keep telling me commands are unrecognized, and in-channel commands don't work. What's wrong?</a></p>
        <p><a href="#channel-modes">How do I use channel owner/admin mode? (~/!)</a></p>
        <p><a href="#botserv">How do I replace ChanServ with one of those bots I see everywhere?</a></p>
        <p><a href="#auto-identify">What identification methods do network services support?</a></p>
        <p><a href="#gameserv">How do I enable GameServ?</a></p>
        <p><a href="#groupserv">Is there an easy way to manage permissions for a group of users?</a></p>
        <p><a href="#anonymous">Can I connect with TOR or other anonymizers?</a></p>
        <p><a href="#embed">How do I put my PonyChat channel on my web page?</a></p>
        <p><a href="#contact">How can I contact PonyChat’s staff?</a></p>
        <p><a href="#channel-bans">Help! I got banned from a channel!</a></p>
        <p><a href="#keep-topic">When everyone leaves my channel, the topic disappears. How do I keep it?</a></p>
    <hr><a name="register-nick"></a><h3>How do I register my nickname?</h3><p>You may register your nickname with NickServ with the following command (do not include the brackets):</p>

<pre><code>/msg NickServ REGISTER &lt;password&gt; &lt;email_address&gt;
</code></pre>
<a name="register-chan"></a><h3>How do I register a channel?</h3><p>To register a channel, you must first create or log in to your network services account. While logged in, you may use the command:</p>

<pre><code>/msg ChanServ REGISTER &lt;channel&gt;
</code></pre>
<a name="basic-commands"></a><h3>What are some of the basic commands I can use?</h3><p>Do not include the &lt; or > shown in these examples when running the commands.</p>

<pre><code>/me
</code></pre>

<p>Perform an action/emote. For example:</p>

<pre><code>/me is best pony.
* Kabaka is best pony.

/nick &lt;new-nick&gt;
</code></pre>

<p>Change the name shown for you in the chat.</p>

<pre><code>/join &lt;#channel&gt;
</code></pre>

<p>Join a channel. Remember that on IRC, channel names typically begin with #.</p>

<pre><code>/part &lt;message&gt;
</code></pre>

<p>Leave a channel. Optionally, you may include a message.</p>

<pre><code>/quit &lt;message&gt;
</code></pre>

<p>Disconnect from the chat. Optionally, you may include a message.</p>

<pre><code>/query &lt;nick&gt;
</code></pre>

<p>Open a private chat with the specified user.</p>

<pre><code>/msg &lt;nick&gt; &lt;message&gt;
</code></pre>

<p>Send a message to the specified user. In most clients, this does not open a new tab/window.</p>

<pre><code>/ignore &lt;nick&gt;
</code></pre>

<p>Stop receiving messages from the specified user.</p>

<pre><code>/whois &lt;nick&gt;
</code></pre>

<p>Get information about the specified user, such as host name, idle time, and away status.</p>
<a name="command-aliases"></a><h3>Are there any shorter ways to message network services?</h3><p>We have command aliases for most network services. If your client permits their use, we strongly recommend using these aliases. Not only are they shorter, they also totally guarantee that your messages will reach the correct service, it if is available. These aliases are server-side, but your client may still override them and run its own commands!</p>
<dl>
<dt>NickServ</dt><dd>/ns</dd>
<dt>NickServ IDENTIFY</dt><dd>/identify</dd>
<dt>ChanServ</dt><dd>/cs</dd>
<dt>HostServ</dt><dd>/hs</dd>
<dt>BotServ</dt><dd>/bs</dd>
<dt>GameServ</dt><dd>/gs</dd>
<dt>MemoServ</dt><dd>/ms</dd>
</dl><a name="group"></a><h3>Can I have more than one nickname registered to my account?</h3><p>Yes. To register another nickname to your NickServ account, you must use the <code>GROUP</code> command. For example, if I want to group the nick "Pony" to my account, first I would ensure that I am logged in to network services, and then I would type the following commands:</p>

<pre><code>/nick Pony
/msg NickServ GROUP
</code></pre>

<p>At this point, if the nick "Pony" is not registered, it will be associated with my network services account. To remove a grouped nick, use the <code>UNGROUP</code> command. If I wanted to remove the grouped nick "Pony" I would type:</p>

<pre><code>/msg NickServ UNGROUP Pony
</code></pre>

<p>Alternatively, you may type the <code>UNGROUP</code> command without a nickname to un-group your current nickname from your account.</p>

<p>If you have already registered a nickname that you would like to add to another account, you will first need to drop the account registration on the nick you would like to group. For information on how to drop a nick registration, see:</p>

<pre><code>/msg NickServ HELP DROP
</code></pre>
<a name="forgot-password"></a><h3>I forgot my password. How do I access to my account?</h3><p>If you lose or forget your services account password, you can recover it without network staff intervention with the <code>SENDPASS</code> command:</p>

<pre><code>/msg NickServ SENDPASS &lt;nick&gt;
</code></pre>

<p>This command will send a password reset key to the email address associated with the account. Follow the instructions given by NickServ and outlined in the email to reset your password.</p>

<p>If you are not able to receive email at the address listed on the account, we will likely not be able to recover your account, as the email address is the means of verifying ownership. In the event we cannot verify the account is yours and you cannot remember the password, you will have to wait 90 days for that registration to expire. This is why it is very important that all accounts are registered with valid email addresses!</p>
<a name="in-channel-commands"></a><h3>How do I use in-channel commands?</h3><p>There are two ways to use in-channel commands: using the channel command prefix (default "!") or by starting messages with the name of the services bot that is in the channel. Most ChanServ commands are accessible via in-channel commands, as well as GameServ commands if GameServ is enabled.</p>

<p>For example, to set the topic in a channel wherein you have the +t flag, you could send either of the following messages (assuming the command prefix has not been changed with <code>SET PREFIX</code>):</p>

<pre><code>ChanServ: topic This is my new topic.
!topic This is my new topic.
</code></pre>

<p>If you have assigned a BotServ bot to your channel to stand in for ChanServ, you may say the bot's name instead. For example:</p>

<pre><code>Fluttershy: topic This is my topic.
</code></pre>

<p>(When using the service name in your message, you may include the colon, or a comma, or nothing at all.)</p>
<a name="channel-ops"></a><h3>How do I add channel operators to my channel?</h3><p>The most flexible way to manage channel operators and their permissions is with ChanServ's <code>FLAGS</code> system. For details on how this system works, please see</p>

<pre><code>/msg ChanServ HELP FLAGS
</code></pre>

<p>Alternatively, you can use the <code>ACCESS</code> system. This is a role-based system with predefined permissions templates. You can define your own roles or modify the existing ones if that would suit your needs. For information on using this system, please see:</p>

<pre><code>/msg ChanServ HELP ACCESS
/msg ChanServ HELP ROLE
</code></pre>
<a name="channel-acls"></a><h3>How can I restrict what users are allowed in my channel?</h3><p>There are several ways to restrict what users can join your channel, including IRCD- and services-side lists.</p>

<p>The most simplistic method of controlling access is with the channel mode +k. "K" is for key, which is analogous to a password. When a channel key is set with channel mode +k, joining users must supply the channel key in the /join command used to enter the channel. To set the key to "secret" on the channel #help, you would type:</p>

<pre><code>/mode #help +k secret
</code></pre>

<p>To join the #help channel after setting this key, users would need to type:</p>

<pre><code>/join #help secret
</code></pre>

<p>To remove the key from #help, you would unset the +k mode by typing:</p>

<pre><code>/mode #help -k
</code></pre>

<p>Channel keys have limited effectiveness; once a user has the key, key can give it to other users. If you require more specific control, the channel can be made invite-only by using the channel mode +i.</p>

<pre><code>/mode #help +i
</code></pre>

<p>With this mode set, users must be invited to join a channel before they can join. To invite the user Kabaka to #help, you would type:</p>

<pre><code>/invite #help Kabaka
</code></pre>

<p>(A channel does not have to be invite-only for the invite command to work.)</p>

<p>If a user wants to join an invite-only channel, they may request an invite by using the <code>KNOCK</code> command, as long as channel mode +p (private) is not active:</p>

<pre><code>/knock #help
</code></pre>

<p>It is possible to create exceptions so that some or many users do not require an invite to join an invite-only channel using channel mode +I. This mode works exactly like the channel ban (+b) and channel quiet (+q) modes: you may add an invite exceptions for host masks with wildcard (*) support (nick!user@host) and extended targets (such as $registered for all registered users, $a for account names [such as $a:Kabaka], and others — see <code>/quote help extban</code>).</p>

<p>For example, if you want the user identified by &#42;!Kabaka@&#42;.example.com to be exempt from invites in #help, you would type:</p>

<pre><code>/mode #help +I *!Kabaka@*.example.com
</code></pre>

<p>Network services can also be used to enforce channel access restrictions by using ChanServ's <code>RESTRICTED</code> option. To enable <code>RESTRICTED</code> for #help, you would type:</p>

<pre><code>/msg ChanServ SET RESTRICTED #help ON
</code></pre>

<p>Once <code>RESTRICTED</code> is activated, only users that have any <code>ACCESS</code> or <code>FLAGS</code> will be permitted to join (excluding <code>AKICK</code> and +b FLAG). For help using ChanServ <code>FLAGS</code> or <code>ACCESS</code>, you may see:</p>

<pre><code>/msg ChanServ HELP FLAGS
/msg ChanServ HELP ACCESS
</code></pre>

<p>To further simply access control, it is worth noting that GroupServ groups are supported by the <code>FLAGS</code> and <code>ACCESS</code> commands. For help with GroupServ, see:</p>

<pre><code>/msg GroupServ HELP
</code></pre>
<a name="enforce"></a><h3>How do I prevent others from using my nick?</h3><p>You must first register your nick with NickServ. Once you have done this, you must activate the <code>ENFORCE</code> flag by typing:</p>

<pre><code>/msg NickServ SET ENFORCE ON
</code></pre>

<p>Once enabled, when a user (including you) sets his or her nick to a nick held by your account, he or she has 30 seconds to log in to network services before network services forcibly changes the user's nick to something else.</p>

<p>In some cases, it may be necessary for network services to create a pseudo-user to hold your nick and prevent others from repeatedly using it. If this happens, you will need to use NickServ's <code>RELEASE</code> command to remove the enforcing pseudo-user.</p>

<p>If you are logged in to the NickServ account that holds the nick you wish to release, you only need to include the target nick in the command. For example, if you want to release the nick Kabaka while logged into your account, you would type:</p>

<pre><code>/msg NickServ RELEASE Kabaka
</code></pre>

<p>If you are not logged in to the account, include your password. If your password is foo, you would type:</p>

<pre><code>/msg NickServ RELEASE Kabaka foo
</code></pre>
<a name="vhost"></a><h3>I want one of those vanity host names. How do I get one?</h3><p>To get a "vhost" you must use our HostServ service. You may request a vhost with the <code>REQUEST</code> command:</p>

<pre><code>/msg HostServ REQUEST &lt;vhost&gt;
</code></pre>

<p><em>Vhosts may not contain domain names which exist or appear to exist unless you can verify ownership of that domain.</em></p>
<a name="color-in-commands"></a><h3>Services keep telling me commands are unrecognized, and in-channel commands don't work. What's wrong?</h3><p>Chances are, you are sending messages with formatting applied. This can include colorized messages, messages that are bold, underscored, italicized, or inverted.</p>

<p>Network services does not remove the formatting data from incoming messages — to do so would be prohibitively resource-intensive, especially during peak usage. In order to use network services, you need to temporarily disable your message formatting.</p>

<p>If you are not sending messages which have formatting applied, and services are still giving you this output, please contact an operator in #help.</p>

<a name="channel-modes"></a><h3>How do I use channel owner/admin mode? (~/!)</h3>
PonyChat has recently enabled support for owner and admin mode. To use this 
a channel founder (`+F` in ChanServ) must set flag `+q` on anyone who should 
have the channel owner flag (`~`) and `+a` for anyone who should have the 
channel admin flag (`!`).

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


<a name="botserv"></a><h3>How do I replace ChanServ with one of those bots I see everywhere?</h3><p>We offer several BotServ bots which can act as a replacement for ChanServ in your channel. These bots are still part of network services, and therefore support the same commands and features as ChanServ, with the addition of the <code>SAY</code> and <code>ACT</code> commands.</p>

<p>To assign a BotServ bot to your channel, you may use the following command (without the brackets):</p>

<pre><code>/msg BotServ ASSIGN &lt;channel&gt; &lt;nick&gt;
</code></pre>

<p>A list of the possible values for the nick option may be found by typing:</p>

<pre><code>/msg BotServ BOTLIST
</code></pre>
<a name="auto-identify"></a><h3>What identification methods do network services support?</h3><p>Our network services support quite a few methods of identification during connection. For instructions using any of these methods, please consult your client's documentation. Some authentication methods may not be supported by your client.</p>

<ul>
<li>Account password as server password</li>
<li><code>/msg NickServ IDENTIFY [account_name] &lt;password&gt;</code></li>
<li><code>/identify &lt;password&gt;</code></li>
<li>Plain-text SASL</li>
<li>Client certificate fingerprint (CERTFP — see <code>/msg NickServ HELP CERT</code>)</li>
</ul>
<a name="gameserv"></a><h3>How do I enable GameServ?</h3><p>To enable GameServ for your channel or any channel in which you have the +s flag, use ChanServ's <code>SET GAMESERV</code>.</p>

<pre><code>SET &lt;channel&gt; GAMESERV ALL|OPS|OFF
</code></pre>

<p>For example, if I want to enable GameServ for all users in #ponychat, I might type:</p>

<pre><code>/msg ChanServ SET #ponychat GAMESERV ALL
</code></pre>

<p>The <code>SET</code> command may also be used as an in-channel command. For information on using in-channel commands, <a href="#in-channel-commands">click here</a>.</p>
<a name="groupserv"></a><h3>Is there an easy way to manage permissions for a group of users?</h3><p>We offer a service known as GroupServ which facilitates the management of groups of IRC users.</p>

<p>With GroupServ, you can grant channel flags or access to the group and then add users to the group rather than set flags for each user. This is helpful when a community has multiple channels whereon their staff requires flags in each channel.</p>

<p>GroupServ should not be confused with NickServ groups, which are entirely unrelated. NickServ <code>GROUP</code> allows users to hold multiple nicks under one NickServ account, whereas GroupServ groups allow multiple NickServ accounts to be a member of a "group."</p>

<p>Group names must begin with an exclamation mark (!) much like IRC channels begin with a hash or pound sign (#).</p>

<p>To register a new group, use GroupServ's <code>REGISTER</code> command. For example, to register a group called "!bronies" you would type:</p>

<pre><code>/msg GroupServ REGISTER !bronies
</code></pre>

<p>GroupServ groups can be open or closed. Open groups permit any users to join simply by using GroupServ's <code>JOIN</code> command. To set a group as open, a group member with the GroupServ +s flag in the group would type:</p>

<pre><code>/msg GroupServ SET !bronies OPEN ON
</code></pre>

<p>To set the group to closed, simply type <code>OFF</code> instead of <code>ON</code>.</p>

<p>If the !bronies group is open, a user could type:</p>

<pre><code>/msg GroupServ JOIN !bronies
</code></pre>

<p>Groups are almost as flexible as channels. Users can be given permissions within the group to perform various tasks or gain access to various features, such as the +s flag mentioned above. The GroupServ <code>FLAGS</code> system works just like ChanServ <code>FLAGS</code>. Users planning to use GroupServ should review the output of:</p>

<pre><code>/msg GroupServ HELP FLAGS
</code></pre>

<p>There are many possible advantages to GroupServ groups. As mentioned before, it is possible to assign ChanServ <code>FLAGS</code> to GroupServ groups. This is done by assigning the flags to the group name rather than the nicks within the group. For example, if our fictional !bronies group wanted to have all of their members automatically voice in #bronies-group, a #bronies-group operator might type:</p>

<pre><code>/msg ChanServ FLAGS #bronies-group !bronies +Vv
</code></pre>

<p>Another potential use is vanity host names ("vhosts"). For example, the staff of some communities sometimes request a vhost featuring their web site's domain name. For larger communities, this is cumbersome, both for users and the staff that have to review and approve each request.</p>

<p>GroupServ groups can have one or more exclusive vhosts available to members to use. To accomplish this, a GroupServ group administrator must contact network staff in #help and ask for a vhost to be created for his or her group. Host names are subject to staff approval.</p>

<p>For members to activate a GroupServ vhost, they may use HostServ's <code>TAKE</code> command. For instance, if the vhost is "ponychat.net":</p>

<pre><code>/msg HostServ TAKE ponychat.net
</code></pre>

<p>You may use the +v GroupServ flag to allow members of your group to take GroupServ vhosts. To automatically permit vhost activation for all new group members, you would use GroupServ's <code>SET JOINFLAGS</code> command:</p>

<pre><code>/msg GroupServ SET !bronies JOINFLAGS +v
</code></pre>

<p>Using this command will overwrite existing <code>JOINFLAGS</code>, not modify them. To check your group's JOINFLAGS, use GroupServ's INFO command.</p>

<p>If you have any questions regarding the use of GroupServ, remember that you can use</p>

<pre><code>/msg GroupServ HELP [command]
</code></pre>

<p>at any time to access the help files hosted by network services, or you may contact network staff in #help.</p>
<a name="anonymous"></a><h3>Can I connect with TOR or other anonymizers?</h3><p>You may not connect to PonyChat open proxies or most other anonymization schemes, as these are subject to extremely high amounts of abuse. <em>Private</em> proxies are allowed under most circumstances.</p>

<p>For TOR users, we offer a multi-homed hidden service. Our hidden service address is <a href="irc://oabfdwrgyjxo7zn7.onion/" title="PonyChat TOR Hidden Service">oabfdwrgyjxo7zn7.onion</a>. It may be reached on any of the standard ports, including via SSL. <strong>In order to connect to the TOR hidden service, you <em>must</em> authenticate using SASL.</strong> For information on how to do this, please consult your IRC client's documentation. Users without a <a href="#vhost">vanity host name</a> will appear as connecting from "tor.sasl.user".</p>

<p>Connections from TOR exit nodes will not be accepted under any circumstances.</p>

<p><em>At this time, it is not possible to register your account while using TOR. You must first connect to the IRC network through some other means to <a href="#register-nick">complete registration</a>.</em></p>
<a name="embed"></a><h3>How do I put my PonyChat channel on my web page?</h3><p><a href="/webchat/creator/">Use our web chat embed creator by clicking here</a>.</p>
<a name="contact"></a><h3>How can I contact PonyChat’s staff?</h3><p>You can always find PonyChat's staff in the #help channel.</p>

<p>You may also contact PonyChat staff regarding bans, problems connecting, complains, compliments, questions, or just to say "hello" via email at <a href="mailto:staff@ponychat.net">staff@ponychat.net</a>. Emails are typically answered within 24 hours.</p>
<a name="channel-bans"></a><h3>Help! I got banned from a channel!</h3><p>We do not interfere in channel management.</p>

<p>Do not ask us for any assistance regarding channel bans (including bans, quiets, devoicing, or any other means of reducing your channel privileges). Instead, speak to the staff in the channel, or send a MemoServ memo.</p>

<p>To contact a user directly, you may use the <code>QUERY</code> command:</p>

<pre><code>/query &lt;nick&gt;
</code></pre>
<a name="keep-topic"></a><h3>When everyone leaves my channel, the topic disappears. How do I keep it?</h3><p>There are two settings which are useful for preserving a channel topic. Both of these require that you have <a href="#register-chan">registered your channel with network services</a>.</p>

<p>The first option is ChanServ's <code>KEEPTOPIC</code> setting. This setting will simply restore the old topic if the channel has become empty, but makes no effort to police topic changes.</p>

<p>The second option is ChanServ's <code>TOPICLOCK</code> setting. This setting prevents users without the <code>+t</code> flag from making changes to the topic. It requires the <code>KEEPTOPIC</code> setting and will activate it when necessary.</p>

<p>For more information, please see <code>/msg ChanServ HELP SET KEEPTOPIC</code> and <code>/msg ChanServ HELP SET TOPICLOCK</code>.</p>
        </div>
           </div>

