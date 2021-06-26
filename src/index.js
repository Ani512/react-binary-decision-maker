'use strict';
// Class Based COMPONENTS //

// STATEFUL Component 
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
    // You can either define the function of another class here or inside that function 
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
    handleDeleteOptions ()
    {
        this.setState( () => ( { options: [], answer: '' } ) );
    }
    handleDeleteSingleOption ( option )
    {
        this.setState( ( prevState ) => ( { options: prevState.options.filter( ( element ) => element !== option ) } ) );
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
    render ()
    {
        return (
            <div>
                <Header />
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

// Using Default Props 
Header.defaultProps = {
    title: 'Binary Decision Maker',
    subtitle: 'Making Decisions for Indecisive People'
};

// STATELESS
const Action = ( props ) =>
{
    return (
        <div>
            {
                props.hasOptions ?
                    ( <div className="action-q">
                        <button className="btn btn-success" onClick={ props.handlePick }>What Should I do ?</button>
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
                <button className="btn btn-danger" onClick={ props.handleDeleteOptions }>Remove All Options</button>
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
                ) : <p class="info">Add Options to Begin</p>
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
            <button className="inner btn-inner btn-danger" onClick={ () =>
            {
                props.handleDeleteSingleOption( props.optionText );
            } }>X</button>
        </div>
    );
};

// STATE
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
                    <button className="options-btn btn-primary">Add Options</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp />, document.getElementById( 'app' ) );