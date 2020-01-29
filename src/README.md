## WARNING!!!
This type of tool that modifies game files is not allowed per the game Terms of Service.  Please use at your own risk!!!  We are not responsible for any actions taken towards your account if you use this translation tool.
## WARNING!!!

## Updates
Once you have the patch set up, it will grab future updates automatically.  The only exception to this is if there is a change in the Shiny Colors game code, at which point tampermonkey should detect there is a new script to download.  If tampermonkey doesn't automatically detect it, you should still get an @everyone ping in the discord prompting you to re-download the script from the links below.

## Installing on Desktop
1. It's recommended to run this patch on Chrome
2. First install the [Tampermonkey](https://tampermonkey.net/) extension
3. After installing the extension，download the script: https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js ，tampermonkey should prompt you to load it
4. Refresh game page and the patch should work automatically
(If you have played before, you may need to clear your browser's cache and cookies to remove existing Japanese files)

Game Address：[Direct Link](https://shinycolors.enza.fun/home)

Recruit-a-friend for biuuu (the original Chinese dev!): [Recruit Link](https://go.enza.fun/YLZXbw)

## Installing on Android
1. For mobile，you'll need a browser that supports scripts.  I've succesfully used [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser&hl=en_US).
2. (Return to this page on your new browser)
3. From Kiwi Browser, install the [Tampermonkey](https://tampermonkey.net/) extension
4. After installing the extensions，download the script: https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js ，tampermonkey should prompt you to load it
5. Refresh the game page and the patch should work automatically
(If you have played before, you may need to clear your browser's cache and cookies to remove existing Japanese files)
6. It's recommended to add a shortcut to your home menu so that the game plays fullscreen like a native application:
<img src="https://github.com/snowyivu/ShinyColors/blob/master/data/image/MobileInstallTutorial1.jpg" alt="Click the ..." width="30%"><img src="https://github.com/snowyivu/ShinyColors/blob/master/data/image/MobileInstallTutorial2.jpg" alt="Click Add to Home Screen" width="30%" align="right">

## Installing on iOS
1. For mobile，you'll need a browser that supports scripts.  Currently the only known one for iOS is Alook Browser which unfortunately is 1.99 on the App Store.
2. Once you've downloaded Alook you'll need to set up a Javascript extension for shinycolors.enza.fun
3. Go to Settings > Custom Settings > JavaScript Extensions > Add a New One
4. On the next screen you will need to set up the Match Type to Host , Match Value to shinycolors.enza.fun , Run At to DOMContentLoaded , and the following JavaScript Code:
```(function(){ window.unsafeWindow = window; const script = document.createElement('script'); script.src = 'https://snowyivu.github.io/ShinyColors/ShinyColors.user.js'; document.head.appendChild(script); }())```
<img src="https://github.com/snowyivu/ShinyColors/blob/master/data/image/iosinstall.png" alt="Click the ..." width="30%">
5. Play the game through the new browser and the patch should work automatically


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
