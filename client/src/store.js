import { combineReducers } from 'redux'

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { loginUserReducer, registerUserReducer ,addCustomerReducer } from './reducers/userReducer'
import { adminloginReducer} from './reducers/adminReducer'
import { feedbackReducer } from './reducers/feedbackReducer'
import { getAllNewsReducer } from './reducers/newsfeedReducer'
import { getAllJobsReducer } from './reducers/jobsReducer'
import { jobApplyReducer } from './reducers/jobApplyReducer'



const finalReducer = combineReducers({


    getAllJobsReducer:getAllJobsReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    adminloginReducer: adminloginReducer, 
    feedbackReducer : feedbackReducer,
    addCustomerReducer : addCustomerReducer,
    getAllNewsReducer: getAllNewsReducer,
    jobApplyReducer : jobApplyReducer,
    
})


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const currentAdmin = localStorage.getItem('currentAdmin') ? JSON.parse(localStorage.getItem('currentAdmin')) : null




const initialState = {
   
    loginUserReducer: {
        currentUser: currentUser,     
    },
    adminloginReducer: {
        currentAdmin: currentAdmin,
    },
   
}

const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default store