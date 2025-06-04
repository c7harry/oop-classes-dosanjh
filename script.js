const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
};

// Seal the rectObj
Object.seal(rectObj);

// Freeze the circleObj
Object.freeze(rectObj);

let descriptors = Object.getOwnPropertyDescriptors(rectObj);

// Modify rectObj
rectObj.color = 'red';
delete rectObj.name;
rectObj.width = 20;

const circleObj = {
    name: 'Circle 1',
    radius: 30,
};

// Freeze the circleObj
Object.freeze(circleObj);

// Modify circleObj
descriptors = Object.getOwnPropertyDescriptors(circleObj);
circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';

// Display Results for rectObj
document.getElementById("rectObjOriginal").innerText = JSON.stringify({
    name: 'Rectangle 1',
    width: 10,
    height: 10
});

document.getElementById("rectObjModified").innerText = JSON.stringify(rectObj);
document.getElementById("isRectObjSealed").innerText = Object.isSealed(rectObj) ? "Yes" : "No";
document.getElementById("isRectObjFrozen").innerText = Object.isFrozen(rectObj) ? "Yes" : "No";

// Display Results for circleObj
document.getElementById("circleObjOriginal").innerText = JSON.stringify({
    name: 'Circle 1',
    radius: 30
});

document.getElementById("circleObjModified").innerText = JSON.stringify(circleObj);
document.getElementById("isCircleObjSealed").innerText = Object.isSealed(circleObj) ? "Yes" : "No";
document.getElementById("isCircleObjFrozen").innerText = Object.isFrozen(circleObj) ? "Yes" : "No";

document.getElementById("descriptors").innerText = JSON.stringify(descriptors, null, 2);