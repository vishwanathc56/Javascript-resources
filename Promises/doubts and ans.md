"setTimeout Callback: Added to the callback queue after 1000 milliseconds." why after 1sec , why not the executor adds it to cb que the moment it sees it? 
if not added then where they go ? i am getting confusion. 

That's a great question! Let's clarify how asynchronous operations like setTimeout work in JavaScript.

When you call setTimeout, you're telling JavaScript to execute a particular function after a specified delay. 
JavaScript engines, like V8 in Chrome or SpiderMonkey in Firefox, handle asynchronous operations by executing them separately from the main execution thread.

Here's a breakdown of what happens:

When you call setTimeout, the provided function and delay are handed over to the browser's engine, which sets a timer for the specified delay.

The browser engine doesn't immediately execute the function provided to setTimeout. Instead, it schedules it to be executed after the specified delay.

During this time, JavaScript continues executing any synchronous code that follows the setTimeout call.

When the specified time elapses, the browser engine places the function provided to setTimeout into the callback queue.

The event loop, which is a part of the JavaScript engine, constantly checks if the call stack is empty. 
If it is, it takes the first function from the callback queue and pushes it onto the call stack for execution.

The function from the callback queue is then executed.

So, to address your question directly: the function provided to setTimeout isn't immediately added to the callback queue because that would mean it would execute synchronously, which defeats the purpose of an asynchronous operation. 
Instead, it's scheduled to run after the specified delay, and then it's added to the callback queue once that delay has passed.
