# Widgets Single Page App Demo
This is a simple multi-page HTML site. The goal of this project is to take this hardcoded HTML site, and make it hit an API for showing/listing user and widget information.

# Notes
To accomplish this task I chose to use Angular for the front-end framework. It is what I am most comfortable in, and it allow me to complete the task in a simple, timely manner.

Normally I would split the controllers up in their own individual files to remain organized and modular, but for the convenience of the viewer to read through the code, I included these all in a single file.

Also, I had an issue with the API and it accepting a false value for the melts attribute. Whether it was hard-coded, or acquired from the form, it would fail if the value equalled true.

# Steps to Run this Application

- Download the project and open in the desired IDE.
- Navigate to the folder in your terminal/command line.
- Run the command 'npm install' in your terminal/command line.
- Run the command 'bower install' in your terminal/command line.
- Run the command 'nodemon' to start the server and run the Application.
- The application is configured to run on http://localhost:5000/.



## Features
- A user view that displays a list of users (data via api `/users`), each user should have a method of clicking to viewing all the details of that user (`/user/:id`)
- A widget view that displays a list of widgets (`/widgets`), each widget should have a method of clicking to view the details of that widget (`/widget/:id`)
- A search/filter on the user and widget list views
- A method of creating a new widget (POST `/widgets`)
- A method of updating an existing widget (PUT `/widgets/:id`)


# API Documentation
There's an API available at `http://spa.tglrw.com:4000` for retrieving the data used to make this app. The hard-coded data in the existing HTML is only a placeholder for style. The API returns and expects to receive JSON-encoded data.


## The endpoints are as follows:
- GET `/users` [http://spa.tglrw.com:4000/users](http://spa.tglrw.com:4000/users)
- GET `/users/:id` [http://spa.tglrw.com:4000/users/:id](http://spa.tglrw.com:4000/users/:id)
- GET `/widgets` [http://spa.tglrw.com:4000/widgets](http://spa.tglrw.com:4000/widgets)
- GET `/widgets/:id` [http://spa.tglrw.com:4000/widgets/:id](http://spa.tglrw.com:4000/widgets/:id)
- POST `/widgets` for creating new widgets [http://spa.tglrw.com:4000/widgets](http://spa.tglrw.com:4000/widgets)
- PUT `/widgets/:id` for updating existing widgets [http://spa.tglrw.com:4000/widgets/:id](http://spa.tglrw.com:4000/widgets/:id)
