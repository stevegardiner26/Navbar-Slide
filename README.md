# Navbar-Slide
An animated sliding background color for navigation bars and lists that follows your mouse. It works well with bootstrap and any other html navbar or list. You can view the demo.html to see the navbar in action.

## Installation Instructions and User Guide
*Currently we only support one set of colors for the all of your navbars*

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
Coming soon
