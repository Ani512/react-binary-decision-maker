'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    console.log("Hello");
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

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var header = React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    app.title,
                    ' '
                ),
                app.subtitle && React.createElement(
                    'p',
                    null,
                    app.subtitle
                )
            );
            return header;
        }
    }]);

    return Header;
}(React.Component); // This is a react component 

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            var action = React.createElement(
                'div',
                null,
                app.options.length > 1 ? React.createElement(
                    'button',
                    { className: 'btn btn-success', style: { marginLeft: "10px", marginBottom: "15px" }, onClick: makeDecision },
                    'What Should I do ?'
                ) : React.createElement('p', null),
                app.options.length > 0 ? React.createElement(
                    'button',
                    { className: 'btn btn-danger', style: { marginLeft: "10px", marginBottom: "15px" }, onClick: deleteOptions },
                    'Remove All Options'
                ) : React.createElement('p', null)
            );
            return action;
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var options = React.createElement(
                'div',
                null,
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
                )
            );
            return options;
        }
    }]);

    return Options;
}(React.Component);

var AddOptions = function (_React$Component4) {
    _inherits(AddOptions, _React$Component4);

    function AddOptions() {
        _classCallCheck(this, AddOptions);

        return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
    }

    _createClass(AddOptions, [{
        key: 'render',
        value: function render() {
            var addOptions = React.createElement(
                'div',
                null,
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
            return addOptions;
        }
    }]);

    return AddOptions;
}(React.Component);

var reload = function reload() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Action, null),
        React.createElement(Options, null),
        React.createElement(AddOptions, null)
    ); // <Header/> is how u render or call a react component 

    ReactDOM.render(jsx, document.getElementById('app'));
};

reload();
