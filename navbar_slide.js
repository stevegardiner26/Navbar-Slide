//NavBar Slide
//Add the Ability for Multiple NavMenus with JSON object

var solidColor = '#333';
var hoverColor = 'yellow';
var slideTime = .2;
var horizontal_navigation  = document.querySelectorAll('.horizontal-navbar-item');
var vertical_navigation  = document.querySelectorAll('.vertical-navbar-item');

for(var i = 0; i < horizontal_navigation.length; i++){
    horizontal_navigation[i].style.margin = "0 !important";
    horizontal_navigation[i].style.backgroundSize = "200%";
    horizontal_navigation[i].style.cursor = "pointer";
    horizontal_navigation[i].style.backgroundImage = 'linear-gradient(to right, ' + solidColor + ' 50%, ' + hoverColor + ' 50%)';
    horizontal_navigation[i].style.transition = "background-position " + slideTime + 's';
    let position = 0;
    horizontal_navigation[i].onmouseenter = function(mouse) {
        var edge = closestEdge(mouse, this);
        console.log('enter from ' + edge);
        if (edge === 'left'){
            position -= 100;
            this.style.backgroundPosition = position + '%';
        } else if (edge === 'right') {
            position += 100;
            this.style.backgroundPosition = position + '%';
        } else if (edge === 'bottom') {
            position += 100;
            this.style.backgroundPosition = position + '%';
        } else if (edge === 'top') {
            position += 100;
            this.style.backgroundPosition = position + '%';
        }
    };
    horizontal_navigation[i].onmouseleave = function(mouse) {
        var edge2 = closestEdge(mouse, this);
        console.log('left from ' + edge2);
        if (edge2 === 'left'){
            position += 100;
            this.style.backgroundPosition = position + '%';
        } else if (edge2 === 'right') {
            position -= 100;
            this.style.backgroundPosition = position + '%';
        } else if (edge2 === 'bottom') {
            position -= 100;
            this.style.backgroundPosition = position + '%';
        } else if (edge2 === 'top') {
            position -= 100;
            this.style.backgroundPosition = position + '%';
        }
    };
}
//For Vertical Navbars
for(var v = 0; v < vertical_navigation.length; v++){
    vertical_navigation[v].style.margin = "0 !important";
    vertical_navigation[v].style.backgroundSize = "100% 200%";
    vertical_navigation[v].style.backgroundPosition = "center 0% !important";
    vertical_navigation[v].style.cursor = "pointer";
    vertical_navigation[v].style.backgroundImage = 'linear-gradient(to bottom, ' + solidColor + ' 50%, ' + hoverColor + ' 50%)';
    vertical_navigation[v].style.transition = "background-position " + slideTime + 's';
    let position2 = 0;
    vertical_navigation[v].onmouseenter = function(mouse) {
        var edge = closestEdge(mouse, this);
        console.log('enter from ' + edge + ' with: ' + position2);
        if (edge === 'left'){
            position2 += 100;
            this.style.backgroundPosition = '0 ' + position2 + '%';
        } else if (edge === 'right') {
            position2 += 100;
            this.style.backgroundPosition = '0 ' + position2 + '%';
        } else if (edge === 'bottom') {
            position2 += 100;
            this.style.backgroundPosition = '0 ' + position2 + '%';
        } else if (edge === 'top') {
            position2 -= 100;
            this.style.backgroundPosition = '0 ' + position2 + '%';
        }
    };
    vertical_navigation[v].onmouseleave = function(mouse) {
        var edge2 = closestEdge(mouse, this);
        console.log('left from ' + edge2 + ' with: ' + position2);
        if (edge2 === 'left'){
            position2 -= 100;
            this.style.backgroundPosition = '0 ' + position2 + '%';
        } else if (edge2 === 'right') {
            position2 -= 100;
            this.style.backgroundPosition = '0 ' + position2 + '%';
        } else if (edge2 === 'bottom') {
            position2 -= 100;
            this.style.backgroundPosition = '0 ' + position2 + '%';
        } else if (edge2 === 'top') {
            position2 += 100;
            this.style.backgroundPosition = '0 ' + position2 + '%';
        }
    };
}

function closestEdge(mouse, elem) {
    var elemBounding = elem.getBoundingClientRect();

    var elementLeftEdge = elemBounding.left;
    var elementTopEdge = elemBounding.top;
    var elementRightEdge = elemBounding.right;
    var elementBottomEdge = elemBounding.bottom;

    var mouseX = mouse.pageX;
    var mouseY = mouse.pageY;

    var topEdgeDist = Math.abs(elementTopEdge - mouseY);
    var bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
    var leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
    var rightEdgeDist = Math.abs(elementRightEdge - mouseX);

    var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);

    switch (min) {
        case leftEdgeDist:
            return "left";
        case rightEdgeDist:
            return "right";
        case topEdgeDist:
            return "top";
        case bottomEdgeDist:
            return "bottom";
    }
}