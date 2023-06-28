import { Alert, Snackbar } from '@mui/material'
import React from 'react'

function Snack({ text, handleClose = Function.prototype }) {
    return (
        <Snackbar open={text === '' ? false : true} autoHideDuration={900} onClose={handleClose} sx={{ width: '500px' }}>
            <Alert variant="filled" severity="success" sx={{ width: '100%' }}>
                {text}
            </Alert>
        </Snackbar>
    )
}

export default Snack