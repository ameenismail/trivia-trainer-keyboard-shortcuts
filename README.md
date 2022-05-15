# trivia-trainer-keyboard-shortcuts
Enable keyboard shortcuts on the [Trivia Trainer website](http://www.trivia-trainer.com/).

### Installation
Like any userscript, you'll first need a userscript manager such as Greasemonkey. Then create a new userscript, copy into it the contents of `file.js`, and save it.

### Usage

Arrow keys:  
* Pressing the up arrow or the t key shows and hides the answer.
* Pressing the left arrow clicks the "correct" button
* Pressing the down arrow clicks the "incorrect" button
* Pressing the right arrow clicks the "don't know" button

Pressing the enter key has the following behaviour:  
* if the answer is hidden, reveal it
* if the answer is shown, then click the "don't know" button  

This is useful if you want to quickly go through questions while you're not logged in by pressing only one key.
Obviously don't use this if you're logged in and don't want to mess up your stats.

### Customizing
It should be easy to customize the shortcuts to whatever keys you like. Just mess around with the keyDown() function.  
You can find keycodes [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).
