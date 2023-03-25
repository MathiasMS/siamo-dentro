import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, DialogActions, Grid, useMediaQuery, useTheme } from '@mui/material';
import TextFormField from '../formFields/TextFormField';
import SelectFormField from '../formFields/SelectFormField';
import countryOptions from '../../datasets/countries';
import genderOptions from '../../datasets/genders';

const PersonForm = ({ defaultValues, onSubmit, handleClose }) => {
    const materialTheme = useTheme();
    const matchDownSM = useMediaQuery(materialTheme.breakpoints.down('sm'));

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
                <Grid item xs={12} md={6}>
                    <TextFormField
                        name="name"
                        sx={{ mt: '20px'}}
                        control={control}
                        label="Nombre"
                        errors={errors.name}
                        margin="dense"
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: matchDownSM ? 0 : '12px'}}>
                    <SelectFormField
                        name="country"
                        sx={{ mt: '12px'}}
                        control={control}
                        label="Pais*"
                        errors={errors.country}
                        margin="dense"
                        options={countryOptions}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: matchDownSM ? 1 :  0 }}>
                <Grid item xs={12} md={6}>
                    <TextFormField
                        name="year"
                        sx={{ mt: '20px'}}
                        control={control}
                        label="Año de nacimiento"
                        errors={errors.year}
                        margin="dense"
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: matchDownSM ? 0 : '12px'}}>
                    <SelectFormField
                        name="gender"
                        control={control}
                        label="Genero*"

                        errors={errors.gender}
                        margin="dense"
                        options={genderOptions}
                    />
                </Grid>
            </Grid>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button variant="contained" disabled={isSubmitting} type="submit">{Object.keys(defaultValues).length === 0 ? 'Agregar' : 'Editar'}</Button>
            </DialogActions>
        </form>
    )
}

export default PersonForm;
