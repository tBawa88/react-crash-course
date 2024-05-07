import { TextField, useScrollTrigger } from "@mui/material";
import { useState } from "react";
export default function FormComponents() {
    const [value, setValue] = useState('');
    const changeInputValue = (e) => { setValue(e.target.value); }
    return (
        <>
            <TextField label="username"
                variant="outlined"
                value={value}
                onChange={changeInputValue} />
            <TextField label="password"
                variant="filled"
                value={value}
                onChange={changeInputValue}
            />
            <TextField label="password"
                variant="standard"
                value={value}
                onChange={changeInputValue}
            />

        </>
    )
}