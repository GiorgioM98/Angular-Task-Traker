# AngularApp

Questo progetto consiste nel creare un Task Traker personale che ha il compito di tener conto delle varie attività inserite, con tanto di data e ora!
In questo progetto, utilizziamo db.json insieme a json-server per simulare un backend RESTful per il nostro progetto Angular. Questo README spiega come avviare e utilizzare json-server per testare l'applicazione localmente.


## Table of Contents
### Introduction
### Structure
### Technologies used
### Usability


## Introduction

REQUISITI:

Prima di iniziare, assicurati di avere installato Node.js sul tuo computer. 

INSTALLAZIONE:

1. Clona questo repository sul tuo computer: git clone https://github.com/GiorgioM98/Angular-Task-Traker.git
2. Naviga nella directory del progetto: cd Angular-Task-Traker
3. Installa le dipendenze del progetto eseguendo: npm install

UTILIZZO DI DB-JSON CON JSON-SERVER: 

''json-server'' è uno strumento che ci consente di creare un server RESTful utilizzando un file JSON come nostro "database". Ecco come farlo funzionare:

1. Assicurati di essere nella directory principale del progetto.
2. Esegui il seguente comando per avviare il server json-server e utilizzare db.json come database: json-server --watch db.json --port 5000

* --watch db.json: Questa opzione indica a json-server di monitorare il file db.json per apportare eventuali modifiche e rifletterle nel server.
* --port 5000: Specifica la porta su cui json-server sarà in ascolto. Puoi modificare questo valore in base alle tue esigenze, ma assicurati che non sia in conflitto con altre applicazioni in esecuzione sulla stessa porta.



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
