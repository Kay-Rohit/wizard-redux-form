import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserFormComponent';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    form : formReducer
})

const store  = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
