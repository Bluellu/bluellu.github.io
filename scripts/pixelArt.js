var MAXSIZE = 150;
var gridSize = 20;
var guidelinesOn = false;
var defaultColor = "#f2f2f2";
var grid1 = document.getElementById("canvas-grid");

// Initialize base color-map 
var colors = new Array(MAXSIZE);
for (i = 0 ; i < MAXSIZE ; i++) {
    colors[i] = new Array(MAXSIZE);
    for (j = 0 ; j < MAXSIZE ; j++) {
        colors[i][j] = defaultColor;
    }
}

assignDefaultColor();
drawMario();
drawGrid();

/* Assigns color to a single square at position x,y */
function assignColor(x, y, hexColor) {
    colors[x - 1][y - 1] = hexColor;
}

/* Create grid with defined colors */
function drawGrid() {
    grid1.textContent = ''; // Clear up any existing items in the grid
    for (i = 0 ; i < gridSize ; i++) {
        for (j = 0 ; j < gridSize ; j++) {
            let boxId = [i + 1, j + 1].join('-');
            if (guidelinesOn) {
                grid1.insertAdjacentHTML('beforeend', "<div class='grid-item item" + boxId + "' id='" + boxId + "' style=\"background-color: "
                    + colors[i][j] + "; grid-column: " + (i + 1) + "; grid-row:" + (j + 1) + "\">" + boxId + "</div>");
            } else {
                grid1.insertAdjacentHTML('beforeend', "<div class='grid-item item" + boxId + "' id='" + boxId + "' style=\"background-color: "
                    + colors[i][j] + "; grid-column: " + (i + 1) + "; grid-row:" + (j + 1) + "\"></div>");
            }
        }
    }
}

/* Assign default color to all squares in the color array */
function assignDefaultColor () {
    for (i = 0 ; i < gridSize ; i++) {
        for (j = 0 ; j < gridSize ; j++) {
            colors[i][j] = defaultColor;
        }
    }
}

/* Clear entire grid to default color */
function clearGrid(grid) {
    assignDefaultColor();
    drawGrid();
}

function resizeGrid(newSize) {    
    grid1.textContent = '';
    gridSize = newSize;
    drawGrid();
}

/* Generate sample art */
function drawMario() {
    var beige = "#ffdab3";
    var red = "#ff3300";
    var brown = "#804000";
    var black = "#000000";
    var blue = "#0000ff";
    var yellow = "#ffd633";

    assignColor(2, 12, beige);
    assignColor(2, 11, beige);
    assignColor(3, 11, beige);
    assignColor(3, 11, beige);
    assignColor(3, 12, beige);
    assignColor(3, 13, beige);
    assignColor(4, 11, beige);
    assignColor(4, 12, beige);
    assignColor(7, 7, beige);
    assignColor(7, 8, beige);
    assignColor(8, 9, beige);
    assignColor(8, 10, beige);
    assignColor(9, 7, beige);
    assignColor(9, 9, beige);
    assignColor(9, 10, beige);
    assignColor(10, 6, beige);
    assignColor(10, 7, beige);
    assignColor(10, 9, beige);
    assignColor(10, 10, beige);
    assignColor(11, 6, beige);
    assignColor(11, 7, beige);
    assignColor(11, 8, beige);
    assignColor(11, 9, beige);
    assignColor(11, 10, beige);
    assignColor(12, 8, beige);
    assignColor(12, 10, beige);
    assignColor(13, 6, beige);
    assignColor(13, 7, beige);
    assignColor(13, 10, beige);
    assignColor(14, 7, beige);
    assignColor(14, 8, beige);
    assignColor(14, 10, beige);
    assignColor(15, 7, beige);
    assignColor(15, 8, beige);
    assignColor(16, 8, beige);
    assignColor(15, 4, beige);
    assignColor(16, 4, beige);
    assignColor(16, 5, beige);
    assignColor(17, 4, beige);
    assignColor(17, 5, beige);
    assignColor(5, 16, brown);
    assignColor(5, 17, brown);
    assignColor(6, 7, brown);
    assignColor(6, 8, brown);
    assignColor(6, 9, brown);
    assignColor(6, 15, brown);
    assignColor(6, 16, brown);
    assignColor(6, 17, brown);
    assignColor(7, 6, brown);
    assignColor(7, 9, brown);
    assignColor(7, 15, brown);
    assignColor(7, 16, brown);
    assignColor(8, 6, brown);
    assignColor(8, 7, brown);
    assignColor(8, 8, brown);
    assignColor(9, 6, brown);
    assignColor(9, 8, brown);
    assignColor(10, 8, brown);
    assignColor(17, 12, brown);
    assignColor(17, 13, brown);
    assignColor(17, 14, brown);
    assignColor(17, 15, brown);
    assignColor(18, 11, brown);
    assignColor(18, 12, brown);
    assignColor(18, 13, brown);
    assignColor(18, 14, brown);
    assignColor(18, 15, brown);
    assignColor(12, 6, black);
    assignColor(12, 7, black);
    assignColor(12, 9, black);
    assignColor(13, 8, black);
    assignColor(13, 9, black);
    assignColor(14, 9, black);
    assignColor(15, 9, black);
    assignColor(5, 11, red);
    assignColor(5, 12, red);
    assignColor(6, 11, red);
    assignColor(6, 12, red);
    assignColor(7, 5, red);
    assignColor(7, 11, red);
    assignColor(7, 12, red);
    assignColor(7, 13, red);
    assignColor(8, 4, red);
    assignColor(8, 5, red);
    assignColor(8, 11, red);
    assignColor(8, 12, red);
    assignColor(8, 13, red);
    assignColor(9, 4, red);
    assignColor(9, 5, red);
    assignColor(9, 12, red);
    assignColor(9, 13, red);
    assignColor(10, 4, red);
    assignColor(10, 5, red);
    assignColor(10, 11, red);
    assignColor(11, 4, red);
    assignColor(11, 5, red);
    assignColor(11, 11, red);
    assignColor(11, 12, red);
    assignColor(12, 4, red);
    assignColor(12, 5, red);
    assignColor(12, 11, red);
    assignColor(12, 12, red);
    assignColor(13, 4, red);
    assignColor(13, 5, red);
    assignColor(13, 12, red);
    assignColor(14, 5, red);
    assignColor(14, 11, red);
    assignColor(15, 5, red);
    assignColor(15, 6, red);
    assignColor(15, 10, red);
    assignColor(15, 11, red);
    assignColor(16, 6, red);
    assignColor(16, 7, red);
    assignColor(16, 9, red);
    assignColor(16, 10, red);
    assignColor(17, 6, red);
    assignColor(17, 7, red);
    assignColor(17, 8, red);
    assignColor(8, 14, blue);
    assignColor(8, 15, blue);
    assignColor(8, 16, blue);
    assignColor(9, 11, blue);
    assignColor(9, 14, blue);
    assignColor(9, 15, blue);
    assignColor(9, 16, blue);
    assignColor(10, 12, blue);
    assignColor(10, 13, blue);
    assignColor(10, 14, blue);
    assignColor(10, 15, blue);
    assignColor(10, 16, blue);
    assignColor(11, 13, blue);
    assignColor(11, 15, blue);
    assignColor(11, 16, blue);
    assignColor(12, 13, blue);
    assignColor(12, 14, blue);
    assignColor(12, 15, blue);
    assignColor(12, 16, blue);
    assignColor(13, 11, blue);
    assignColor(13, 13, blue);
    assignColor(13, 14, blue);
    assignColor(13, 15, blue);
    assignColor(13, 16, blue);
    assignColor(14, 12, blue);
    assignColor(14, 14, blue);
    assignColor(14, 15, blue);
    assignColor(15, 13, blue);
    assignColor(15, 14, blue);
    assignColor(15, 15, blue);
    assignColor(16, 13, blue);
    assignColor(16, 14, blue);
    assignColor(16, 15, blue);
    assignColor(11, 14, yellow);
    assignColor(14, 13, yellow);


    













    

}