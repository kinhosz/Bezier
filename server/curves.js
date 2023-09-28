function curves() {
    if(!isCurvesHiden) {
        for(let i=0;i<bezierCurves.length; i++) {
            if (bezierCurves[i].length < 2) continue;
            const segments = [];
            const part = 1.0/availables;

            for(let j=0; j<availables; j++) {
                segments.push(deCasteljau(bezierCurves[i], part * j));
            }

            segments.push({
                x: bezierCurves[i][bezierCurves[i].length - 1].x,
                y: bezierCurves[i][bezierCurves[i].length - 1].y
            })

            plotSegments(segments, i == currentCurve? true : false);
        }
    }
}
