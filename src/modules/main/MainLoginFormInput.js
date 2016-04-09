import React from "react";
import './main.css';

export default ({type, name, placeholder, onInputChange}) => (
    <input
        type={type}
        placeholder={placeholder}
        onChange={onInputChange.bind(this, name)}
    />
);