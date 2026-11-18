import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice.js';


const stroe = configureStore({
   reducer:{
     auth:authReducer,
   }
});

export default stroe;