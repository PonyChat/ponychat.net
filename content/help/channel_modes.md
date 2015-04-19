+++
title = "Channel Modes"
date = "2015-04-17T20:10:56-07:00"
type = "help"
+++

<div id="modes">
<p>
Here you will find the various channel modes we offer on Ponychat.
<br>

<i>Note: The modes with a lighter color are only available to the network staff.</i>
</p>

<br>
<h3>Modes Without Parameters</h3>
<table>
<thead>
<tr>
<th width="80px">Mode</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr><td class="mode">+n</td><td>No external messages.  Only channel members may talk in the channel.</td></tr>
<tr><td class="mode">+t</td><td>Ops Topic.  Only opped (+o) users may set the topic.</td></tr>
<tr><td class="mode">+s</td><td>Secret.  Channel will not be shown in /whois and /list etc.</td></tr>
<tr><td class="mode">+p</td><td>Private.  Disables /knock to the channel.</td></tr>
<tr><td class="mode">+m</td><td>Moderated.  Only opped/voiced users may talk in channel.</td></tr>
<tr><td class="mode">+i</td><td>Invite only.  Users need to be invited or match a +I to join the channel.</td></tr>
<tr><td class="mode">+r</td><td>Registered users only.  Only users identified to services may join.</td></tr>
<tr><td class="mode">+c</td><td>No color.  All color codes in messages are stripped.</td></tr>
<tr><td class="mode">+d</td><td>No nick changes. People on the channel will not be able to change nick.</td></tr>
<tr><td class="mode">+g</td><td>Free invite.  Everyone may invite users.  Significantly weakens +i control.</td></tr>
<tr><td class="mode">+z</td><td>Op moderated.  Messages blocked by +m, +b and +q are instead sent to ops.</td></tr>
<tr><td class="oper">+L</td><td>Large ban list.  Increase maximum number of +beIq entries.</td></tr>
<tr><td class="oper">+P</td><td>Permanent.  Channel does not disappear when empty.</td></tr>
<tr><td class="mode">+F</td><td>Free target.  Anyone may set forwards to this (otherwise ops are necessary).</td></tr>
<tr><td class="mode">+Q</td><td>Disable forward.  Users cannot be forwarded to the channel (however, new forwards can still be set subject to +F).</td></tr>
<tr><td class="mode">+C</td><td>Disable CTCP. All CTCP messages to the channel, except ACTION, are disallowed.</td></tr>
<tr><td class="mode">+D</td><td>Disable CTCP ACTION. All CTCP ACTIONs to the channel will be blocked.</td></tr>
<tr><td class="mode">+T</td><td>Disable notice. All notices to the channel are disallowed.</td></tr>
<tr><td class="mode">+E</td><td>No kicks. Chanops will not be able to use /kick on this channel.</td></tr>
<tr><td class="mode">+G</td><td>Block messages in all caps. Messages that are more than 50% capital letters will be blocked. Messages shorter than 10 characters are ignored.</td></tr>
<tr><td class="mode">+J</td><td>Prevent automatic rejoin on kick. Users will not be able to rejoin immediately after being kicked.</td></tr>
<tr><td class="mode">+K</td><td>No repeat messages. Messages that are the same as the last message sent to the channel will be blocked.</td></tr>
<tr><td class="mode">+S</td><td>SSL only channel. Only clients connected via SSL may join.</td></tr>
</tbody>
</table>

<br>
<br>
<h3>Modes With Parameters</h3>
<table>
<thead>
<tr>
<th width="80px">Mode</th>
<th width="60%">Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr><td class="mode">+f</td><td>Forward.  Forwards users who cannot join because of +i, +j, +l or +r.</td><td>/mode #channel +f #channel2</td></tr>
<tr><td class="mode">+j</td><td>Join throttle.  Limits number of joins to the channel per time.</td><td>/mode #channel +j count:time</td></tr>
<tr><td class="mode">+k</td><td>Key.  Requires users to issue /join #channel KEY to join.</td><td>/mode #channel +k key</td></tr>
<tr><td class="mode">+l</td><td>Limit.  Impose a maximum number of LIMIT people in the channel.</td><td>/mode #channel +l limit</td></tr>
<tr><td class="mode">+v</td><td>Voice.  Allows a user to talk in a +m channel.  Noted by +nick.</td><td>/mode #channel +v nick</td></tr>
<tr><td class="mode">+h</td><td>Halfop.  Grants channel half operator status.</td><td>/mode #channel +h nick</td></tr>
<tr><td class="mode">+o</td><td>Op.  Grants channel operator status.</td><td>/mode #channel +o nick</td></tr>
<tr><td class="mode">+a</td><td>Admin.  Grants channel administrator status.</td><td>/mode #channel +a nick</td></tr>
<tr><td class="mode">+y</td><td>Owner. Grants channel owner status.</td><td>/mode #channel +y nick</td></tr>
<tr><td class="mode">+b</td><td>Ban.  Prevents a user from entering the channel, and from sending or changing nick if they are on it, based on a nick!ident@host match.</td><td>/mode #channel +b nick!user@host</td></tr>
<tr><td class="mode">+q</td><td>Quiet.  Prevents a user from sending to the channel or changing nick, based on a nick!ident@host match.</td><td>/mode #channel +q nick!user@host</td></tr>
<tr><td class="mode">+e</td><td>Exempt.  Allows a user to join a channel and send to it even if they are banned (+b) or quieted (+q), based on a nick!ident@host match.</td><td>/mode #channel +e nick!user@host</td></tr>
<tr><td class="mode">+I</td><td>Invite Exempt.  Allows a user to join a +i channel without an invite, based on a nick!user@host match.</td><td>/mode #channel +I nick!user@host</td></tr>
</tbody>
</table>
</div>
