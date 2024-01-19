# CandyComment

[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)](https://sequelize.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL2](https://img.shields.io/badge/MySQL2%20v2.3.0-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.npmjs.com/package/mysql2)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)

## Description🍬

Candy Comment is a web application that allows users to create, view, and interact with blog posts and comments. Users can register, log in, and share their thoughts through comments on various blog posts. Below is an overview of the application's functionality and the structure of the code.

## Content ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 

- [Deploy](#deploy)
- [Features](#Features)
- [Screenshots](#Screenshots)
- [Installation](#Installation)
- [Usage](#Usage)
- [Dependencies](#Dependencies)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Link of deployed application

- https://obscure-springs-09885-d317ca652a50.herokuapp.com

## Features

1. Homepage
- View a list of blog posts with user information.
- Click on a blog post to view details.
2. Blog Post Details
- View a specific blog post along with associated user information and comments.
3. User Profile
- Access a user profile page.
- View user details and their authored blog posts.
4. Login
- Users can log in to the application.
- If already logged in, they are redirected to their profile.
5. Comment Section
- Users can leave comments on blog posts.
- Comments include user information.

## Screenshots of application

### Welcome screen

![Alt text](./screenshots/first.png "Welcome screen")

### Login page

![Alt text](./screenshots/2.png "Login page")

### Profile page

![Alt text](./screenshots/3.png "Profile page")

### Post Blog page

![Alt text](./screenshots/4.png "Post Blog page")

### Comments page

![Alt text](./screenshots/5.png "Comments page")



## Installation

Follow these steps to set up the Candy Comment App on your local machine:

1. Clone the repository;
2. Install dependencies;
3. Set up your database;

## Usage

- Clone the repository onto your local workstation
- Open the integrated terminal and use command npm i to install the node.js modules
- In your command line, log in to mysql by using the command: mysql -uroot -p and enter your password
    - In mysql, source the database by using the command: source ./db/schema.sql
    - Exit mysql by using the command: exit
- Seed the application by using the command: node seeds/index.js
- Use command npm start to run the server locally.
- Open the application in your web browser.

## Dependencies

- "bcrypt": "^5.0.0",
- "connect-session-sequelize": "^7.0.4",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "express-handlebars": "^5.2.0",
- "express-session": "^1.17.1",
- "mysql2": "^2.2.5",
- "sequelize": "^6.3.5"

## Contributing

Contributions are welcome!

## Questions
If you have any questions or issues, please feel free to reach out:
- GitHub: https://github.com/DamirFM
