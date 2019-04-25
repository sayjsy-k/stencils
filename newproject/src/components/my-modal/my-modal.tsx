import { Component, Method, Element, Prop, State } from '@stencil/core';

@Component({
  tag:'my-modal',
  styleUrl:'my-modal.css'
})

export class MyModal {

  buttons = ['okay','Cancel']

  @Element() modelEl: HTMLElement;



  @Prop() tittle : string;
  @Prop() content : string;

 @State() showOptions = false;
  @Method()
  open(){
    this.modelEl.style.display = "block";
  }
closeModalHandler(){
  this.modelEl.style.display = "none";
}

 showOptionsHandlers(){

  this.showOptions = true;

 }
  render(){
    let options = null;
    if(this.showOptions){
      options = (

          this.buttons.map(btn =>(
            <button  class="button1" onClick={this.closeModalHandler.bind(this)}>{btn}</button>
      )))

    }

    return (
      <div>
        <h1> {this.tittle} </h1>
        <p> {this.content} </p>
     <button class="button1" onClick={this.showOptionsHandlers.bind(this)} >show option</button>
  <hr></hr>
{options}
      </div>
    )
  }
}
