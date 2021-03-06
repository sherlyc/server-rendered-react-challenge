# Render react on the server

This is a simple react app which displays 3 todo items using redux. We want to use server side rendering so that the initial page load comes with the full html.

[Video overview of challenge](https://youtu.be/riGaWNCAgU8) and [Sample solution live coding](https://youtu.be/tylcm4UQLaY) - you can also check out the solution branch.

# Setup

```javascript
  yarn 
  yarn dev
```
This will launch the react / redux app with webpack dev server.

```javascript
  yarn start
```
Will launch express so we can play with server side rendering

The tests can be run with `yarn test`

### Step 1: Return the html of the react app on the GET '/' express route

Uncomment the first skipped test in server-test.js and send back the html of the rendered react app.

### Step 2: Ensure that the app still functions

Uncomment the second skipped test that checks to see if delete still works. Make sure you are sending the bundle.js back in the html.

### Step 3: Shuffle the tasks on the server

In the server shuffle the tasks before setting the state for React (checkout the shuffle function in src/utils/shuffle.js). You will need to send back the redux state from the server as well as the html and in the redux createStore client side code initialise the store with the state passed from the server.

### Step 4: Add the ability to create a task in React

Keep up the test coverage.

### Step 5: Save a copy of the state on the server so it is maintained on page reload
Whenever the state changes on the client side send a copy to the server so that when you refresh the page you won't lose your state.

### Step 6: Ensure your server is protected against XSS attacks

Read the resource below on security when rendering server side code and ensure your app is secure.

## Resources

* [Create React App](https://github.com/facebookincubator/create-react-app/)
* [Nightmare end to end testing](http://nightmarejs.org/)
* [Redux server rendering docs](http://redux.js.org/docs/recipes/ServerRendering.html)
* [Security considerations](http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations)
* [More on security](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0)
