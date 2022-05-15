// ==UserScript==
// @name     Trivia trainer keyboard
// @version  1
// @grant    none
// @description keyboard shortcuts on Trivia Trainer
// @include *www.trivia-trainer.com*
// ==/UserScript==

/**************************************
Usage:

Pressing the up arrow or t shows and hides the answer
Pressing the left arrow clicks the "correct" button
Pressing the down arrow clicks the "incorrect" button
Pressing the right arrow clicks the "don't know" button

Pressing the enter key has the following behaviour:
  -if the answer is hidden, reveal it
  -if the answer is shown, then click the "don't know" button
This is useful if you want to quickly go through questions
while you're not logged in by pressing only one key.
Obviously don't use this if you're logged in and don't want
to mess up your stats.


Other notes:
You can easily customize this script by messing around with
the "keyDown" function.

Don't be mad at me for using keycodes; I learned they were
deprecated AFTER I wrote this script.
**************************************/

var node = document.getElementById("Answer");
var button_correct   = document.forms[0].elements[3];
var button_incorrect = document.forms[0].elements[4];
var button_dontknow  = document.forms[0].elements[5];

// reveals and hides answer
// triggered by t or spacebar
function toggleAnswer()
{
  if (node.getAttribute("aria-expanded") == "true") {
      node.setAttribute("aria-expanded", "false");
  		node.setAttribute("class", "collapse");
	} else {
  		node.setAttribute("aria-expanded", "true");
  		node.setAttribute("class", "collapse in");
	}
}

// expands answer if hidden, submits with "don't know" if answer is revealed
// triggered by enter key
function forward()
{
  if (node.getAttribute("aria-expanded") == "true") {
    	button_dontknow.setAttribute("class", "quiz-answer"); // dumb hack to highlight button
      button_dontknow.click();
	} else {
  		node.setAttribute("aria-expanded", "true");
  		node.setAttribute("class", "collapse in");
	}
}

// submit with "correct", "incorrect", or "don't know"
// triggered by arrow keys
function submitAnswer(button)
{
  button.setAttribute("class", "quiz-answer");
  button.click();
}

function keyDown(evt)
{
  switch (evt.keyCode) {
    case 84: // t
      toggleAnswer();
      break;
    case 38: // up arrow
      evt.preventDefault();
      toggleAnswer();
      break;
    case 13: // enter
      forward();
      break;
    case 37: // left arrow
      submitAnswer(button_correct);
      break;
    case 40: // down arrow
      evt.preventDefault();
      submitAnswer(button_incorrect);
      break;
    case 39: // right arrow
      submitAnswer(button_dontknow);
      break;
  }

}

document.addEventListener('keydown', keyDown, true);
