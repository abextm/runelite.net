(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[119],{709:function(e,n){e.exports={title:"1.6.6 Release",description:"Pickpocket and Nightmare loot tracking, light sources for clues, and more",author:"Adam",body:'<p>The loot tracker will now track loot received from pickpockets.</p>\n<p><img src="/img/blog/1.6.6-Release/pploottracker.png" alt="pploottracker"></p>\n<p><s>The old show opponent\'s opponent option has been readded for NPC opponents;\ncloser inspection of the <a href="https://secure.runescape.com/m=news/another-message-about-unofficial-clients?oldschool=1" native="" rel="nofollow">prohibited feature\nlist</a>\nrevealed the original cause for us removing it only applied to PVP: <code>Indicates whom your opponent\'s opponent is in PVP</code></s></p>\n<p><img src="/img/blog/1.6.6-Release/oppinfo.png" alt="oppinfo"></p>\n<p>The Crystal Math Labs plugin has been replaced with an <code>XP Updater</code> plugin,\nwhich additionally now supports the TempleOSRS tracker. Remember that sending xp\nupdate requests to external services necessarily sends your IP address <em>and</em>\ndisplay name to that service.</p>\n<p>The CoX scouter plugin now has an option for screenshotting the overlay into the\nclipboard, making it easy to share.</p>\n<p><img src="/img/blog/1.6.6-Release/cox.png" alt="cox"></p>\n<p>The clue plugin now tells you when you are missing a light source required for\nyour clue.</p>\n<p><img src="/img/blog/1.6.6-Release/lightsource.png" alt="lightsource"></p>\n<p>The interface styles plugin now has an option to always used the stacked-stones\narrangement, regardless of client resolution.</p>\n<p><img src="/img/blog/1.6.6-Release/stones.png" alt="stones"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The loottracker now can track drops from the Nightmare</li>\n<li>Fix the Wintertodt plugin erronously sending a notification about being idle\nwhen you are already idle</li>\n<li>Dragging with the inventory grid enabled no longer drags grid cells</li>\n<li>The mouse tooltip position can now be configured to be above the mouse</li>\n<li>Fix imp spawn notifications sometimies not working in Puro-Puro</li>\n<li>The wiki plugin now has an option to make <code>Search</code> the default left click\noption</li>\n<li>The shift anti-drag plugin now also works in the bank</li>\n<li>Various hot-cold clues that were slightly off center have been centered, and\nthe solver can now sometimes eliminate possible solutions even when the orb\ntemperature has not changed</li>\n<li>The imbued heart timer now more reliably works when in combat</li>\n<li>The grand exchange plugin will now also record partially bought or sold\noffers, which can be viewed on the\n<a href="https://runelite.net/account/grand-exchange" native="" rel="nofollow">website</a>. Additionally, the\nretention history has been upped to 90 days from 30.</li>\n<li>The NPC unaggro plugin can now notify you when the aggression timer expires</li>\n<li>Fix the LMS overlay to be movable</li>\n<li>The custom cusor plugin now allows user-supplied cursors by placing a file\nnamed <code>cursor.png</code> in your <code>.runelite</code> directory</li>\n<li>The dragonfire shield cooldown timer has been updated to use the <a href="https://twitter.com/JagexAsh/status/1161987121709821953" native="" rel="nofollow">correct\ntime</a></li>\n<li>Skilling potions have been added to the item identification plugin</li>\n<li>The twisted league slayer helm is now a recognized slayer item</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 22 contributors this release!</p>\n<pre><code>15987632 (3):\n      rl-api: add invoke and return opcodes\n      rl-api: add script fired events\n      devtools: add script inspector\n\nAdam (16):\n      wintertodt: fix interrupt notification firing when already idle\n      cache: update sequence definition\n      widget item: clip overlay to parent bounds\n      screenmarkers: prevent null marker creation\n      client: create combined cml/templeosrs xp updater plugin\n      api: add both normal and dragging bounds to widgetitem\n      inventory grid: don\'t drag grid square when dragging items\n      clue plugin: add clue dev command\n      opponentinfo: add opponent\'s opponent for npcs\n      clue plugin: add reset overlay option\n      loot manager: add support for nightmare\n      loot tracker: add pickpocket events\n      loot tracker: store and match events by type\n      loot tracker: filter by type in details view\n      http-service: increase ge history retention to 90 days\n      widgetitemoverlay: clip dragged items when outside of parent bounds\n\nAlex Germann (1):\n      Update General Bentnoze clue step solution\n\nAlexsuperfly (5):\n      idle notifier: add fishing animations\n      idle notifier: prevent double notifications for anim and interact\n      move capturing of screenshots to ImageCapture utility\n      Raids: Add clan chat and world to scouting overlay\n      Raids: Enable screenshotting of scouting overlay\n\nCrypthead (1):\n      client: add configuration for tooltip position\n\nDavid (1):\n      clue plugin: add light requirements to clues\n\nGrahm Larkham (1):\n      imp plugin: fix notifications on npc change\n\nHenry Darnell (1):\n      Add ability and config to swap Lookup and Search in wiki plugin (#10690)\n\nHydrox6 (2):\n      config: add support for integer config items to have units\n      plugins: add units to configs\n\nJBerben (1):\n      antidrag: support bank interface\n\nJordan Atwood (4):\n      HotColdLocation: Center some location spots\n      HotColdSolver: Add same-temperature solution narrowing\n      ConfigPlugin: Expand RuneLite plugin tags\n      timers plugin: Improve imbued heart detection\n\nMax Weber (8):\n      loottracker: Optimize panel rebuild\n      loottracker: Handle rollover/select icons correctly\n      runelite-client: typecheck configs extend Config\n      PluginHubPanel: Limit height of description to 2 lines, enable word wrap\n      PluginManager: require start/stop to be invoked on the EDT\n      gpu: refactor shader compilation\n      gpu: run glslangValidator on shaders during tests\n      gpu: rename length to size in shaders\n\nNoah Haig (1):\n      clues: add description to Prif elite coord clue\n\nOelderoth (1):\n      grandexchange plugin: log cancelled buy/sell offers\n\nOwain van Brakel (1):\n      xpupdater: Fix config not showing\n\nPaveldin (1):\n      skill calc: add Spice Rack\n\nRob Mckennie (1):\n      npcunaggroarea: add notification for timer expiration\n\nRon Young (5):\n      plugins: add reset configuration method on plugin\n      banktags: reset tagtabs and banktags when reset button is clicked\n      widgetid: fix LMS INFO\n      scripts: add LayoutResizableStones script\n      interfacestyles: add ability to always stack resizable stones\n\nRyan H (1):\n      customcursor: support providing custom cursor images\n\nleopluerodon (1):\n      Add twisted slayer helmet to item mappings and slayer plugin\n\nmkowen1 (2):\n      item id: add hunter, agility, fishing, and guthix balance potions\n      item id: reformat extraneous spaces\n\nralphmtk (1):\n      timers: correct dfs spec cooldown time\n</code></pre>\n',image:"/img/blog/1.6.6-Release/pploottracker.png"}}}]);
//# sourceMappingURL=119.5433c146.chunk.js.map