function problem1(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

function problem2(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 !== 0 && i % 7 !== 0) {
            console.log(i);
        }
    }
}

function problem3(numberCount) {
    var sequence = [],
        min = 1,
        max = 1;
    for (var i = 0; i < numberCount; i++) {
        sequence[i] = Math.floor(Math.random() * 100);
        min = sequence[i];
        if (min > sequence[i]) {
            min = sequence[i];
        }
        if (max < sequence[i]) {
            max = sequence[i];
        }
    }
    console.log(sequence);
    console.log('Min: ' + min);
    console.log('Max: ' + max);
}

function problem4(obj) {
    var smallest = 'zzz';
    var largest = 'aaa';
    for (var prop in obj) {
        if (prop < smallest) {
            smallest = prop;
        }
        if (prop > largest) {
            largest = prop;
        }
    }
    console.log('The smallest property in ' + obj + ' is ' + smallest);
    console.log('The largest property in ' + obj + ' is ' + largest);
}