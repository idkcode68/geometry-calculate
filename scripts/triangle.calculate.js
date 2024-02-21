// 
// ** Objective is to find the area of the triangle using the provided formula. The basic goal is to take data from height and base and put it in here where we can calculate its area
// **get base value
// **added an id in the base input field
// **getElementById to access the input field
// **get value from the input field (where the value would be a string)
// ** convert the value to a number using parseFloat()


function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const  base = parseFloat(triangleBaseText)
    // console.log(base)

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    // console.log(height);

    const area = 0.5 * base * height;
    console.log('area of the triangle is: ', area)

// display triangle area
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;
}

