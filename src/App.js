
import Body from './components/body';
import { Provider } from 'react-redux';
import store from './components/store';




function App() {
  return (
    <Provider store={store}>
    <div  >


      <Body/>

    


    </div>
    </Provider>
  );
}

export default App;
