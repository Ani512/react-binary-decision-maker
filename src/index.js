'use strict';

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
    console.log( "Hello" );
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

class Header extends React.Component
{
    render ()
    {
        let header = (
            <div>
                <h1>{ app.title } </h1>
                { app.subtitle && <p>{ app.subtitle }</p> }
            </div> );
        return header;
    }
}   // This is a react component 

class Action extends React.Component
{
    render ()
    {
        let action = (
            <div>
                { app.options.length > 1 ? (
                    <button className="btn btn-success" style={ { marginLeft: "10px", marginBottom: "15px" } } onClick={ makeDecision }>What Should I do ?</button>
                ) : <p></p> }
                { app.options.length > 0 ? (
                    <button className="btn btn-danger" style={ { marginLeft: "10px", marginBottom: "15px" } } onClick={ deleteOptions }>Remove All Options</button>
                ) : <p></p> }
            </div> );
        return action;
    }
}

class Options extends React.Component
{
    render ()
    {
        let options = (
            <div>
                { app.options && app.options.length > 0 ? (
                    <div>
                        <p>Here are the Options </p>
                        <ol>{ app.display() }</ol>
                    </div>
                ) : <p>No Options</p> }
            </div>
        );
        return options;
    }
}

class AddOptions extends React.Component
{
    render ()
    {
        let addOptions = (
            <div>
                <form onSubmit={ onFormSubmit }>
                    <input type="text" name="options" placeholder="Task"></input>
                    <button className="options-btn btn-primary" style={ { marginLeft: "5px" } }>Add Options</button>
                </form>
            </div>
        );
        return addOptions;
    }
}

const reload = () =>
{
    const jsx = (
        <div>
            <Header />
            <Action />
            <Options />
            <AddOptions />
        </div>
    ); // <Header/> is how u render or call a react component 

    ReactDOM.render( jsx, document.getElementById( 'app' ) );
};

reload();