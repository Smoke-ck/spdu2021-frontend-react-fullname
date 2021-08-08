import React from "react";
import {updateNewMassageBodyCreator, sendMessageCreator} from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () =>{

    props.store.dispatch(sendMessageCreator())
  }

  let onNewMAssageChange = (body) =>{
    props.store.dispatch(updateNewMassageBodyCreator(body));
  }
  return < Dialogs
   updateNewMassageBody ={onNewMAssageChange} 
   sendMessage ={onSendMessageClick}
   dialogsPage={state} //let state = props.store.getState().dialogsPage;
   />;
};

export default DialogsContainer;
