import { Box, useMediaQuery, useTheme } from '@mui/material';
import theme from '../theme';
import React from 'react';

const StyledSpan = ({ children }) => (
    <span style={{
        fontFamily: 'Roboto',
        fontWeight: '700',
        lineHeight: '16px',
        color: '#4E6574',
    }}>{children}</span>
)

const StatusText = ({ status, oldestWoman, offSpringOfOldestWoman }) => {
    const materialTheme = useTheme();
    const matchDownMD = useMediaQuery(materialTheme.breakpoints.down('md'));

    const { name: oldestWomanName } = oldestWoman;
    const { name: offSpringOfOldestWomanName, gender: offSpringOfOldestWomanGender } = offSpringOfOldestWoman;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, px: 1}}>
            <Box sx={{
                fontFamily: 'Roboto',
                fontWeight: 600,
                fontSize: matchDownMD ? '24px' : '60px',
                lineHeight: matchDownMD ? '28px' : '70px',
                textAlign: 'center',
                color: status === 'ok' ? theme.colors.siamoGreen : '#DC2F2C'
            }}>
                {status === 'ok' ? 'Tu caso corresponde a Vía Administrativa.' : 'Tu caso corresponde a Vía Judicial.' }
            </Box>
            <Box sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: matchDownMD ? '14px' : '24px',
                lineHeight: matchDownMD ? '16px' : '32px',
                color: '#4E6574',
                textAlign: 'center'
            }}>
                La primera mujer en tu árbol es <StyledSpan>{oldestWomanName}</StyledSpan>, {offSpringOfOldestWomanGender === 'Masculino' ? 'el hijo' : 'la hija' } de ella es <StyledSpan>{offSpringOfOldestWomanName}</StyledSpan> quien nació {status === 'ok' ? 'después' : 'antes'} de <StyledSpan>1948</StyledSpan>.
            </Box>
        </Box>
    )
}

export default StatusText;
