import React, {Component} from 'react'
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import TimeAndDatePicker from "./TimeAndDatePicker";
import {connect} from "react-redux";
import "../static/styles/appbar.css"
import Paper from "@material-ui/core/es/Paper/Paper";
import Slide from "@material-ui/core/es/Slide/Slide";

const styles = theme => ({
    root: {
        background: theme.palette.primary.main,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
    },
    flex: {
        flex: .6,
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    flex2: {
    },
});

class PersistAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
        }
    }

    handleOnSet() {
        this.setState({
            visible: false,
        })
    }

    render() {
        const {classes} = this.props;
        const {visible} = this.state;

        return (
            <Slide direction="down" in={visible} mountOnEnter>
            <AppBar position="absolute" classes={{root: classes.root}}>
                    <Toolbar>
                        <Typography className={classes.flex} variant="title">Countdown</Typography>
                        <TimeAndDatePicker onSet={() => this.handleOnSet()} classes={{root: classes.flex2}}/>
                    </Toolbar>
            </AppBar>
            </Slide>
        )
    }
}

PersistAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {event: state.event}
};

export default withStyles(styles)(connect(mapStateToProps)(PersistAppBar))