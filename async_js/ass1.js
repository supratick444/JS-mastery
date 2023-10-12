
// in this we are just gone  a learn simple concept of js .

//asyncronous js means it will start and other work will still go one and then it will end at the end .

// syncronous means each statement will work one after the other .  If in the middle it tries to go to retrieve result it .. the process slows down.
// Asyncronous means if the task a task taking lot of time it won't affect the other tasks .

console.log("Statement 1 ");
console.log("Statement 2 ");

 setTimeout(() => {
   console.log(" Call back function ");    
}, 2000);

// in the queue it gooes oneafter the other since it is asynchronous function
// so it doesn't affect the working of the other data.   

// at the end we calll that drwa back function and hence it excutes the original function .

console.log("Statement 3 ");
console.log("Statement 4 ");
console.log("Statement 5 ");

//it is synchronous so it excutes one after the other .

// the code you provided is asynchronous. The callback function(setTimeout etc) inside setTimeout is executed at a later time, and the rest of the code continues running in the meantime. This asynchronous behavior is crucial for non-blocking operations, allowing your program to remain responsive even when tasks take time to complete.


/* http request to Api  */

//XMLHTTP Request.

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     console.log(request, request.readyState);
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1`');  // status 1: opened 
// request.send();  // status 2: sent
 

/////////////////////////////////////////////////////////  unless html is implemented it will not run !!



