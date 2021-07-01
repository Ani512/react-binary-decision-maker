'use strict';
import React from "react";
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';
import Footer from "./Footer";

// STATEFUL Component // Class Based COMPONENT //
class IndecisionApp extends React.Component
{
    state = {
        options: [],
        answer: ''
    };
    handleDeleteOptions = () =>
    {
        this.setState( () => ( { options: [], answer: '' } ) );
    };
    handleDeleteSingleOption = ( option ) =>
    {
        this.setState( ( prevState ) => ( { options: prevState.options.filter( ( element ) => element !== option ), answer: '' } ) );
    };
    handleAddOption = ( option ) =>
    {
        if ( !option )
        {
            return 'Please enter a Valid Option';
        } else if ( this.state.options.indexOf( option ) > -1 )
        {
            return 'Option Already Exists';
        }
        this.setState( ( prevState ) => ( { options: prevState.options.concat( [ option ] ) } ) );
    };
    handlePick = () =>
    {
        this.setState( () =>
        {
            let ans = this.state.options[ Math.floor( Math.random() * this.state.options.length ) ];
            return {
                answer: ans
            };
        } );
    };
    closeModal = () =>
    {
        this.setState( () => ( { answer: '' } ) );
    };
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
    };
    componentDidUpdate ( prevProps, prevState )
    {
        if ( prevState.options.length !== this.state.options.length )
        // If the array updates then, the array is stored in the local storage as JSON 
        {
            let json = JSON.stringify( this.state.options );
            localStorage.setItem( 'options', json );
        };
    };
    render ()
    {
        return (
            <div>
                <Header
                    title='Binary Decision Maker' s
                    subtitle='Making Decisions for Indecisive People'
                />
                <Action
                    hasOptions={ this.state.options.length > 0 ? true : false }
                    answer={ this.state.answer }
                    handlePick={ this.handlePick }
                    closeModal={ this.closeModal }
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
                <Footer />
            </div>
        );
    }
}

export default IndecisionApp;