function newBezier() {
    if(bezierCurves.length == 0 || bezierCurves[bezierCurves.length -1].length > 1){
        bezierCurves.push([]);
        currentCurve = bezierCurves.length - 1;
        currentPointOnCurve = -1;
        isWaitAddPoint = true;
    }
}
