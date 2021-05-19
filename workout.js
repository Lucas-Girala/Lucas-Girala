

function newWorkout() {
    var exRandom = Math.floor(Math.random()*8); 
    var exResult, repResult, repRange, minimum;
    if (exRandom == 0) {
        exResult = 'Squats'
        repRange = 50
        minimum = 15
    } else if (exRandom == 1) {
        exResult = 'Push-ups'
        repRange = 50
        minimum = 12
    } else if (exRandom == 2) {
        exResult = 'Burpees'
        repRange = 20
        minimum = 5
    } else if (exRandom == 3) {
        exResult = 'Sit-ups'
        repRange = 50
        minimum = 25
    } else if (exRandom == 4) {
        exResult = 'Lunges'
        repRange = 50
        minimum = 30
    } else if (exRandom == 5) {
        exResult = 'Dips'
        repRange = 50
        minimum = 20
    } else if (exRandom == 6) {
        exResult = 'Jump Rope'
        repRange = 200
        minimum = 50
    } else if (exRandom == 7) {
        exResult = 'Diam. push-ups'
        repRange = 30
        minimum = 10
    }
    var repRandom = Math.floor(Math.random()*repRange) + minimum; 
    repResult = repRandom
    document.getElementById('exercise').innerHTML = exResult
    document.getElementById('reps').innerHTML = repResult
}
function reset() {
    document.getElementById('exercise').innerHTML = 'Stay'
    document.getElementById('reps').innerHTML = 'Hard'
}