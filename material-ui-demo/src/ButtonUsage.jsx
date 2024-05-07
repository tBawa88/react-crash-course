import Button from '@mui/material/Button'

const ButtonUsage = ({ sx }) => {

    return (
        <div>
            <Button sx={sx} variant='text'>Text Button</Button>
            <Button sx={sx} variant='contained'>Text Button</Button>
            <Button sx={sx} variant='outlined'>Text Button</Button>
        </div>
    )

}


export default ButtonUsage;