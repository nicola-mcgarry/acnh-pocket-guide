import { TextField } from "@mui/material";
import React from "react";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const SearchBar = ({onSearchChange, searchQuery, placeholder}) => {
return (
    <TextField
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ marginBottom: '10px' }}
    />
  );
};

export default SearchBar;