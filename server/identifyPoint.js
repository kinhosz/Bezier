function identifyPoint(x, y) {
    const limit = 10;

    if(!isPointsHiden) {
        for(let i=0; i<bezierCurves.length; i++) {
            for(let j=0; j<bezierCurves[i].length; j++) {
                if(Math.abs(bezierCurves[i][j].x - x) < limit &&
                    Math.abs(bezierCurves[i][j].y - y) < limit) {
                    
                    currentCurve = i;
                    currentPointOnCurve = j;
                }
            }
        }
    }
}
