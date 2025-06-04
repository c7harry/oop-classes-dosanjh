const rectObjOriginal = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
};
const rectObj = { ...rectObjOriginal };

Object.seal(rectObj);

const rectDescriptors = Object.getOwnPropertyDescriptors(rectObj);

rectObj.color = 'red';
delete rectObj.name;
rectObj.width = 20;

const circleObjOriginal = {
    name: 'Circle 1',
    radius: 30,
};
const circleObj = { ...circleObjOriginal };

Object.freeze(circleObj);

const circleDescriptors = Object.getOwnPropertyDescriptors(circleObj);

circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New Name';

window.onload = function() {
    // Rectangle
    document.getElementById("rectObjOriginal").innerText = JSON.stringify(rectObjOriginal, null, 2);
    document.getElementById("rectObjModified").innerText = JSON.stringify(rectObj, null, 2);
    document.getElementById("rectDescriptors").innerText = JSON.stringify(rectDescriptors, null, 2);
    document.getElementById("isRectObjSealed").innerText = Object.isSealed(rectObj) ? "Yes" : "No";
    document.getElementById("isRectObjFrozen").innerText = Object.isFrozen(rectObj) ? "Yes" : "No";

    // Circle
    document.getElementById("circleObjOriginal").innerText = JSON.stringify(circleObjOriginal, null, 2);
    document.getElementById("circleObjModified").innerText = JSON.stringify(circleObj, null, 2);
    document.getElementById("circleDescriptors").innerText = JSON.stringify(circleDescriptors, null, 2);
    document.getElementById("isCircleObjSealed").innerText = Object.isSealed(circleObj) ? "Yes" : "No";
    document.getElementById("isCircleObjFrozen").innerText = Object.isFrozen(circleObj) ? "Yes" : "No";
};