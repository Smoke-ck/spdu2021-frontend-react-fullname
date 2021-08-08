const UPDATE_NEW_MASSAGE_BODY = "UPDATE-NEW-MASSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messages : [
        { message:"Lorem ipsum is simply dummy text of the priting and typesetting industry"},
        { message:"Lorem ipsum is simply dummy text of the priting and typesetting industry"},
        
       ],
    messagesReverse : [
        { message:"Lorem ipsum is simply dummy text of the priting and typesetting industry"},
       ],
      newMessageBody: "",
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({  message: body });;
            return state;
        default: return state;
    }
}
export default dialogsReducer;

export const sendMessageCreator = () => ({type:SEND_MESSAGE});

export const updateNewMassageBodyCreator = (body) => ({type: UPDATE_NEW_MASSAGE_BODY, body: body});