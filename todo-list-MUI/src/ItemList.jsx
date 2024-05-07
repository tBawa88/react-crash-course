import { useState } from 'react';
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

    //toggling checked property of the list item
    const handleToggle = (item) => () => {
        setItemList(oldList => oldList.map(elem => {
            if (elem.id === item.id)
                return { ...elem, checked: elem.checked ? false : true }
            else
                return elem
        }))
    };

    //deleting list item
    const handleClose = (id) => {
        setItemList(oldlist => oldlist.filter(item => item.id !== id))
    }

    //pushing new list item to state of this comp
    const addNewItem = (newItem) => {
        setItemList(oldList => [...oldList, newItem])
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
                                        tabIndex={-1}
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
            <ItemForm addNewItem={addNewItem} />
        </>
    );
}
//list -> listItem -> listItemButton -> listItemIcon -> listItemtext