'use strict';

// Class Based COMPONENTS //

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
        _this.state = {
            options: []
        };
        return _this;
    }
    // You can either define the function of another class here or inside that function 


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
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
                React.createElement(Header, { title: 'Binary Decision Maker', subtitle: 'Making Decisions for Indecisive People' }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0 ? true : false, options: this.state.options }),
                React.createElement(Options, { hasOptions: this.state.options.length > 0 ? true : false, options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOptions, { options: this.state.options, handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    { style: { display: "block", textAlign: "center", color: "green", marginBottom: "10px", padding: "10px", borderBottom: "5px solid green" } },
                    this.props.title,
                    ' '
                ),
                this.props.subtitle && React.createElement(
                    'h3',
                    { style: { marginLeft: "10px" } },
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component); // This is a react component 

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this3.handlePick = _this3.handlePick.bind(_this3);
        _this3.state = {
            answer: ''
        };
        return _this3;
    }

    _createClass(Action, [{
        key: 'handlePick',
        value: function handlePick() {
            var _this4 = this;

            this.setState(function () {
                var ans = _this4.props.options[Math.floor(Math.random() * _this4.props.options.length)];
                return {
                    answer: ans
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.hasOptions ? React.createElement(
                    'div',
                    { style: { textAlign: "center" } },
                    React.createElement(
                        'button',
                        { className: 'btn btn-success', style: { marginBottom: "10px", marginTop: "10px" }, onClick: this.handlePick },
                        'What Should I do ?'
                    )
                ) : React.createElement('p', null),
                this.state.answer ? React.createElement(
                    'div',
                    { style: { display: "flex", justifyContent: "center", margin: "10px" } },
                    React.createElement(
                        'p',
                        { style: { border: "5px outset rgb(52,16,132)", width: "auto", textAlign: "center", padding: "10px" } },
                        'Option:  ',
                        React.createElement(
                            'span',
                            { style: { color: "blue", fontWeight: "500", fontSize: "30px" } },
                            this.state.answer
                        )
                    )
                ) : React.createElement('p', null)
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: { display: "grid" } },
                this.props.hasOptions ? React.createElement(
                    'button',
                    { className: 'btn btn-danger', style: { textAlign: "center", marginBottom: "15px" }, onClick: this.props.handleDeleteOptions },
                    'Remove All Options'
                ) : React.createElement('p', null),
                this.props.options && this.props.options.length > 0 ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        { style: { textAlign: "center", fontWeight: "500" } },
                        'Here are the Options - '
                    ),
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { key: option, optionText: option });
                    })
                ) : React.createElement(
                    'p',
                    { style: { border: "5px solid red", justifySelf: "center", width: "200px", textAlign: "center" } },
                    'Add Options to Begin'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',

        // The single 
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    { style: { textAlign: "center" } },
                    this.props.optionText
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this7 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this7.handleAddOption = _this7.handleAddOption.bind(_this7);
        _this7.resetForm = _this7.resetForm.bind(_this7);
        _this7.state = {
            error: undefined
        };
        return _this7;
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

// <span style={{color: "blue", fontWeight: "500", fontSize: "large"}}> </span>
