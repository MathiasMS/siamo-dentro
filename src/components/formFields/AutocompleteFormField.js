import React from 'react';
import { Controller } from 'react-hook-form';
import { Autocomplete, FormControl, TextField } from '@mui/material';

const AutocompleteFormField = ({
    name,
    options,
    label,
    control,
    errors,
    margin = 'normal',
    required,
}) => {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
                <FormControl
                    sx={{ minWidth: '100%' }}
                    margin={margin}
                    required={required}
                >
                    <Autocomplete
                        labelId={`select-list-${name}`}
                        error={Boolean(errors)}
                        required={required}
                        onChange={(_event, value) => {
                            console.log(value);
                            const newValue = value ? value.value : undefined;
                            onChange(newValue);
                        }}
                        options={options}
                        getOptionLabel={(option) => (option.label || option)}
                        fullWidth
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                error={Boolean(errors)}
                                helperText={errors ? <span color="error">{errors.message}</span> : ' '}
                                label={label}
                            />
                    }
                    />
                </FormControl>
            )}
        />
    );
}

export default AutocompleteFormField;
