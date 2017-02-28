// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//
// A sample callback we will use to test your code is:
// const callback =  function (error, sum) {
//   if (error || sum !== 88) {
//     error = error || new Error(`sum is ${sum}`);
//   }
//
//   done(error);
// };
//
// Use `grunt test` to test your code.

'use strict';

const fs = require('fs'); // jshint ignore: line

const sumLines = (filename, callback) => {
fs.readFile(filename, 'utf-8',(error, data) =>{
  if (error) {
    console.log(error.stack);
    return;
  }
  let dataArray = data.split('\n');
 dataArray = dataArray.slice(0, dataArray.length - 1);

const callback = function(error, sumLines);
});
  callback();
};

module.exports = {
  sumLines,
};
