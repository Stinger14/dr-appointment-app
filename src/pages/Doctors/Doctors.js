import React from 'react';
import DoctorForm from './DoctorForm';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}));

//TODO List all available Doctors to make appointments with
export default function Doctors() {

    const classes = useStyles();

    return (
        <>
            <PageHeader 
                title = "New Doctor"
                subtitle = "Form with validation"
                icon = {<PeopleOutlineIcon fontSize="large"/>}
            />
            <Paper className={classes.pageContent}>
                <DoctorForm />
            </Paper>
        </>
    )
}
