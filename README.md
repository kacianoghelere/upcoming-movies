# [Upcoming Movies Application](http://movindex.herokuapp.com/)

## Architecture
This is the front-end layer of the application. It's a SPA that allows the user to scroll a list of upcoming movies (with a "infinite scrolling"), search for other movies and get the details for a specific one. It's pretty simple.

I've separated the components from the pages and tried to focus in the separation of concerns, minding dumb components and business logic.

The data flows more or less like this:
1. The page calls a Redux action to fetch some data
2. The action triggers other actions asynchronously
3. The reducers are triggered when the action sould change their data
4. The page component is updated

## List of third-party libraries
I've builted the application with React the view renderer, Redux as the state manager, React-Router as the navigation manager, Boostrap as the visual framework and some other libs to better work with redux, like redux-thunk and react-redux.

## Issues
- [x] ~Cound not connect to the Heroku API because of some CORS issues.~
