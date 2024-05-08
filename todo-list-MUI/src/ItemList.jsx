import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { seed } from './seedData'
import ItemForm from './ItemForm';

export default function ItemList() {
    const [itemlist, setItemList] = useState(seed)

    // retreive list data from local storage on first mount
    useEffect(() => {
        const listData = localStorage.getItem('todos');
        if (listData)
            setItemList(JSON.parse(listData));
    }, [])

    const updateLocalStorage = (newListData) => {
        localStorage.setItem('todos', JSON.stringify(newListData));
    }

    //toggling checked property of the list item, also updating the local storage
    const handleToggle = (item) => () => {
        setItemList(oldList => {
            const newListData = oldList.map(elem => {
                if (elem.id === item.id)
                    return { ...elem, checked: elem.checked ? false : true }
                else
                    return elem
            })
            updateLocalStorage(newListData);
            return newListData;
        })
    };

    //deleting list item
    const handleClose = (id) => {
        setItemList(oldlist => {
            const newListData = oldlist.filter(item => item.id !== id);
            updateLocalStorage(newListData);
            return newListData;
        })
    }

    //pushing new list item to state of this comp
    const addNewItem = (newItem) => {
        setItemList(oldList => {
            const newListData = [...oldList, newItem];
            updateLocalStorage(newListData);
            return newListData;
        })
    }


    return (
        <>
            <List sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                margin: '0 auto',
            }}>

                {itemlist.map((value) => {
                    const labelId = `checkbox-list-label-${value.val}`;

                    return (
                        <ListItem
                            key={value.id}
                            secondaryAction={
                                //click listener to remove list item
                                <IconButton onClick={() => handleClose(value.id)}
                                    edge="end" aria-label="comments">
                                    <CloseIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={value.checked}
                                        // checked={checked.indexOf(value) !== -1}
                                        // tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${value.val}`} />
                            </ListItemButton>
                        </ListItem >
                    );
                })}
            </List >

            {/* Item form component */}
            <ItemForm addNewItem={addNewItem} />
        </>
    );
}
//list -> listItem -> listItemButton -> listItemIcon -> listItemtext