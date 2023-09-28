function deleteBezier() {
    if(currentCurve != -1) {
        bezierCurves.splice(currentCurve, 1);
        
        if(bezierCurves.length == 0) {
            currentCurve = -1;
        }
        else{
            currentCurve %= bezierCurves.length;
        }

        currentPointOnCurve = -1;
    }

    isWaitAddPoint = false;
    isMovePoint = false;
}
