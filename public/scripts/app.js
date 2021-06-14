'use strict';

console.log('App is Running');

// JSX == Javascript HTML 
// JSX is just like how Sass is a language extension for CSS

var app = {
    title: 'Binary App',
    subtitle: 'Making Binary Decisions for Indecisive People just like You',
    options: [],
    display: function display() {
        var arr = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = this.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var pos = _step.value;

                arr.push(React.createElement(
                    'li',
                    { key: this.options.indexOf(pos) },
                    pos
                ));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return arr;
    }
};

var onFormSubmit = function onFormSubmit(e)
// the 'e' object contains various information about the events 
{
    // When you submit a form, React will load the whole page and change the URL address to take you to that form.
    // To prevent that from happening, you can use preventDefault() function 
    e.preventDefault();
    // console.log( 'Form Submitted' );
    var option = e.target.elements.options.value;
    if (option) app.options.push(option);
    e.target.elements.options.value = '';
    reload();
};

var deleteOptions = function deleteOptions() {
    app.options = [];
    reload();
};

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
};

// var template = React.createElement( "p", { id: "firstP" }, "This is JSX from app.js ! " );   // All JSX needs to be stored as JS variables
// p is the paragraph tag // all classes and ID's are stored in the second place // The actual content comes in last  

var appRoot = document.getElementById('app'); // All DOM stuff needs to be stored as JS variables

var reload = function reload() {
    // All the HTML needs to be inside this template variable.
    var template = React.createElement(
        'div',
        { style: { marginLeft: "25px" } },
        React.createElement(
            'h2',
            null,
            app.title,
            ' '
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        app.options.length > 0 ? React.createElement(
            'button',
            { className: 'btn btn-success', style: { marginLeft: "10px", marginBottom: "15px" }, onClick: makeDecision },
            'What Should I do ?'
        ) : React.createElement('p', null),
        React.createElement(
            'button',
            { className: 'btn btn-danger', style: { marginLeft: "10px", marginBottom: "15px" }, onClick: deleteOptions },
            'Remove All Options'
        ),
        app.options && app.options.length > 0 ? React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Here are the Options '
            ),
            React.createElement(
                'ol',
                null,
                app.display()
            )
        ) : React.createElement(
            'p',
            null,
            'No Options'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'options', placeholder: 'Task' }),
            React.createElement(
                'button',
                { className: 'options-btn btn-primary', style: { marginLeft: "5px" } },
                'Add Options'
            )
        )
    );
    // All the event handlers like - onClick, onSubmit are available on React Docs 

    ReactDOM.render(template, appRoot); // Rendering(displaying) this to the screen 
};

reload();
