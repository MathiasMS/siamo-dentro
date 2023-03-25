import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import logo from '../logo.svg';
import theme from '../theme';
import ConditionalRender from '../components/ConditionalRender';
import AddIcon from '@mui/icons-material/Add';
import ArrowDown from '../icons/ArrowDown';
import PersonItem from '../components/PersonItem';
import AddPerson from '../components/dialogs/AddPerson';
import EditPerson from '../components/dialogs/EditPerson';
import React, { useState } from 'react';
import StatusText from '../components/StatusText';

const buttonLabels = ['Armar árbol ahora', 'Agregar madre o padre', 'Agregar abuela o abuelo', 'Agregar bisabuela o bisabuelo'];

const dialogsTitles = ['Empezá por vos', 'Agregá madre o padre', 'Agregá abuela o abuelo', 'Agregá bisabuela o bisabuelo'];

const relativesLabels = ['', 'Madre o Padre', 'Abuela o Abuelo', 'Bisabuela o Bisabuelo'];

const kindOfRelationShip = ['Hijos', 'Padres', 'Abuelos', 'Bisabuelos'];

const offSpring = {
    'Hijos': null,
    'Padres': 'Hijos',
    'Abuelos': 'Padres',
    'Bisabuelos': 'Abuelos'
}

const FamilyTree = () => {
    const materialTheme = useTheme();
    const matchDownMD = useMediaQuery(materialTheme.breakpoints.down('md'));

    const [listOfPersons, setListOfPersons] = useState([]);
    const [creationOpen, setCreationOpen] = useState(false);
    const [editionOpen, setEditionOpen] = useState(false);
    const [personToEdit, setPersonToEdit] = useState({});
    const [checkStatus, setCheckStatus] = useState({} );

    const handleCreationOpen = () => {
        setCreationOpen(true);
    };

    const handleCreationClose = () => {
        setCreationOpen(false);
    };

    const onCreationSubmit = (values) => {
        setListOfPersons([...listOfPersons, values])
        handleCreationClose();
    }

    const handleEditionOpen = (personToEdit) => {
        setPersonToEdit(personToEdit);
        setEditionOpen(true);
    };

    const handleEditionClose = () => {
        setEditionOpen(false);
    };

    const onEditionSubmit = (personToUpdate) => {
        const updatedListOfPersons = [...listOfPersons]

        const index = updatedListOfPersons.findIndex(p => p.id === personToUpdate.id);

        if (index === -1) {
            throw new Error(`Person with ID ${personToUpdate.id} not found in list.`);
        }

        updatedListOfPersons[index] = personToUpdate;

        setListOfPersons(updatedListOfPersons);
        handleEditionClose();
    }

    const getOldestWoman = (listOfPersons) => {
        return listOfPersons.find(l => l.gender === 'Femenino')
    }

    const findOffSpring = (person, listOfPersons) => {
        return listOfPersons.filter(p => p.kindOfRelationShip === offSpring[person.kindOfRelationShip]);
    }

    const getOffSpringBefore1948 = (person, listOfPersons) => {
        return listOfPersons.find(l => l.year <= 1948)
    }

    const getOffSpringAfter1948 = (person, listOfPersons) => {
        return listOfPersons.find(l => l.year > 1948)
    }

    const handleCheck = () => {
        const sortedListOfPersons = [...listOfPersons].sort((a, b) => a.year - b.year );

        const oldestWoman = getOldestWoman(sortedListOfPersons);

        if(!oldestWoman){
            throw new Error('No hay ninguna mujer en el árbol');
        }

        const offSpringsOfOldestWoman = findOffSpring(oldestWoman, sortedListOfPersons);

        if(offSpringsOfOldestWoman.length === 0 ){
            throw new Error('No hay hijos de la mujer más vieja');
        }

        const offSpringOfOldestWomanAfter1948 = getOffSpringAfter1948(oldestWoman, offSpringsOfOldestWoman);

        if(offSpringOfOldestWomanAfter1948) {
            const status = { oldestWoman, offSpringOfOldestWoman: offSpringOfOldestWomanAfter1948, status: 'ok' };
            setCheckStatus(status);
            return;
        }

        const offSpringOfOldestWomanBefore1948 = getOffSpringBefore1948(oldestWoman, offSpringsOfOldestWoman);

        if(offSpringOfOldestWomanBefore1948) {
            const status = { oldestWoman, offSpringOfOldestWoman: offSpringOfOldestWomanBefore1948, status: 'juicio' };
            setCheckStatus(status);
            return;
        }

        throw new Error('No hay hijos de la mujer más vieja');
    }

    const isLastStep = listOfPersons.length === 4;
    const isNotFirstStep = listOfPersons.length !== 0;

    return (
        <Box sx={{ mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
                <Box>
                    <img src={logo} alt="logo" style={{
                        ...matchDownMD && { width: '141.32px' },
                        ...matchDownMD && { height: '25.53px' }
                    }}/>
                </Box>
                <Box sx={{ width: matchDownMD ? '100%' : '50%' }}>
                    {
                        Object.keys(checkStatus).length === 0 ?  (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, px: 1 }}>
                                <Box sx={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 600,
                                    fontSize: matchDownMD ? '24px' : '60px',
                                    lineHeight: matchDownMD ? '28px' : '70px',
                                    textAlign: 'center',
                                    color: theme.colors.siamoGreen
                                }}>
                                    Tu árbol por ahora está así:
                                </Box>
                                <Box sx={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 400,
                                    fontSize: matchDownMD ? '14px' : '24px',
                                    lineHeight: matchDownMD ? '16px' : '32px',
                                    color: '#4E6574',
                                    textAlign: 'center'
                                }}>
                                    Estás solo en el árbol. Tenés que agregar más miembros a tu familia hasta llegar a alguién Italiano.
                                </Box>
                            </Box>
                        ) : <StatusText status={checkStatus.status} oldestWoman={checkStatus.oldestWoman} offSpringOfOldestWoman={checkStatus.offSpringOfOldestWoman} />
                    }
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2}}>
                        <ConditionalRender conditional={!isLastStep}>
                            <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={handleCreationOpen}>
                                {buttonLabels[listOfPersons.length]}
                            </Button>
                        </ConditionalRender>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
                        <ConditionalRender conditional={isNotFirstStep && !isLastStep}>
                            <Box sx={{
                                background: '#FFFFFF',
                                border: '1px dashed #D6D6D6',
                                borderRadius: '4px',
                                width: '358px',
                                height: '45px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Box sx={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 500,
                                    color: '#CED3D6',
                                    fontSize: '16px',
                                    lineHeight: '16px',
                                }}>
                                    {relativesLabels[listOfPersons.length]}
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                <ArrowDown />
                            </Box>
                        </ConditionalRender>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                            {
                                listOfPersons.map((person, index) => (
                                    <Box key={person.id} sx={{ width: '358px' }}>
                                        <PersonItem person={person} status={checkStatus.status} offSpringOfOldestWoman={checkStatus.offSpringOfOldestWoman} handleEdit={() => handleEditionOpen(person)}/>
                                        { index !== listOfPersons.length - 1 &&
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 1 }}>
                                                <ArrowDown />
                                            </Box>
                                        }
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    <ConditionalRender conditional={listOfPersons.length > 0}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                            <Button variant="contained" disabled={listOfPersons.length !== 4} onClick={handleCheck} type="button">Comprobar</Button>
                        </Box>
                    </ConditionalRender>
                </Box>
            </Box>
            <ConditionalRender conditional={creationOpen}>
                <AddPerson keepMounted={false} open={creationOpen} kindOfRelationShip={kindOfRelationShip[listOfPersons.length]} title={dialogsTitles[listOfPersons.length]} onSubmit={onCreationSubmit} handleClose={handleCreationClose}/>
            </ConditionalRender>
            <ConditionalRender conditional={editionOpen}>
                <EditPerson keepMounted={false} person={personToEdit} open={editionOpen} title="Editar Persona" onSubmit={onEditionSubmit} handleClose={handleEditionClose}/>
            </ConditionalRender>
        </Box>
    )
}

export default FamilyTree;
