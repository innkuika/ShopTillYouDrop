# Shop Till You Drop

Shop for a year of college by putting items into your shopping cart and then tally up the bill when you check out. Pick a school, and see if you can get financial aid. 

## Note for grader
Replit is running pretty slow on both ends, for best experience I would reccomend running it both the client and server locally. Only thing that needs to be changed should be the hmr port number (change it to 4000) and the url (localhost 4000) in `vite.config.js`

## How it works
- Before the server starts serving, it will querry all info needed for later stages and save a list of name and id of valid schools (schools which don't have null datapoints) in its memory. 
  - The server tries to get 100 items at a time, if it gets an error, it will sleep for 3000ms and retry. It will start serving when it has a list of schools.
  - This takes some time, if client tries to access server before it's ready, they will be shown a page that tells them the server is not ready yet.
- Client will querry a list of valid school from the server, and ask user to choose one of them, and send the selected school's id back to server in the querry param
  - Server will make an API call to querry the prices and details with the given id and send it back to client once it has it
    - if server encountered an error, it will send an error message back to the client, the client will then display a error page telling the user to try again
  - The chosen school is saved on the client's side, if user refreshes the page they will be redirected back to the home page as we no longer know his/her choice


## Libraries 
- react-select-search for drop down and fuzzy search (https://www.npmjs.com/package/react-select-search)
- react-router for navigation (https://reactrouter.com)
- three-dots for loading screen (https://github.com/nzbin/three-dots)
