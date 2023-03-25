import React from 'react';
import { Box, IconButton } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import theme from '../theme';

const GenderIcon = ({ gender }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box>
            {
                gender === 'Femenino' ? <WomanIcon sx={{ color: theme.colors.bluishGrey60 }} /> : <ManIcon sx={{ color: theme.colors.bluishGrey60 }} />
            }
        </Box>
        <Box sx={{
            fontFamily: 'Source Sans Pro',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '100%',
            color: theme.colors.bluishGrey50
        }}>
            {gender}
        </Box>
    </Box>
)

const PersonItem = ({ person, status, offSpringOfOldestWoman, handleEdit }) => {
    const { name, year, country, gender } = person

     return (
        <Box sx={{
            width: '100%',
            height: '45px',
            background: status === 'juicio' && offSpringOfOldestWoman.id === person.id ? '#FFE3E3' : '#FFFFFF',
            boxShadow: '0px 0px 1px rgba(139, 147, 162, 0.2), 0px 1px 2px rgba(139, 147, 162, 0.6)',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 1 }}>
               <Box sx={{
                   fontFamily: 'Source Sans Pro',
                   fontWeight: 400,
                   fontSize: '14px',
                   lineHeight: '100%',
                   color: theme.colors.bluishGrey50
               }}>
                   {year}
               </Box>
               <Box sx={{
                   fontFamily: 'Roboto',
                   fontWeight: 500,
                   fontSize: '16px',
                   lineHeight: '16px',
                   color: theme.colors.bluishGrey60
               }}>
                   {name}
               </Box>
           </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box>
                    <ReactCountryFlag countryCode={country} />
                </Box>
                <GenderIcon gender={gender} />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    borderLeft: '1px solid #E3E7EC',
                }}>
                    <IconButton onClick={() => handleEdit(person)}>
                        <ModeEditOutlineOutlinedIcon sx={{ color: theme.colors.bluishGrey60 }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}

export default PersonItem;
