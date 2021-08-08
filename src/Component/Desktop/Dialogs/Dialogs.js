import React from "react";
import firstAvatar from "../../../img/firstAvatar.jpg"
import secondAvatar from "../../../img/secondAvatar.jpg"

const Message = (props) => {
    return (
        <div>
            <div className="content__chat">
                <div className="content__chatImg">
                    <div className="content__chatImg--background">
                        <img src={firstAvatar} alt="avatar" className="content__chatImg--avatar"></img>
                    </div>
                </div>
                <div className="content__chatDescription">
                    <p className="content__chatDescription--description">{props.message}</p>
                </div>
            </div>
        </div>

    )
};
const MessageReverse = (props) => {
    return (
        <div className="content__chat content__chat--reverse">
            <div className="content__chatImg">
                <div className="content__chatImg--background">
                    <img src={secondAvatar} alt="avatar" className="content__chatImg--avatar"></img>
                </div>
            </div>
            <div className="content__chatDescription content__chatDescription--reverse">
                <p className="content__chatDescription--description">Lorem ipsum is simply dummy text of the priting
                    and typesetting industry</p>
            </div>
        </div>
    )
};
const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messagesReverseElement = state.messagesReverse.map((item,index) =>
     <MessageReverse messagesReverse={item.messagesReverse} key={index}/>)

    let messagesElement = state.messages.map((item,index) => <Message message={item.message} key={index}/>);

    messagesElement.splice(1, 0, [messagesReverseElement])

    let newMassageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMAssageChange = (e) => {
        let body = e.target.value;
        props.updateNewMassageBody(body);
    }
    return (
        <div>
            <div>
                {messagesElement}
            </div>
            <div className="input">
                <div className="input__text">
                    <textarea
                        className="input__textarea"
                        placeholder="Enter massage"
                        value={newMassageBody}
                        onChange={onNewMAssageChange}
                    ></textarea>
                </div>
                <div className="input__click">
                    <button
                        className="input__button"
                        onClick={onSendMessageClick}>
                        Add new massage
                    </button></div>
            </div>
        </div>
    );
};

export default Dialogs;
