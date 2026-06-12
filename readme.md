# Job Application Tracker

## Live Site


## GitHub Repository


## Project Overview

Job Application Tracker is a simple web application that helps users keep track of job applications. Users can view available jobs, mark jobs as Interview or Rejected, switch between tabs to see filtered jobs, and remove jobs from the list. The dashboard updates automatically to show the latest counts.


## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

`getElementById()` is used to select a single element by its unique id.

`getElementsByClassName()` selects all elements that have the same class name and returns an HTMLCollection.

`querySelector()` returns the first element that matches a CSS selector.

`querySelectorAll()` returns all matching elements and provides them as a NodeList.


## 2. How do you create and insert a new element into the DOM?

A new element can be created using `document.createElement()`. After creating it, we can add content and insert it into the page using methods like `appendChild()`.

Example:

const div = document.createElement("div");
div.textContent = "Hello World";
document.body.appendChild(div);


## 3. What is Event Bubbling? How does it work?

Event bubbling is a behavior in JavaScript where an event starts from the element that was clicked and then moves upward through its parent elements.

For example, if a button is placed inside a div and the button is clicked, the click event first happens on the button and then bubbles up to the div.



## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where an event listener is added to a parent element instead of adding separate listeners to multiple child elements.

It is useful because it reduces the number of event listeners, improves performance, and works well with dynamically created elements.


## 5. What is the difference between preventDefault() and stopPropagation()?

`preventDefault()` stops the browser's default action from happening.

Example: preventing a form from submitting automatically.

`stopPropagation()` prevents an event from moving up to parent elements during event bubbling.

Example: stopping a parent click event from being triggered when a child element is clicked.


## Technologies Used

* HTML
* CSS
* JavaScript



## Features

* Dashboard with statistics
* Dynamic job card rendering
* Interview and Rejected status tracking
* Tab-based filtering
* Empty state handling
* Delete functionality
* Responsive design
