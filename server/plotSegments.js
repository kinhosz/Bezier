function plotSegments(segments, isCurrentCurve) {
    if(isCurrentCurve) {
        stroke("red");
    }
    else{
        stroke("green");
    }

    strokeWeight(5);

    for(let i=1; i<segments.length; i++) {
        line(segments[i-1].x, segments[i-1].y, segments[i].x, segments[i].y);
    }
}
