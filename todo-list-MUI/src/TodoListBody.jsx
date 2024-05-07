import Box from '@mui/material/Box'
import Heading from './Heading'
import Item from "./DummyList";
export default function TodoListBody() {
    return (
        <Box sx={{
            flexGrow: 1,
            maxWidth: '1750px',
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <Heading />
            <Item />
        </Box>
    )
}