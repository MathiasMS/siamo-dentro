import { v4 as uuidv4 } from 'uuid';
import {
    Box,
    Dialog,
    DialogContent,
} from '@mui/material';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import theme from '../../theme';

import PersonForm from '../forms/PersonForm';


const AddPerson = ({ onSubmit, open, handleClose, title, kindOfRelationShip }) => {

    const handleSubmit = (values) => {
        const newPerson = {
            ...values,
            kindOfRelationShip,
            id: uuidv4()
        }
        onSubmit(newPerson);
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                   <Box sx={{
                       display: 'flex',
                       justifyItems: 'center',
                       fontFamily: 'Source Sans Pro',
                       fontWeight: 600,
                       fontSize: '16px',
                       lineHeight: '24px',
                       textAlign: 'center',
                       color: theme.colors.bluishGrey80,
                       p: 1
                   }}>
                       {title}
                   </Box>
                    <Box sx={{ cursor: 'pointer', padding: 1 }} onClick={handleClose}>
                        <CancelOutlinedIcon sx={{ color: theme.colors.bluishGrey80 }}/>
                    </Box>
               </Box>
                <DialogContent dividers>
                    <PersonForm onSubmit={handleSubmit} handleClose={handleClose} />
                </DialogContent>
        </Dialog>
    )
}


export default AddPerson
