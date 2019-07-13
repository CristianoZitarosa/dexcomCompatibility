# Dexcom App compatibility

The Dexcom company provides a web page where users of their products can check devices compatibility with Dexcom Apps.
As a direct user, at my eyes it looks that the provided web page could be difficult to consult because:
- all the Apps are displayed in the same long page;
- devices brands are not groupped and highlighted;
- sometimes there is a mix of the order of a specific model version for the same brand.

Due the motivations listed above I see difficolt for an user to spot if a specific model is compatible or not, and at the same time it is difficolt to spot if a new model has been added to the list.
So I decided to create this modification of the original page, with the only purpose to help other users having a better consultation of compatible models.


#### Techniques used

Most of the differences in my version can be found in the code.
First of all, I decided to create it as similar possible to the original Dexcom page to let users find element marks they already know from the Dexcom page. So graphically speaking the main difference of this version is that now it is not a page but a website where the user can choose and display a specific application, can browse forward or back or bookmark a specific content, can choose the language (currently Italian or English) and at last but not least, an user with impairments can finally access the contents.

 Here is a summary:
 - React and React Router;
 - localStorage;
 - Accessibility;
 - Responsive design.

#### React and React Router

This wesite is made with React.
I also used React Router to provide links to every App so the user can bookmark it for convenience or just browse the website without getting lost or confused. There is  a noMatch page as well to warn users if they type or reach a wrong link.

#### localStorage

I decided to be clear from the first moment the user reaches the website that it is not an original page from Dexcom. So I used an overlay to inform the user and let choose if wants to continue to the website or be informed before to go. At the same time it is possible to choose a language (currently Italian or English).
My use of the localStorage allows the website to remember the previous choiche (if there is one) and to automatically set the last language and close the overlay at a following visit for convenience.

#### Accessibility

On a web page related to user with an impairement as Dexcom users are, it is a sort of lack to presume that among those users there is not an inner group with other impairements as visual and mobility. At the moment all the contents care about semantic and are accessible by screen readers. Hopefully, because the approach to the reading is different, I hope to receive suggestion directly from users to further improve the readability.

#### Responsive design

While the purpose of the original page, as mentioned is to inform users about compatible devices (mostly smarphones) with Dexcom Apps, it appears here another weakness forgetting to plan that probably many users would go to check compatibility directly from their phone (nowadays high possible). My website is optimized to be displayed on any screen size from smartphones and tablets to computers.

#### Credits

- As mentioned I left the appearance as possible similar to the one from Dexcom, so it is important to inform Dexcom is the creator and owner of the main style and the App icons I used on my website.

- Country flags come from [this repository](https://github.com/lipis/flag-icon-css) by [Lipis](https://github.com/lipis).
-  Button icons come from [Font Awesome](https://fontawesome.com/).
- The loudly crying face comes from [emojipedia](https://emojipedia.org/loudly-crying-face/).

#### License:

MIT License

Copyright (c) 2019 Cristiano Zitarosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
