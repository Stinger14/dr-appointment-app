import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerOffIcon from '@material-ui/icons/PowerOff';
import SearchIcon from '@material-ui/icons/Search';

// With theme encapsuling the obj we can dinamically
// define css source with jsx syntax
const useStyles = makeStyles(theme =>({
    // Customizing outer most component: AppBar
    root: {
        backgroundColor: '#fff',
        transform: 'translateZ(0)'
    },
    // Adding new rule
    searchInput: {
        opacity: '0.6',
        //padding '0px 8px'
        padding: `0px ${theme.spacing(1)}px`,   // string interpolation
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: 'f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                alignItems='center'>
                    <Grid item>
                        <InputBase 
                        placeholder="Search doctors"
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize="small"/>}/>
                    </Grid>
                    <Grid item sm></Grid> 
                    <Grid item>
                        <IconButton> 
                            {/* Show notification icon with active number of them.
                            Using a mix of badge and icon mui comps */}
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton> 
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerOffIcon fontSize="small"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
