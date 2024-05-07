import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import CreateIcon from '@mui/icons-material/Create';
import Box from '@mui/material/Box'
import { v4 as uuid } from 'uuid'
import { useState } from 'react';

export default function ItemForm({ addNewItem }) {
    const [inputval, setInputval] = useState("")

    const handleChange = (e) => setInputval(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuid(),
            val: inputval,
            checked: false
        }
        addNewItem(newItem) //prop sent by parent to update it's state
        setInputval('');
    }

    return (
        //this box is a form now
        <Box component="form"
            onSubmit={handleSubmit}
        >
            <FormControl sx={{ m: 1, width: '41%' }} variant="filled">
                <InputLabel htmlFor="list-item">New Item</InputLabel>
                <FilledInput
                    id="list-item"
                    type='text'
                    onChange={handleChange}
                    value={inputval}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => { handleSubmit(); }}
                                edge="end"
                            >
                                <CreateIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )

}

