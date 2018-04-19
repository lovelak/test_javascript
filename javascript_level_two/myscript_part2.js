function sleepIn(weekday, vacation) {
    return (!weekday || vacation)
}

function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile)
}

function stringTimes(str, n) {
  var ss = "";
  for (var i = 0; i < n; i++) {
    ss += str
  }
  return ss
}

function luckySum(a, b, c){
  var sum = 0
  if (a === 13) {
    sum = 0
  } else if (b === 13) {
    sum = a
  } else if (c === 13) {
    sum = a+b
  } else {
    sum = a+b+c
  }
  return sum
  //Code Goes Here
}

function caught_speeding(speed, is_birthday){
  if (is_birthday) {
    speed -= 5
  }
  if (speed <= 60) {
    0
  }
  if (60 < speed <= 80) {
    return 1
  }
  return 2
  // if (is_birthday != true) {
  //   if (speed <= 60) {
  //     return 0
  //   } else if (speed <= 80) {
  //     return 1
  //   } else {
  //     return 2
  //   }
  // } else {
  //   if (speed <= 65) {
  //     return 0
  //   } else if (speed <= 85) {
  //     return 1
  //   } else {
  //     return 2
  //   }
  // }
  //Code Goes Here
}

function makeBricks(small, big, goal){
  return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal
  //Code Goes Here
}
