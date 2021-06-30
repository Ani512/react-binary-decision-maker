'use strict';
import React from 'react';

// STATEFUL // Class Based COMPONENT //
class AddOptions extends React.Component
{
    state = {
        error: undefined
    };
    handleAddOption = ( e ) =>
    {
        e.preventDefault();
        let option = e.target.elements.options.value.trim();
        let error = this.props.handleAddOption( option );
        this.resetForm();
        this.setState( () => ( { error: error } ) );
    };
    resetForm = () =>
    {
        document.getElementById( "inp" ).reset();
    };
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
export default AddOptions;