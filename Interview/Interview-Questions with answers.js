//----------------------------------------------------------------------------------------------------------------------------------------------
https://stackoverflow.com/questions/3397161/should-i-use-document-createdocumentfragment-or-document-createelement
//----------------------------------------------------------------------------------------------------------------------------------------------
Q: Should I use document.createDocumentFragment or document.createElement ?
  
 Ans : The difference is that a document fragment effectively disappears when you add it to the DOM. What happens is that all the child nodes of the document fragment are inserted at the location in the DOM where you insert the document fragment and the document fragment itself is not inserted. 
 The fragment itself continues to exist but now has no children.
 //----------------------------------------------------------------------------------------------------------------------------------------------

 Q : What are differences between scope chain and closures ?
   
 Q : What are differences between Regular Function & Arrow Function inJavascript ?
   
 //----------------------------------------------------------------------------------------------------------------------------------------------
  
  Q : Give an example for callback function .
  
  function getUserData(userId, callback) {
    // Make an HTTP request to get user data
    // Once the data is retrieved, call the callback function with the data
    const userData = { name: 'John', age: 30 };
    callback(userData);
  }

  getUserData(123, function(userData) {
    console.log('User data:', userData);
  });   

                  //---------------or---------------//
                  
  // function
  function greet(name, callback) {
      console.log('Hi' + ' ' + name);
      callback();
  }

  // callback function
  function callMe() {
      console.log('I am callback function');
  }

  // passing function as an argument
  greet('Peter', callMe);
  
                                         //---------------or---------------//
  
  const modifyArr = (arr, cb)=>{
    arr.push(4);
    cb();
  }

  const arr = [1,2,3];
  modifyArr(arr, ()=>{
      console.log(arr);
  })
