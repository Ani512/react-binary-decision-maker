'use strict';

// Class Based COMPONENTS //

class IndecisionApp extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
        this.handleAddOption = this.handleAddOption.bind( this );
        this.state = {
            options: [],
        };
    }
    // You can either define the function of another class here or inside that function 
    handleDeleteOptions ()
    {
        this.setState( () =>
        {
            return {
                options: [],
            };
        } );
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
        this.setState( ( prevState ) =>
        {
            return {
                options: prevState.options.concat( [ option ] )
            };
        } );
    }
    render ()
    {
        return (
            <div>
                <Header title="Binary Decision Maker" subtitle='Making Decisions for Indecisive People' />
                <Action hasOptions={ this.state.options.length > 0 ? true : false } options={ this.state.options } />
                <Options hasOptions={ this.state.options.length > 0 ? true : false } options={ this.state.options } handleDeleteOptions={ this.handleDeleteOptions } />
                <AddOptions options={ this.state.options } handleAddOption={ this.handleAddOption } />
            </div>
        );
    }
}

class Header extends React.Component
{
    render ()
    {
        return (
            <div>
                <h1 style={ { display: "block", textAlign: "center", color: "green", marginBottom: "10px", padding: "10px", borderBottom: "5px solid green" } }>{ this.props.title } </h1>
                { this.props.subtitle && <h3 style={ { marginLeft: "10px" } }>{ this.props.subtitle }</h3> }
            </div> );
    }
}   // This is a react component 

class Action extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.handlePick = this.handlePick.bind( this );
        this.state = {
            answer: ''
        };
    }
    handlePick ()
    {
        this.setState( () =>
        {
            let ans = this.props.options[ Math.floor( Math.random() * this.props.options.length ) ];
            return {
                answer: ans
            };
        } );
    }

    render ()
    {
        return (
            <div>
                {
                    this.props.hasOptions ?
                        ( <div style={ { textAlign: "center" } }>
                            <button className="btn btn-success" style={ { marginBottom: "10px", marginTop: "10px" } } onClick={ this.handlePick }>What Should I do ?</button>
                        </div> )
                        : <p></p>
                }
                {
                    this.state.answer ?
                        ( <div style={ { display: "flex", justifyContent: "center", margin: "10px" } }>
                            <p style={ { border: "5px outset rgb(52,16,132)", width: "auto", textAlign: "center", padding: "10px" } }>Option:  <span style={ { color: "blue", fontWeight: "500", fontSize: "30px" } }>{ this.state.answer }</span></p>
                        </div> )
                        : <p></p>
                }
            </div> );
    }
}

class Options extends React.Component
{
    render ()
    {
        return (
            <div style={ { display: "grid" } }>
                { this.props.hasOptions ?
                    <button className="btn btn-danger" style={ { textAlign: "center", marginBottom: "15px" } } onClick={ this.props.handleDeleteOptions }>Remove All Options</button>
                    : <p></p>
                }
                {
                    this.props.options && this.props.options.length > 0 ? (
                        <div>
                            <p style={ { textAlign: "center", fontWeight: "500" } }>Here are the Options - </p>
                            { this.props.options.map( option => <Option key={ option } optionText={ option } /> ) }
                        </div>
                    ) : <p style={ { border: "5px solid red", justifySelf: "center", width: "200px", textAlign: "center" } }>Add Options to Begin</p>
                }
            </div>
        );
    }
}

class Option extends React.Component
{
    // The single 
    render ()
    {
        return (
            <div>
                <p style={ { textAlign: "center" } }>{ this.props.optionText }</p>
            </div>
        );
    }
}

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
        this.setState( () =>
        {
            return {
                error: error
            };
        } );
    }
    resetForm ()
    {
        document.getElementById( "inp" ).reset();
    }
    render ()
    {
        return (
            <div>
                { this.state.error && <p style={ { textAlign: "center" } }>{ this.state.error }</p> }
                <form id="inp" onSubmit={ this.handleAddOption } style={ { display: "block", textAlign: "center", marginBottom: "30px" } }>
                    <input type="text" name="options" placeholder="Task"></input>
                    <button className="options-btn btn-primary" style={ { marginLeft: "5px" } }>Add Options</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <IndecisionApp />, document.getElementById( 'app' ) );

// <span style={{color: "blue", fontWeight: "500", fontSize: "large"}}> </span>
