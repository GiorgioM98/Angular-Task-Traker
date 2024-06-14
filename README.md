# Task Traker

This project consists of creating a personal Task Tracker which has the task of taking into account the various activities entered, complete with date and time!
In this project, we use db.json together with json-server to simulate a RESTful backend for our Angular project. This README explains how to start and use json-server to test your application locally.


## Table of Contents
### Introduction
### Structure
### Technologies used
### Usability


## Introduction

REQUIREMENTS:

Before you get started, make sure you have Node.js installed on your computer.

INSTALLATION:

1. Clone this repository on your computer: git clone https://github.com/GiorgioM98/Angular-Task-Traker.git
2. Navigate to the project directory: cd Angular-Task-Traker
3. Install the project dependencies by running: npm install

USING DB-JSON WITH JSON-SERVER:

''json-server'' is a tool that allows us to create a RESTful server using a JSON file as our "database". Here's how to make it work:

1. Make sure you are in the root directory of the project.
2. Run the following command to start the json-server server and use db.json as the database: json-server --watch db.json --port 5000

* --watch db.json: This option tells json-server to monitor the db.json file for any changes and reflect them to the server.
* --port 5000: Specify the port that json-server will listen on. You can change this value to suit your needs, but make sure it does not conflict with other applications running on the same port.


## Structure

The project structure is governed by the classic angular structure.
It is made up of the various components that perform the various functions.

The components are in turn made up of 3 main files:

.../component.html
.../component.ts
.../component.css


## Tecnology used

I used several technologies to create this AngularApp:

Visual Studio Code, as editor for writing the code.
Html to create the structure of project.
Typescript for the various added features.
Css to add a touch of personal class.
With json-server and db.json, we created a simple RESTful server for our Angular project, allowing us to test the application locally without having to set up a full backend server.


## Usability

The application is used in a very simple and logical way.
Once the db.json has been started using the commands listed above and the server has been started using ''ng serve --open'', we will have the main screen available with the activities deriving from the database and an ''Add'' button for add other activities.
Input fields include the activity and also the date and time, as well as the ''Reminder'' box.
By double clicking on an activity you can set the ''Reminder'' to ''true'' or ''false''.
The app also includes an ''About'' section for more info.
