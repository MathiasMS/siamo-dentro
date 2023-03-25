import { Box, Dialog, DialogContent } from '@mui/material';
import theme from '../../theme';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PersonForm from '../forms/PersonForm';

const EditPerson = ({ person, onSubmit, open, handleClose, title }) => {
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
                <PersonForm onSubmit={onSubmit} handleClose={handleClose} defaultValues={person} />
            </DialogContent>
        </Dialog>
    )
}

export default EditPerson;
