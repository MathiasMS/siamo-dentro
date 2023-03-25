import React from 'react';

import { Controller } from 'react-hook-form';

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
} from '@mui/material';

const SelectFormField = ({
    name,
    label,
    control,
    options,
    multiple,
    errors,
    margin = 'normal',
    required,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl
                    sx={{ minWidth: '100%' }}
                    margin={margin}
                    required={required}
                >
                    <InputLabel id={`select-list-${name}`}>{label}</InputLabel>
                    <Select
                        {...field}
                        label={label}
                        labelId={`select-list-${name}`}
                        error={Boolean(errors)}
                        required={required}
                        multiple={multiple}
                        fullWidth
                    >
                        {options.map((o) => (
                            <MenuItem key={o.value} value={o.value}>
                                {o.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText error={Boolean(errors)}>{errors?.message}</FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default SelectFormField;
