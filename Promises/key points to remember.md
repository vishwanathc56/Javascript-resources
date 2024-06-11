# Key Points to Remember:

### Synchronous Code:
   All synchronous code is executed first, line by line, in the order it appears.
   
   This code runs to completion before any asynchronous code is executed.
   
### Microtasks (Microtask Queue):

    Microtasks include promise .then and .catch handlers, process.nextTick in Node.js, and MutationObserver.
    
    Microtasks are executed after the current synchronous code completes and before the event loop checks the macrotask queue.
    
    If new microtasks are added while processing the current microtasks, they will be executed before moving to the macrotask queue.
    
### Macrotasks (Callback Queue):

    Macrotasks include setTimeout, setInterval, setImmediate (Node.js), and I/O operations.
    
    Macrotasks are executed after all synchronous code and microtasks have been processed.
    
    The event loop will check the macrotask queue once the call stack is empty and no more microtasks are pending.
    
## Execution Order Summary:
### 1. Synchronous code runs first.
### 2. Microtasks run next.
        Promises (.then, .catch, .finally)
        process.nextTick (Node.js)
        MutationObserver callbacks
### 3. Macrotasks run last.
        setTimeout, setInterval
        setImmediate (Node.js)
        I/O operations (e.g., file system operations, network requests)

