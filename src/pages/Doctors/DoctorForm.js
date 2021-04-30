import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import {useForm, Form} from '../../components/useForm';


//TODO define properties for Doctor component
const initFieldVals = {
    id: 0,
    name: '',
    experience: 0,
    specialty: '',
    locations: [''],
    reviews: [''],
    schedule: '',
    is_available: true,
    slot_time: '',
    slot_date: ''
}

//TODO Validate Doctor's form 
export default function DoctorForm() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initFieldVals);

    return (
        
            <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    />
                    <TextField 
                    variant="outlined"
                    label="Specialty"
                    name="specialty"
                    value={values.specialty}
                    />
                </Grid>
                <Grid item xs={6}>
                
                </Grid>
            </Grid>
            </Form>
        
    )
}
