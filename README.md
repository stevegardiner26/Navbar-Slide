# Navbar-Slide
An animated sliding background color for navigation bars and lists that follows your mouse. It works well with bootstrap and any other html navbar or list. You can view the demo.html to see the navbar in action.

## Installation Instructions and User Guide

#### Installation & Configuration
First you just need to copy the `navbar_slide.js` file into your repo/files and reference it in the html file.

Now you want to open the `navbar_slide.js` file and adjust these lines to what you want.

    var solidColor = '#333';
    var hoverColor = 'yellow';
    var slideTime = .2;
    
`solidColor` is the main background color that will be displayed in on the list/navbar items.

`hoverColor` is the hover background color that will be displayed on the list when a user hovers on the list item.

`slideTime` is the time it takes for the animation of the hover background to appear. Faster looks better but you can customize it.

#### Applying the Navbar to Elements
Now you are almost done for any horizontal navbars or lists you want to apply this to just add the class of `horizontal-navbar-item` to all the list items or individual navbar items. And do the same for vertical lists and navbars as well by applying the class `vertical-navbar-item` to all the list items.

#### Dropdown Menu Support
All you have to do is treat the dropdown as a vertical list and apply the proper classes and it will just work!

#### Multi-Styled/Colored Navbars/Lists in One File
This is a tad bit different to implement but just as effective and simple. Now you want to use this if you are planning on using several different colored navbars within your document.
All you have to do is include the `navbar-slide-multiple.js` file into your project directory and edit the config.

##### Configuration
Open the `.js` file and adjust the config as following:

    var menus = [
        {
            classSuffix: 'black-yellow',
            solidColor: '#333',
            hoverColor: 'yellow',
            slideTime: '.2',
        },
        {
            classSuffix: 'red-pink',
            solidColor: 'red',
            hoverColor: 'pink',
            slideTime: '.2',
        }
    ];

This object is the different styles or menubar types you have available to you to use. For example if you want to add a new one just add a new object to the `menus` array.

`classSuffix` is applied to the end of the `vertical-` or `horizontal-` class names so you can differentiate between them.

`solidColor` is the main background color that will be displayed in on the list/navbar items.

`hoverColor` is the hover background color that will be displayed on the list when a user hovers on the list item.

`slideTime` is the time it takes for the animation of the hover background to appear. Faster looks better but you can customize it.

Now what you want to do is apply the proper classes to each list item or navbar item like the original script. Except now each class is going to be `vertical-` or `horizontal-` followed by the suffix you created.

For example if I wanted to apply the red-pink styles to my horizontal navbar menu I would add the class `horizontal-red-pink` to all the navbar list items.

Thank you for using my script and I hope you enjoy it! If you have any suggestions for improvement feel free to let me know.
