import Header from "./Header/Header";
import DialogsContainer from "./Dialogs/DialogsContainer"
const Desktop = (props) => {
    return  (
        <div className="test">
            < Header />
            < DialogsContainer store={props.store} />
        </div>
    );
}

export default Desktop;