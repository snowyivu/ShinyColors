<a href="https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js"><img src="image/banner.jpg" alt="Check for updates"></a>
<p align="center">
<a href="https://github.com/snowyivu/ShinyColors/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/snowyivu/ShinyColors.svg"></a>
<a href="https://idolmaster.jp/"><img alt="THE IDOLM@STER" src="https://img.shields.io/badge/IDOL-M%40STER-ff779c.svg"></a>
<a href="https://shinycolors.enza.fun/"><img alt="283 Production" src="https://img.shields.io/badge/283-Production-9a77ff.svg"></a>
</p>

## Patch Install Instructions Below  

---
<b>Questions, Feedback, or want to Help with Translations?：[Join the Discord](https://discord.gg/xuFcKzW)</b>

## WARNING!!!
This type of tool that modifies game files is not allowed per the game Terms of Service.  Please use at your own risk!!!  We are not responsible for any actions taken towards your account if you use this translation tool.
## WARNING!!!

## Updates
Once you have the patch set up, it will grab future updates automatically.  The only exception to this is if there is a change in the Shiny Colors game code, at which point tampermonkey should detect there is a new script to download.  If tampermonkey doesn't automatically detect it, you should still get an @everyone ping in the discord prompting you to re-download the script from the links below.

## Installing on Desktop
1. It's recommended to run this patch on Chrome
2. First install the [Tampermonkey](https://tampermonkey.net/) extension
3. After installing the extension，download the script: https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js ，tampermonkey should prompt you to load it
4. Finally, [(Click Here)](https://chrome.google.com/webstore/detail/%E9%97%AA%E8%80%80%E8%89%B2%E5%BD%A9%E5%BC%82%E6%AD%A5%E8%84%9A%E6%9C%AC/caafhkjcgpbinkgnghkojaoipgdkbcbc/) to install the new ShinyColors script syncing extension, which will prevent an issue where the patch would fall off during season changes, etc.
5. Refresh game page and the patch should work automatically
(If you have played before, you may need to clear your browser's cache and cookies to remove existing Japanese files)

Game Address：[Direct Link](https://shinycolors.enza.fun/)

Recruit-a-friend for biuuu (the original Chinese dev!): [Recruit Link](https://go.enza.fun/YLZXbw)

## Installing on Android
1. For mobile，you'll need a browser that supports scripts.  I've succesfully used [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser&hl=en_US).
2. (Return to this page on your new browser)
~~3. From Kiwi Browser, install the [Tampermonkey](https://tampermonkey.net/) extension (Chrome version, Stable build)~~
3. It looks like Tampermonkey isn't currently working with the patch - try [ViolentMonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag?hl=en) instead
4. After installing the extensions，download the script: https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js ，tampermonkey should prompt you to load it
5. Refresh the game page [(Link Here)](https://shinycolors.enza.fun/) and the patch should work automatically
(If you have played before, you may need to clear your browser's cache and cookies to remove existing Japanese files)
6. It's recommended to add a shortcut to your home menu so that the game plays fullscreen like a native application:
<img src="https://github.com/snowyivu/ShinyColors/blob/master/image/MobileInstallTutorial1.jpg" alt="Click the ..." width="30%"><img src="https://github.com/snowyivu/ShinyColors/blob/master/image/MobileInstallTutorial2.jpg" alt="Click Add to Home Screen" width="30%" align="right">

## Installing on iOS
1. For mobile, you'll need a browser that supports scripts. Currently, the best free option for iOS is <em>Stay - Userscript Extension.</em>
2. Once you've downloaded Stay, you'll need to complete the initialization tutorial.

<img src="https://i.imgur.com/kPiMdjZ.jpg" width="500"></img>

3. Once you've completed Step 7 of the initialization tutorial, continue to the next screen where you'll be prompted to install a sample userscript. Skip this step.
4. Open Safari and visit the following link: https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js Stay should prompt you to install the userscript.

<img src="https://i.imgur.com/l0shT2n.jpg" width="500"></img>

5. From the script config, change the inject mode to 'page' and disable dark mode.

<img src="https://i.imgur.com/pbFc226.jpg" width="500"></img>
<img src="https://i.imgur.com/pfTgjuZ.jpg" width="500"></img>

6. The patch should now be installed. Play the game in Safari (https://shinycolors.enza.fun/) and ensure the patch is working correctly.

<img src="https://github.com/snowyivu/ShinyColors/blob/master/image/iosinstall.png" alt="Click the ..." width="30%"></img><img src="https://github.com/snowyivu/ShinyColors/blob/master/image/VideoFloat.png" alt="Click the ..." width="30%"></img>

## Updating on iOS

Pabs made a short tutorial video for updating the patch on iOS:

https://streamable.com/aqlbt6

## Settings and options
**Machine translation**

If no one has submitted a translation for a commu，machine translation can be turned on。

After the game URL add #auto=on ，otherwise leave #auto=off 。

You can also directly click these links，[Machine TL ON](https://shinycolors.enza.fun/home#auto=on)  /  [Machine TL OFF](https://shinycolors.enza.fun/home#auto=off)

**Keep game sound after losing focus**

By default the game stops sound playback after losing window focus，this plug-in can keep sound playing。

After the game URL add #bgm=on ，otherwise leave #bgm=off 。

You can also directly click these links，[Keep playing BGM](https://shinycolors.enza.fun/home#bgm=on)  /  [Pause BGM](https://shinycolors.enza.fun/home#bgm=off)

**Download or Test new commus for the spreadsheet**

You can manually download or upload .csv files when viewing commus.  You will see a button the right side of the screen when viewing commus with this feature turned on - the download button will allow you to extract the commu script as a .csv , and the upload button will allow you to test a .csv you are working on.

After the game URL add #story=edit , otherwise leave #story=normal 。

You can also directly click these links，[Story Edit Button](https://shinycolors.enza.fun/home#story=edit)  /  [No Story Edit](https://shinycolors.enza.fun/home#story=normal)

**Download homescreen lines**

Thanks to some new code from Meru, you can download homescreen lines for the idols.

After the game URL add #myPage=single or #myPage=multiple to download a single csv or multiple member's homescreen lines at once.

**Switch to original font**

After the game URL add #originalFont=on if you'd prefer to keep the original Japanese font when the patch is active
