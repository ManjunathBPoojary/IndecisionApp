import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options:[],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options:[]}));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((option)=>{
                    return optionToRemove !== option;
                })
            };
        });
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>{
            return {
                selectedOption: option
            };
        });

    }

    handleClearSelectedOption = () => {
        this.setState(()=>{
            return {
                selectedOption: undefined
            }
        });
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add option!';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists!'
        }
        this.setState((prevState)=> ({options: prevState.options.concat(option)}) );
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
            }
        }catch(e){
            //do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){
        const subTitle = "Put your life in the hands of a computer!";   
        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className="container">
                    <Action 
                        visible={this.state.options.length > 0 ? false : true}
                        handlePick={this.handlePick}
                    />
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;