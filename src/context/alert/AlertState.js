import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import { AlertReducer } from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';


export const AlertState = props => {

    const initialState = {
        alert: null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Sets an alert
    const showAlert = (msg, type) => { 
        dispatch({
            type: SET_ALERT,
            payload: {msg: msg, type: type}
        })

        setTimeout(() => {removeAlert()}, 5000)
    }

    const removeAlert = () => {
        dispatch({
            type: REMOVE_ALERT
        })
    }

    return <AlertContext.Provider
        value = {{
            alert: state.alert,
            showAlert
        }}
    >
    {props.children}
    </AlertContext.Provider>

}