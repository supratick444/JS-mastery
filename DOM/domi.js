var a = document.getElementsByClassName( 'un3');

console.log(a);

var b = document.querySelector('li');

/*query selector bass ek e selet karega  */
/* HTML collection is done with common class name  which is not an array since it has absence of the features of array */
/* to convert the html collection to array we can do : Array.from(b);   */

console.log(b);

var c = document.querySelectorAll('#mama');

/* selector all gives node list which has for each for traversal */

console.log(c);



