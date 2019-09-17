# KidPlex

Welcome to KidPlex! KidPlex is a single page clone of Netflix, the world's largest video streaming platform. With KidPlex, users can create accounts, log in, browse our selection of kid friendly video titles broken down by genre, and view their favorite videos from anywhere with a web connection. In this README, we provide an overview of the features available in KidPlex along with information regarding the technologies used to implement the app.

[Live Demo](https://kidplex.herokuapp.com/

## Overview
## Technologies used
 * Javascript
 * Ruby on Rails
 * PostgreSQL
 * HTML
 * SCSS/CSS
 * GIMP (for image manipulation)
 * HandBrake (for video manipulation)

## Libraries used:

* React.js (incl. react-router-dom)
* Redux (incl. react-redux, redux-thunk middleware)
* jQuery for Ajax calls to my API
* Bcrypt for user authorization
* AWS S3 to store video assets including poster images, trailers, and video files

### Splash Component & Login/Signup Components
Our end users first arrive to the splash component, which allows the users to sign up or sign in:

Splash Page
![Splash Page](https://raw.githubusercontent.com/burnwatt/kidplex/master/splash.png)

Sign In
![Sign In](https://raw.githubusercontent.com/burnwatt/kidplex/master/signin.png)

### Browse
The Browse (or video show) component serves as the focal point of the application. From this component, the user can access the entire library of videos categorized by genre. The user is first presented with a featured "hero" video, typically showcasing a new release or trending video on the application:
![Browse Component](https://raw.githubusercontent.com/burnwatt/kidplex/master/browse.png)

### Watch
Our video show page, the Watch component, is the core of the application. The application makes a single request to our database to pull the corresponding video url for the video selected. Each URL points to a corresponding asset hosted on AWS.
![Watch Component](https://raw.githubusercontent.com/burnwatt/kidplex/master/watch.png)

### Genres
User experience is crucial to a video application. For this reason, consideration must be made to ensure that our users can easily locate the best titles suited for them. Netflix (and now KidPlex) uses a simple carousel of selected titles based on both traditional movie genres as well as genres tailored to user demographics.
![Genre Component](https://raw.githubusercontent.com/burnwatt/kidplex/master/genres.png)
