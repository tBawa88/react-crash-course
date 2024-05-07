import Typography from "@mui/material/Typography";
import '@fontsource/roboto/300.css';
export default function Heading() {
    return <>
        <Typography variant="h1" sx={{
            fontWeight: "300",
            mt: "1.8rem"
        }}
            gutterBottom>
            Todos
        </Typography>
    </>

}