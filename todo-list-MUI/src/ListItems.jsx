import { useState } from "react";
import Box from "@mui/material/Box"
import Item from "./Item";
export default function ListItems() {
    const [items, setItems] = useState({ id: '', val: '' });


    return (
        <>
            <Box sx={{

            }}>
                {
                    items.map((item, i) => <Item key={i} val={item.val} />)
                }
            </Box>
        </>
    )
}