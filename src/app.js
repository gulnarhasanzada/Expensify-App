import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/initialize";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


//test





// let isAdditiveNum = (num)=>{
//   const len = num.length;

//   if(len<3 || len>35){
//     return false;
//   }else{
//     let nums = num.split('');
//     let fNum = '';
//     let sNum = '';
//     for (let i = 0; i < len; i++) {

//       for (let j = i+1; j < len; j++) {
        
        
//       }
      
//     }
//   }
// }



























