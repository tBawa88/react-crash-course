import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
const seed = [
    { id: 1, val: "item 1", checked: false },
    { id: 2, val: "item 2", checked: false },
    { id: 3, val: "item 3", checked: false },
    { id: 4, val: "item 4", checked: false },
]
export default function Item() {
    const [checked, setChecked] = useState([0]);
    const [itemlist, setItemList] = useState(seed)

    //add item to checked list
    const handleToggle = (item) => () => {
        console.log("List item clicked")
        const currentIndex = checked.indexOf(item);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(item);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        console.log(newChecked)
        setChecked(newChecked);

        //toggle the checked property of the list item
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

    return (
        <List sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            margin: '0 auto'
        }}>

            {itemlist.map((value) => {
                const labelId = `checkbox-list-label-${value.val}`;

                return (
                    <ListItem
                        key={value.id}
                        secondaryAction={
                            // iske upar onclick lagega to remove the item form state aray
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
                            <IconButton edge="end" aria-label="comments">
                                <CloseIcon />
                            </IconButton>
                        </ListItemButton>
                    </ListItem >
                );
            })}
        </List >

    );
}
//list -> listItem -> listItemButton -> listItemIcon -> listItemtext