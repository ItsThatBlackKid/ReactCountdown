import React, {Component, Fragment} from "react"
import moment from "moment"
import {withStyles} from "@material-ui/core/es/styles"
import PropTypes from "prop-types";
import momentDurationFormat from "moment-duration-format"
import Typography from "@material-ui/core/es/Typography/Typography";
import connect from "react-redux/es/connect/connect";
import Paper from "@material-ui/core/es/Paper/Paper";
import {getContrast} from "../utils/ColorUtils";
import CountdownDisplay from "./countdowndisplay";

momentDurationFormat(moment);

const styles = theme => ({
    root: {
        // top: '40%',
        // position: 'absolute',
        textJustify: 'center',
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },

    secondRoot: {
        left: '48%',
        top: '40%',
    }
});


class CountDownTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeTo: "",
        }
    }

    eventIsEmpty(obj) {
        return !Object.keys(obj).length;
    }

    handleTimerFinished() {
        this.props.onTimerFinished();
    }

    render() {
        const {classes, event} = this.props;

        if (this.eventIsEmpty(event)) {
            console.log("event is empty");
            return (
                <Fragment>
                    <Typography align="center" className={classes.root} variant="headline">Set timer up above</Typography>
                </Fragment>
            )
        }

        return <CountdownDisplay classes={classes} event={event}/>
    }

}

CountDownTimer.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {event: state.event}
};

export default withStyles(styles)(connect(mapStateToProps)(CountDownTimer));
