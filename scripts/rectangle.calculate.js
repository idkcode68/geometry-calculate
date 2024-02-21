function calculateRectangleArea(){
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const  width = parseFloat(rectangleWidthText)
    // console.log(base)

    // get rectangle length value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
    // console.log(height);

    const area = width * length;
    console.log('area of the rectangle is: ', area)

// display triangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = area;
}