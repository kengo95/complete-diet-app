import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { listenAuthState } from './reducers/users/operation';
import { getUserIsSignedIn } from './reducers/users/selectore';



const Auth = ({children}) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);

    const isSignedIn = getUserIsSignedIn(selector)

    useEffect(() => {
        if (!isSignedIn) {
            dispatch(listenAuthState())
        }
    }, []);

    if (!isSignedIn) {
        return <></>
    } else {
        return children
    }
};

export default Auth;