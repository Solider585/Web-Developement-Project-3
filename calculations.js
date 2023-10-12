'use strict';

document.addEventListener("DOMContentLoaded", function(){

//Add event listeners for buttons
document.getElementById("Submit").onclick = claculateInputs;
document.getElementById("reset").onclick = resetCalculations;
});


function claculateInputs() {
  var firstNumber = Number($('#one').val());
  var secondNumber = Number($('#two').val());
  var thirdNumber = Number($('#three').val());
  var results = document.getElementById("calculations");

  var maxOutput = "Max Number = " + Math.max(firstNumber, secondNumber, thirdNumber);
  var minOutput = "Minimun Number = " + Math.min(firstNumber, secondNumber, thirdNumber);

  var median = function getMedian(firstNumber, secondNumber, thirdNumber){
    var nums = [firstNumber, secondNumber, thirdNumber];
    nums.sort((a,b) => a-b);
    return nums[1];
  }
  var medianOutput = "Median = " + median(firstNumber, secondNumber, thirdNumber);
  // console.log(median);

  var mean = (firstNumber + secondNumber + thirdNumber)/3;
  console.log(mean);
  var meanOutput = "Mean is = " + mean;

  var rangeOutput = function getRange(firstNumber, secondNumber, thirdNumber){
    var max = Math.max(firstNumber, secondNumber, thirdNumber), min = Math.min(firstNumber, secondNumber, thirdNumber);
    var range = max - min;
    return range;
  }
  var rangeString = "Range = " + rangeOutput(firstNumber, secondNumber, thirdNumber);

  var element1 = document.createElement('p');
  var element2 = document.createElement('p');
  var element3 = document.createElement('p');
  var element4 = document.createElement('p');
  var element5 = document.createElement('p');

  element1.innerHTML = maxOutput;
  element2.innerHTML = minOutput;
  element3.innerHTML = medianOutput;
  element4.innerHTML = meanOutput;
  element5.innerHTML = rangeString;

  results.appendChild(element1);
  results.appendChild(element2);
  results.appendChild(element3);
  results.appendChild(element4);
  results.appendChild(element5);
  
}

function resetCalculations(){
  var res = document.getElementById("calculations");
  var one = document.getElementById("one")
  var two = document.getElementById("two")
  var three = document.getElementById("three")
  res.innerHTML = "";
  one.innerHTML = "";
  two.innerHTML = "";
  three.innerHTML = "";
}
