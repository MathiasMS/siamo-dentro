import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, DialogActions, Grid } from '@mui/material';
import TextFormField from '../formFields/TextFormField';
import SelectFormField from '../formFields/SelectFormField';
import { principalCountries, otherCountries } from '../../datasets/countries';
import genderOptions from '../../datasets/genders';
import React from 'react';
import AutocompleteFormField from '../formFields/AutocompleteFormField';

const PersonForm = ({ defaultValues, onSubmit, handleClose }) => {

    const options = [...principalCountries, ...otherCountries];
    const validationSchema = Yup.object().shape({
        name: Yup.string().max(255).required('Nombre es requerido.'),
        year: Yup.number().typeError('Numero positivo.').required('Año es requerido.'),
        country: Yup.string().required('Pais es requerido.'),
        gender: Yup.string().required('Genero es requerido.'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: defaultValues?.name || '',
            id: defaultValues?.id || '',
            year: defaultValues?.year || '',
            country: defaultValues?.country || '',
            gender: defaultValues?.gender || '',
            kindOfRelationShip: defaultValues?.kindOfRelationShip || '',
        },
        shouldUnregister: false,
        resolver: yupResolver(validationSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="id" />
            <input type="hidden" name="kindOfRelationShip" />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextFormField
                        name="name"
                        sx={{ mt: '20px'}}
                        control={control}
                        label="Nombre"
                        errors={errors.name}
                        margin="dense"
                    />
                </Grid>
                <Grid item xs={12}>
                    <AutocompleteFormField
                        name="country"
                        sx={{ mt: '12px'}}
                        control={control}
                        label="Pais*"
                        errors={errors.country}
                        margin="dense"
                        options={options}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextFormField
                        name="year"
                        sx={{ mt: '20px'}}
                        control={control}
                        label="Año de nacimiento"
                        errors={errors.year}
                        margin="dense"
                    />
                </Grid>
                <Grid item xs={12}>
                    <SelectFormField
                        name="gender"
                        control={control}
                        label="Genero*"
                        errors={errors.gender}
                        margin="dense"
                        principalOptions={genderOptions}
                    />
                </Grid>
            </Grid>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button variant="contained" disabled={isSubmitting} type="submit">{!defaultValues ? 'Agregar' : 'Editar'}</Button>
            </DialogActions>
        </form>
    )
}

export default PersonForm;
