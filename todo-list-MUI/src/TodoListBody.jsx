import Box from '@mui/material/Box'
import Heading from './Heading'
import ItemList from "./ItemList";
// import ItemForm from './ItemForm';

export default function TodoListBody() {
    return (
        <Box sx={{
            flexGrow: 1,
            maxWidth: '1750px',
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <Heading />
            <Box sx={{
                width: "50%",
                margin: '0 auto'
            }}>
                <ItemList />
            </Box>
        </Box>
    )
}