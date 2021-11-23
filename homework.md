// Ep 1

// It will return the value assigned to 'Murderer' in the scenario variable. 
// This is the result of the declareMurderer function, which can run because it 
// is only showing the information,not attempting to alter it.

// Ep 2

// It will print verdict 1 as Prof Plum and verdict 2 as Mrs P. 
// Because it treats the first let murderer as a different varianble 
// becasue the one inside the declareMurderer function/variable only 
// has scope within the code block it is in. (Just ran it and they are 
// flipped as the function was run first)

// Ep 4

// It will print the suspects but with 3 changed to Col Mustard. Because 
// it can declare a new suspectThree variable within the code block (uses the 
// local one first) and then uses the global values from above for the other suspects.
// Then it will print 'Mrs Peacock" because the original suspectThree variable was never changed.

// // Ep 5

// It will print the original weapon, Candle Stick, 
// because a constant cannot be updated. (I just checked and it changes to revolver... 
// I suppose this is because apparently it's ok to mutate a dict. Struggling to get this.)

// Ep 6

// It will print the murderer is Mrs White. Seems uncontroversial.

// Ep 7

// Will either error at plotTwist or ignore it because you cannot redeclare a let.
// (I just ran it and I am not sure why it doesn't run unexpectedOutcome?)

// Ep 8

// The weapon is candlestick. Because dicts are mutatable.

// Ep 9

// Murderer is Prof Plum because the murderer declaration within the if statement
// declares a new variable that only has scope within the if statement, then the
// declareMurderer function/variable uses the only variable it can see called murderer
// within it's scope and uses that.

// Ep 10
// const murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// It will error because a const cannot be changed.