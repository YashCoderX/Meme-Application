# Meme Application

## By Yash Agarwal

The Meme application is a full stack Meme Stream Application built using the `MERN` stack.  
A user may enter his/her name, a suitable caption along with an image URL.  
The entered information will be posted as a meme on the Page.  
The Page displayes a list of latest 100 memes posted, in reverse chronological order.  
The user may also edit the Caption and Image URLs of all the other memes posted on the Page.

The source files are divided into frontend and backend directories

<details open>
<summary>Directory Structure and explanation</summary>

```
├── backend
│   ├── app.js      -> entry point in node application
│   ├── db.js       -> controls and manages connection to local databse
│   ├── routes
│   │   └── memes.js        -> middleware for handling different requests at all the endpoints
│   ├── src
│   │   ├── controller
│   │   │   └── memeController.js       -> application controller
│   │   └── model
│   │       └── memeModel.js        -> defines database model and schema
│   └── swagger.json        -> contains info about the Swagger API documentation
├── frontend
│   ├── public      -> folder for all the static files
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── template.jpg
│   └── src
│       ├── App.css     -> stores styling information for the application
│       ├── App.js      -> Parent Component of the React Application
│       ├── Components
│       │   ├── EditForm.js     -> Component for the Form data displayed when a user clicks Edit a Meme button
│       │   ├── Form.js     -> Component to display and manage the Form to be filled to Create and Post a meme to the page
│       │   ├── Meme.js     -> Component to display and manage each individual meme on the page
│       │   └── Memes.js        -> Component built as a wrapper over the Meme component
│       ├── index.css
│       ├── index.js        -> entry point in the React Application
│       └── serverLocation.js       -> stores the URLs of backend server as well as the SwaggerUI
└── README.md

```

</details>

<details open>
<summary>Frontend Appearance</summary>
The Frontend looks as such :

```

____________________
|                   |               with each 'MEME' Component encompassing an
|       FORM        |               EditForm Component.
|___________________|
|       MEMES       |               ________________
|      ________     |               |     Card      |
|     |  MEME |     |               |_______________|
|     |_______|     |               |   EditForm    |
|      ________     |               |_______________|
|     |  MEME |     |
|     |_______|     |
|      ________     |
|     |  MEME |     |
|     |_______|     |
|___________________|

```

</details>

I have tried my best to keep the Code modularised and oriented. <br>

The backend has been build keeping in mind the MVC pattern. <br>
The API information and documentation can be found at https://localhost:8080/swagger-ui/ <br>

##### Dependencies :

- nodejs
- mongodb

```
- Clone the repository
cd backend; npm install
node app.js
cd ../frontend
npm start
```

The backend server runs on http://localhost:8080
The swagger documentation is available at http://localhost:8080/swagger-ui  
The frontend runs on http://localhost:3000
