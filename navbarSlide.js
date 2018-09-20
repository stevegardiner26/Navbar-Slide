//NavBar Slide
var solidColor = '#333';
var hoverColor = 'yellow';
var slideTime = 1;
var navigation  = document.querySelectorAll('.horizontal-navbar-item');

for(var i = 0; i < navigation.length; i++){
    navigation[i].style.backgroundImage = 'linear-gradient(to right, ' + solidColor + ' 50%, ' + hoverColor + ' 50%)';
    navigation[i].style.transition = "background-position " + slideTime + 's';

    navigation[i].onmouseenter = function(mouse) {
        var edge = closestEdge(mouse, this);
        console.log('enter from ' + edge);
        if (edge === 'left'){
            this.style.backgroundPosition = '-100%';
        }
        else if (edge === 'right') {
            this.style.backgroundPosition = '100%';
        }
    };
    navigation[i].onmouseleave = function(mouse) {
        var edge2 = closestEdge(mouse, this);
        console.log('left from ' + edge2);
        if (edge2 === 'left'){
            this.style.backgroundPosition = '100%';
        }
        else if (edge2 === 'right') {
            this.style.backgroundPosition = '-100%';
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