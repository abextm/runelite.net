(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[48],{638:function(n,e){n.exports={title:"1.4.3 Release",description:"Blast mine plugin, chat highlights and notifications, and resizable infoboxes",author:"Adam",body:'<p>A blast mine plugin was added which keeps track of lit dynamite charges, as well\nas which stage the rock is in.</p>\n<p><img src="/img/blog/1.4.3-Release/blastmine.png" alt="blastmine"></p>\n<p>A chat notifications plugin was added which can underscore your name when spoken\nin public chat, as well as optionally send you notifications for trade, duel,\nand other chat messages.</p>\n<p><img src="/img/blog/1.4.3-Release/chatnotif.png" alt="chatnotif"></p>\n<p><img src="/img/blog/1.4.3-Release/chatnotif2.png" alt="chatnotif2"></p>\n<p>A Crystal Math Labs plugin was added which, when enabled, automatically updates\nyour stats on CML whenever you log out.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>ctrl+w and backspace can now be used to delete the last word and the entire\nline from the chatbox input, respectively</li>\n<li>Add public chat friend name color in chat color config</li>\n<li>The boosts plugin can now notify you when your boost gets low</li>\n<li>Add Isafdar and Jatizso fishing spots to fishing plugin</li>\n<li>Remove \'Actions left\' and \'Xp per hour\' from Xp Globes when Xp Tracker is disabled</li>\n<li>Add fungicide spray to item stats plugin</li>\n<li>The ground items plugin can now grey hidden items from the take menu</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Adam (13):\n      xtea plugin: batch xteas on gamestate change event\n      Remove map region changed event\n      Add gson to dependency management\n      Update gson to 2.8.5\n      http-service: import spring boot dependencies in dependency management\n      travis: remove old secrets\n      travis: remove old discord notification [ci skip]\n      Add public chat friend name color in chat color config\n      Fix genie cryptic clue to display proper requirements\n      overlay renderer: bound overlays position to viewport at render time instead of at config load time\n      runelite-api: add setVar for setting varclientstr\n      item controller: expose bulk item prices\n      chat commands: alow clearing words and chat with ctrl w/backspace\n\nArman (1):\n      Adds notification when boost gets low\n\nChris Jimenez (1):\n      Small contributing.md clarification\n\nHydrox6 (7):\n      Fix &quot;Clan Channel Name&quot; typo, fix capitalisation (#3671)\n      Make Color config options show their colour instead of &quot;Pick a color&quot; (#3583)\n      [chat-color] Add support for Public Chat from Mods\n      Clean up the Examine Colour loading\n      Fix JColorChooser text not updating properly\n      Fix NMZ points overlay appearing in the KBD instance lair\n      runelite-client: add chat notifications plugin\n\nJordan Atwood (1):\n      Add Jatizso fishing spots to fishing plugin\n\nMarshall Briggs (1):\n      Remove \'Actions left\' and \'Xp per hour\' from Xp Globes when Xp Tracker is disabled\n\nMax Weber (6):\n      runelite-api: Correct actor documentation\n      runelite-client: Don\'t fail on invalid config values.\n      runelite-client: add detached camera devtool\n      runelite-client: Make OverlayManager thread safe\n      runelite-client: Use an ArrayList to store overlays\n      runelite-client: Allow new screenmarkers to be created\n\nMitchell Kovacs (4):\n      Reworked Jewellery Charge to item charge.\n      item charges: add charge warning threshold color configuration\n      Moved the watering can overlay from tithe farming plugin to item charge plugin.\n      Add counter for fungicide spray #3727\n\nSieBrum (1):\n      Add CrystalMathLabs plugin\n\nTim Granata (1):\n      Add Isafdar dense forest agility boxes north of Tyras Camp (#3731)\n\nTimmy-Jim (2):\n      Move BAKED_POTATO to 4 HP healing food (#3724)\n      Add Isafdar fishing spots\n\nTomas Slusny (14):\n      Remove auto-expanding from PanelComponent\n      Show GE and HA only when showing both prices\n      Add mappings for isTradeable to ItemComposition\n      Add option to always draw untradeable items\n      Remove 4th invalid state from ground boxes\n      Add full item name clickboxes\n      Add highlight &gt; value, merge hide &lt; ge and ha\n      Split OverlayRenderer logic to OverlayManager\n      Make plugins work with new OverlayManager\n      Add support for wrapping to PanelComponent\n      Add support for preferred location to Panel\n      Change InfoBoxOverlay to use PanelComponent\n      Change the default size of infoboxes to be smaller\n      Add support for configurable infobox size\n\nUnmoon (1):\n      Add blast mine plugin\n\nWooxSolo (1):\n      Fix demonic gorilla overlay position on fixed screen\n\ndrivfe (1):\n      Fix combined action slot not updating when an input field was changed\n</code></pre>\n',image:"/img/blog/1.4.3-Release/blastmine.png"}}}]);
//# sourceMappingURL=48.2c426af9.chunk.js.map