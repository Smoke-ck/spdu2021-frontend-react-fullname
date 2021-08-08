import './App.scss';
import Desktop from './Component/Desktop/Desktop';

function App(props) {
  return (
      <div>
        < Desktop store={props.store} state={props.state}/>
      </div>
  );
}

export default App;
