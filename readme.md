
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() is used to select a single element by its unique id.

getElementsByClassName() selects all elements that have the same class name and returns a collection of elements.

querySelector() returns the first element that matches a CSS selector, while querySelectorAll() returns all matching elements.

2. How do you create and insert a new element into the DOM?

A new element can be created using document.createElement(). After creating it, content can be added and the element can be inserted into the DOM using methods like appendChild().

3. What is Event Bubbling? And how does it work?

Event bubbling is a process where an event starts from the target element and then moves upward through its parent elements.

For example, when a button inside a div is clicked, the event first occurs on the button and then bubbles up to the div and other parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where an event listener is attached to a parent element instead of attaching listeners to multiple child elements.

It is useful because it improves performance, reduces code duplication, and works with dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() prevents the browser's default behavior for an event.

stopPropagation() prevents the event from propagating to parent elements during event bubbling.