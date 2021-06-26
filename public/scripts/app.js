'use strict';

// Class Based COMPONENTS //

// STATEFUL 

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.state = {
            options: [],
            answer: ''
        };
        return _this;
    }
    // You can either define the function of another class here or inside that function 


    _createClass(IndecisionApp, [{
        key: 'handlePick',
        value: function handlePick() {
            var _this2 = this;

            this.setState(function () {
                var ans = _this2.state.options[Math.floor(Math.random() * _this2.state.options.length)];
                return {
                    answer: ans
                };
            });
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: [],
                    answer: ''
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Please enter a Valid Option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option Already Exists';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, { hasOptions: this.state.options.length > 0 ? true : false, answer: this.state.answer, handlePick: this.handlePick }),
                React.createElement(Options, { hasOptions: this.state.options.length > 0 ? true : false, options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOptions, { options: this.state.options, handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// This is a STATELESS react component


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { style: { display: "block", textAlign: "center", color: "green", marginBottom: "10px", padding: "10px", borderBottom: "5px solid green" } },
            props.title,
            ' '
        ),
        props.subtitle && React.createElement(
            'h3',
            { style: { marginLeft: "10px" } },
            props.subtitle
        )
    );
};

// Using Default Props 
Header.defaultProps = {
    title: 'Binary Decision Maker',
    subtitle: 'Making Decisions for Indecisive People'
};

// STATELESS
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        props.hasOptions ? React.createElement(
            'div',
            { style: { textAlign: "center" } },
            React.createElement(
                'button',
                { className: 'btn btn-success', style: { marginBottom: "10px", marginTop: "10px" }, onClick: props.handlePick },
                'What Should I do ?'
            )
        ) : React.createElement('p', null),
        props.answer ? React.createElement(
            'div',
            { style: { display: "flex", justifyContent: "center", margin: "10px" } },
            React.createElement(
                'p',
                { style: { border: "5px outset rgb(52,16,132)", width: "auto", textAlign: "center", padding: "10px" } },
                'Option:  ',
                React.createElement(
                    'span',
                    { style: { color: "blue", fontWeight: "500", fontSize: "30px" } },
                    props.answer
                )
            )
        ) : React.createElement('p', null)
    );
};

// STATELESS
var Options = function Options(props) {
    return React.createElement(
        'div',
        { style: { display: "grid" } },
        props.hasOptions ? React.createElement(
            'button',
            { className: 'btn btn-danger', style: { textAlign: "center", marginBottom: "15px" }, onClick: props.handleDeleteOptions },
            'Remove All Options'
        ) : React.createElement('p', null),

        /*  Calling the Option Component with each option */
        props.options && props.options.length > 0 ? React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                { style: { textAlign: "center", fontWeight: "500" } },
                'Here are the Options - '
            ),
            props.options.map(function (option) {
                return React.createElement(Option, { key: option, optionText: option });
            })
        ) : React.createElement(
            'p',
            { style: { border: "5px solid red", justifySelf: "center", width: "200px", textAlign: "center" } },
            'Add Options to Begin'
        )
    );
};

// STATELESS
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            { style: { textAlign: "center" } },
            props.optionText
        )
    );
};

// STATE

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this3 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
        _this3.resetForm = _this3.resetForm.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.options.value.trim();
            var error = this.props.handleAddOption(option);
            this.resetForm();
            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'resetForm',
        value: function resetForm() {
            document.getElementById("inp").reset();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    { style: { textAlign: "center" } },
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { id: 'inp', onSubmit: this.handleAddOption, style: { display: "block", textAlign: "center", marginBottom: "30px" } },
                    React.createElement('input', { type: 'text', name: 'options', placeholder: 'Task' }),
                    React.createElement(
                        'button',
                        { className: 'options-btn btn-primary', style: { marginLeft: "5px" } },
                        'Add Options'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
