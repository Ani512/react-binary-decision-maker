'use strict';

console.log( `App is Running` );

// JSX == Javascript HTML 
// JSX is just like how Sass is a language extension for CSS

const app = {
    title: 'Binary App',
    subtitle: 'Making Binary Decisions for Indecisive People just like You',
    options: [],
    display ()
    {
        let arr = [];
        for ( let pos of this.options )
        {
            arr.push( <li key={ this.options.indexOf( pos ) }>{ pos }</li> );
        }
        return arr;
    }
};

const onFormSubmit = ( e ) =>
// the 'e' object contains various information about the events 
{
    // When you submit a form, React will load the whole page and change the URL address to take you to that form.
    // To prevent that from happening, you can use preventDefault() function 
    e.preventDefault();
    // console.log( 'Form Submitted' );
    const option = e.target.elements.options.value;
    if ( option ) app.options.push( option );
    e.target.elements.options.value = '';
    reload();
};

const deleteOptions = () =>
{
    app.options = [];
    reload();
};

const makeDecision = () =>
{
    const randomNum = Math.floor( Math.random() * app.options.length );
    alert( app.options[ randomNum ] );
};

// var template = React.createElement( "p", { id: "firstP" }, "This is JSX from app.js ! " );   // All JSX needs to be stored as JS variables
// p is the paragraph tag // all classes and ID's are stored in the second place // The actual content comes in last  

const appRoot = document.getElementById( 'app' );     // All DOM stuff needs to be stored as JS variables

const reload = () =>
{
    // All the HTML needs to be inside this template variable.
    const template = (
        <div style={ { marginLeft: "25px" } }>
            <h2>{ app.title } </h2>
            { app.subtitle && <p>{ app.subtitle }</p> }
            { app.options.length > 0 ? (
                <button className="btn btn-success" style={ { marginLeft: "10px", marginBottom: "15px" } } onClick={ makeDecision }>What Should I do ?</button>
            ) : <p></p> }
            <button className="btn btn-danger" style={ { marginLeft: "10px", marginBottom: "15px" } } onClick={ deleteOptions }>Remove All Options</button>
            { app.options && app.options.length > 0 ? (
                <div>
                    <p>Here are the Options </p>
                    <ol>{ app.display() }</ol>
                </div>
            ) : <p>No Options</p> }
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="options" placeholder="Task"></input>
                <button className="options-btn btn-primary" style={ { marginLeft: "5px" } }>Add Options</button>
            </form>
        </div>
    );
    // All the event handlers like - onClick, onSubmit are available on React Docs 

    ReactDOM.render( template, appRoot );   // Rendering(displaying) this to the screen 
};

reload();
