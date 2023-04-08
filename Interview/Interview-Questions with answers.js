//----------------------------------------------------------------------------------------------------------------------------------------------
https://stackoverflow.com/questions/3397161/should-i-use-document-createdocumentfragment-or-document-createelement
//----------------------------------------------------------------------------------------------------------------------------------------------
Q: Should I use document.createDocumentFragment or document.createElement ?
  
 Ans : The difference is that a document fragment effectively disappears when you add it to the DOM. What happens is that all the child nodes of the document fragment are inserted at the location in the DOM where you insert the document fragment and the document fragment itself is not inserted. 
 The fragment itself continues to exist but now has no children.
 //----------------------------------------------------------------------------------------------------------------------------------------------
