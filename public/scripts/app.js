'use strict';

// STATEFUL Component // Class Based COMPONENT //

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
        _this.handleDeleteSingleOption = _this.handleDeleteSingleOption.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.state = {
            options: [],
            answer: ''
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (error) {
                // Do Nothing 
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length)
                // If the array updates then, the array is stored in the local storage as JSON 
                {
                    var json = JSON.stringify(this.state.options);
                    localStorage.setItem('options', json);
                };
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [], answer: '' };
            });
        }
    }, {
        key: 'handleDeleteSingleOption',
        value: function handleDeleteSingleOption(option) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (element) {
                        return element !== option;
                    }), answer: '' };
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
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    title: 'Binary Decision Maker',
                    subtitle: 'Making Decisions for Indecisive People'
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0 ? true : false,
                    answer: this.state.answer, handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    hasOptions: this.state.options.length > 0 ? true : false,
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteSingleOption: this.handleDeleteSingleOption
                }),
                React.createElement(AddOptions, {
                    options: this.state.options,
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// This is a STATELESS react component


var Header = function Header(props) {
    return React.createElement(
        'div',
        { className: 'header' },
        React.createElement(
            'h1',
            null,
            props.title,
            ' '
        ),
        props.subtitle && React.createElement(
            'h3',
            null,
            props.subtitle
        )
    );
};

// STATELESS
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        props.hasOptions ? React.createElement(
            'div',
            { className: 'action-q' },
            React.createElement(
                'button',
                { className: 'btn', onClick: props.handlePick },
                'What Should I do ?'
            )
        ) : React.createElement('p', null),
        props.answer ? React.createElement(
            'div',
            { className: 'action-a' },
            React.createElement(
                'p',
                null,
                'Option: ',
                React.createElement(
                    'span',
                    null,
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
        { className: 'options' },
        props.hasOptions ? React.createElement(
            'button',
            { className: 'btn', onClick: props.handleDeleteOptions },
            'Remove All Options'
        ) : React.createElement('p', null),

        /*  Calling the Option Component with each option */
        props.options && props.options.length > 0 ? React.createElement(
            'div',
            { className: 'sen' },
            React.createElement(
                'p',
                null,
                'Here are the Options - '
            ),
            props.options.map(function (option) {
                return React.createElement(Option, {
                    key: option,
                    optionText: option,
                    handleDeleteSingleOption: props.handleDeleteSingleOption
                });
            })
        ) : React.createElement(
            'p',
            { className: 'info' },
            'Add Options to Begin'
        )
    );
};

// STATELESS
var Option = function Option(props) {
    return React.createElement(
        'div',
        { className: 'single-option' },
        React.createElement(
            'p',
            { className: 'inner' },
            props.optionText
        ),
        React.createElement(
            'button',
            { className: 'btn-inner', onClick: function onClick() {
                    props.handleDeleteSingleOption(props.optionText);
                } },
            'X'
        )
    );
};

// STATEFUL // Class Based COMPONENT //

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
                return { error: error };
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
                { className: 'display-option' },
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { id: 'inp', onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'options', placeholder: 'Task' }),
                    React.createElement(
                        'button',
                        { className: 'options-btn' },
                        'Add Options'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
