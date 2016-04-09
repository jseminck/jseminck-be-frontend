import React from "react";
import './main.css';

import MainLoginFormInput from './MainLoginFormInput';

export default ({onInputChange, onSubmitClick}) => (
    <div className="login-form">
        <MainLoginFormInput
            type="text"
            placeholder="Username"
            name="username"
            onInputChange={onInputChange}
        />
        <MainLoginFormInput
            type="password"
            placeholder="Password"
            name="password"
            onInputChange={onInputChange}
        />
        <div className="login-form--submit" onClick={onSubmitClick}>
            <button type="submit">
                Login
            </button>
        </div>
    </div>
);