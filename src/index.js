'use strict';

console.log( `App is Running` );

// JSX == Javascript HTML 
// JSX is just like how Sass is a language extension for CSS

var template = <p id="firstP">This is JSX </p>;
// var template = React.createElement( "p", { id: "firstP" }, "This is JSX from app.js ! " );   // All JSX needs to be stored as JS variables
// p is the paragraph tag // all classes and ID's are stored in the second place // The actual content comes in last  
var appRoot = document.getElementById( 'app' );     // All DOM stuff needs to be stored as JS variables

ReactDOM.render( template, appRoot );   // Rendering(displaying) this to the screen 

