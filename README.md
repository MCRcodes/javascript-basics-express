# JavaScript Basics in Express

This is a Manchester Codes bootcamp exercise with the overall objective of creating an API which makes some previously written code (from the JavaScript Basics module) accessible through HTTP.

## Learning Objectives

To be able to answer "yes" to the following questions:

- Are you able to explain what a Web API is and why we need them?
- Can you create a web server using Express?
- Can you create routes in an Express application to direct requests to a controller function?
- Do you understand what is meant by the term middleware?
- Can you retrieve route params, query params and body params from a HTTP request in an Express app?
- Can you send a HTTP response with a custom status code and body using Express?
- Can you explain the difference between an end-to-end (E2E) test and a unit test?

*taken from the Manchester Codes website*

___

## Project Overview 

In the `lib` folder you can find all the functions that have been made available through this API. They cover basic operations you can do on arrays, booleans, numbers, and strings. (Not all of the functions for each have been utilised in this project).

This project came with pre-written tests you can find in the `__tests__` folder. These tests use [supertest](https://www.npmjs.com/package/supertest) to make requests to our server and return the result for verification. This type of testing is called end-to-end (E2E) because it tests a process from start to finish.  In this case, that means from the client's request to, for example, remove the 4th element from an array, through to the response given, which would be the array with the 4th element removed.

To pass the tests, the task was to create a web server, and set up routes and controller functions. At first I wrote everything in `app.js`, but later I separated out the routes and controllers into separate files and folders to practise organizing a project more modularly. In order to maintain routing for the app, middleware functions (`app.use...`) are employed.

In the `routes` folder the paths are set and the relevant controller function passed in. Controller functions are responsible for grabbing the data from the request and passing it to a business logic function and returning the result, i.e., the response.


--- 

## Using this repo

To try it out yourself, fork and clone this repo. 
In your terminal, in the project folder run `npm i`. 
To run the tests: `npm t`.

In `index.js` you'll see the port for the server to run on is set to 3000: `const APP_PORT = 3000;` on line 3. If you want to use a different port simply change this value.

You can also test the API with [Postman](https://www.postman.com):  Here's a handy [guide](https://www.srijan.net/blog/manual-api-testing-using-postman).



---

### Authors

Anna Balquin


### Acknowledgements

[Manchester Codes](https://www.manchestercodes.com) :v:
