'use strict';

// STATEFUL Component // Class Based COMPONENT //
class IndecisionApp extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind( this );
        this.handleAddOption = this.handleAddOption.bind( this );
        this.handlePick = this.handlePick.bind( this );
        this.state = {
            options: [],
            answer: ''
        };
    }

    componentDidMount ()
    {
        try
        {
            let json = localStorage.getItem( 'options' );
            let options = JSON.parse( json );
            if ( options )
            {
                this.setState( () => ( { options } ) );
            }
        } catch ( error )
        {
            // Do Nothing 
        }
    }
    componentDidUpdate ( prevProps, prevState )
    {
        if ( prevState.options.length !== this.state.options.length )
        // If the array updates then, the array is stored in the local storage as JSON 
        {
            let json = JSON.stringify( this.state.options );
            localStorage.setItem( 'options', json );
        };
    }
    handleDeleteOptions ()
    {
        this.setState( () => ( { options: [], answer: '' } ) );
    }
    handleDeleteSingleOption ( option )
    {
        this.setState( ( prevState ) => ( { options: prevState.options.filter( ( element ) => element !== option ), answer: '' } ) );
    }
    handleAddOption ( option )
    {
        if ( !option )
        {
            return 'Please enter a Valid Option';
        } else if ( this.state.options.indexOf( option ) > -1 )
        {
            return 'Option Already Exists';
        }
        this.setState( ( prevState ) => ( { options: prevState.options.concat( [ option ] ) } ) );
    }
    handlePick ()
    {
        this.setState( () =>
        {
            let ans = this.state.options[ Math.floor( Math.random() * this.state.options.length ) ];
            return {
                answer: ans
            };
        } );
    }
    render ()
    {
        return (
            <div>
                <Header
                    title='Binary Decision Maker'
                    subtitle='Making Decisions for Indecisive People'
                />
                <Action
                    hasOptions={ this.state.options.length > 0 ? true : false }
                    answer={ this.state.answer } handlePick={ this.handlePick }
                />
                <Options
                    hasOptions={ this.state.options.length > 0 ? true : false }
                    options={ this.state.options }
                    handleDeleteOptions={ this.handleDeleteOptions }
                    handleDeleteSingleOption={ this.handleDeleteSingleOption }
                />
                <AddOptions
                    options={ this.state.options }
                    handleAddOption={ this.handleAddOption }
                />
            </div>
        );
    }
}

// This is a STATELESS react component
const Header = ( props ) =>
{
    return (
        <div className="header">
            <h1>{ props.title } </h1>
            { props.subtitle && <h3>{ props.subtitle }</h3> }
        </div> );
};

// STATELESS
const Action = ( props ) =>
{
    return (
        <div>
            {
                props.hasOptions ?
                    ( <div className="action-q">
                        <button className="btn" onClick={ props.handlePick }>What Should I do ?</button>
                    </div> )
                    : <p></p>
            }
            {
                props.answer ?
                    ( <div className="action-a">
                        <p>Option: <span>{ props.answer }</span></p>
                    </div> )
                    : <p></p>
            }
        </div> );
};

// STATELESS
const Options = ( props ) =>
{
    return (
        <div className="options">
            { props.hasOptions ?
                <button className="btn" onClick={ props.handleDeleteOptions }>Remove All Options</button>
                : <p></p>
            }
            {
                /*  Calling the Option Component with each option */
                props.options && props.options.length > 0 ? (
                    <div className="sen">
                        <p>Here are the Options - </p>
                        { props.options.map( option => (
                            <Option
                                key={ option }
                                optionText={ option }
                                handleDeleteSingleOption={ props.handleDeleteSingleOption }
                            /> ) ) }
                    </div>
                ) : <p className="info">Add Options to Begin</p>
            }
        </div>
    );
};

// STATELESS
const Option = ( props ) =>
{
    return (
        <div className="single-option">
            <p className="inner">{ props.optionText }</p>
            <button className="btn-inner" onClick={ () =>
            {
                props.handleDeleteSingleOption( props.optionText );
            } }>X</button>
        </div>
    );
};

// STATEFUL // Class Based COMPONENT //
class AddOptions extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.handleAddOption = this.handleAddOption.bind( this );
        this.resetForm = this.resetForm.bind( this );
        this.state = {
            error: undefined
        };
    }
    handleAddOption ( e )
    {
        e.preventDefault();
        let option = e.target.elements.options.value.trim();
        let error = this.props.handleAddOption( option );
        this.resetForm();
        this.setState( () => ( { error: error } ) );
    }
    resetForm ()
    {
        document.getElementById( "inp" ).reset();
    }
    render ()
    {
        return (
            <div className="display-option">
                { this.state.error && <p>{ this.state.error }</p> }
                <form id="inp" onSubmit={ this.handleAddOption }>
                    <input type="text" name="options" placeholder="Task"></input>
                    <button className="options-btn">Add Options</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp />, document.getElementById( 'app' ) );