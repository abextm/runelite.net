(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[115],{705:function(n,e){n.exports={title:"1.6.1 Release",description:"Boss hiscores and bug fixes",author:"Adam",body:'<p>The hiscore plugin now supports boss hiscores and shows it in a panel beneath\nthe minigame hiscores.</p>\n<p><img src="/img/blog/1.6.1-Release/bosshiscores.png" alt="bosshiscores"></p>\n<p>The <code>!kc</code> command remains as-is as it updates kill counts in real-time as\nopposed to the boss hiscores which require relogging.</p>\n<p>The camera plugin now has an option to add <code>Look South</code>, <code>Look East</code>, and <code>Look West</code> to the compass.</p>\n<p><img src="/img/blog/1.6.1-Release/compass.png" alt="compasslook"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The new tag-tab button has been moved below the tag-tab list to make room\nfor the new equipment button</li>\n<li>The cannon plugin now has a configurable threshold for when it will warn you\nfor having low ammo</li>\n<li>Add a shift click abort GE offer option to menu swapper</li>\n<li>Add a menu swap for GE offer withdraw mode</li>\n<li>Add an option to show the total value of Chambers of Xeric loot to the raids\nplugin</li>\n<li>Fix slayer plugin to recognize tasks assigned to the Forthos Dungeon</li>\n<li>Fix clipping of 2005 interface style minimap</li>\n<li>Fix several more issues with the Kourend library plugin which cause it to\nreset at the wrong time and incorrectly mark objects when world hopping</li>\n<li>Add the option to Lookup players on your ignore list</li>\n<li>Add potions to the item identification plugin</li>\n<li>Support chat command clear line/word keybinds in pm input dialog</li>\n<li>Fix clan chat ranks not showing up if the clan chat name is recolored</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<pre><code>15987632 (2):\n      client: add VisibleForExternalPlugins annotation\n      client: add getVar methods for external plugins\n\nAdam (8):\n      cannon plugin: make ammo notification threshold configurable\n      menu swapper: add shift click abort ge offer\n      clientloader: throw an exception when unable to peek first entry\n      cache: add param config\n      camera plugin: reposition startUp/shutdown members\n      camera plugin: add Look South/East/West option to compass\n      hiscore plugin: add boss hiscores\n      raids plugin: add option to show loot value\n\nAlexsuperfly (3):\n      woodcutting: account for plane change with despawn events\n      raids: allow \'unknown\' to evaluate to both unknown types\n      woodcutting: create maple timer for miscellania region\n\nBlackberry0Pie (1):\n      slayer plugin: add Forthos Dungeon\n\nCaleb Waters (1):\n      skill calc: change arrow shaft xp to be per shaft\n\nGamma91 (1):\n      hiscore skill: fix spelling of commander zilyana\n\nHydrox6 (7):\n      interfacestyles: fix 2005 fixed mode minimap\'s right side\n      kourendlibrary: clear tracked NPCs when changing worlds\n      chat message manager: make sender recoloring use messageNode\n      kourendlibrary: only reset if layout changes when complete\n      kourendlibrary: fix panel reloading not being done on the swing thread\n      clues: add Lava battlestaff (or) to the Trollheim emote clue\n      hiscore api: add Callisto and Cerberus\n\nJason O\'Neill (1):\n      item stats: fix White Tree Fruit stats\n\nMax Weber (5):\n      config: Fix PluginHub scrollbar\n      config: Work around JDK-8079640\n\nMa\xebl Cournoyer-Michel (1):\n      Add HP for level 19 and 22 Guards.\n\nRami (1):\n      hiscore plugin: add Lookup to ignore list\n\nRami-J (1):\n      menu swapper: add support for ge offer withdraw\n\nSam Edelsten (2):\n      add foods to skill calculator\n      add vscode files to gitignore\n\nTheStonedTurtle (1):\n      loottracker plugin: Add Loot Received event\n\nZachary Waller (1):\n      item identification: add potions\n\ndekvall (2):\n      xp tracker: don\'t unpause on failed login\n      chatcommands: support keybinds in pms\n</code></pre>\n',image:"/img/blog/1.6.1-Release/bosshiscores.png"}}}]);
//# sourceMappingURL=115.3a140811.chunk.js.map