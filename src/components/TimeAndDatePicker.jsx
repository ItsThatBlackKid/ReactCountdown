import React, {Fragment, Component} from "react";
import {DateTimePicker, MuiPickersUtilsProvider} from "material-ui-pickers"
import {withStyles} from "@material-ui/core/styles"
import PropTypes from "prop-types";
import moment from "moment";
import store from "../store"
import {setCountdown} from "../actions";
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import Button from "@material-ui/core/es/Button/Button";
import {Alarm} from "@material-ui/icons"
import connect from "react-redux/es/connect/connect";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

const styles = theme => ({
    dateTimeRoot: {
        marginRight: '10px',
    },
});

class TimeAndDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDateTime: moment(),
            endDateTime: moment(),
        }
    }

    handleDateStartChange = (date) => {
        this.setState({startDateTime: date})
    };

    handleEndDateChange = (date) => {
        this.setState({endDateTime: date})
    };

    handleClick() {
        const event = {
            startDateTime: this.state.startDateTime,
            endDateTime: this.state.endDateTime
        };
        store.dispatch(setCountdown(event));
        this.props.onSet();
    }

    render() {
        const {startDateTime, endDateTime} = this.state;
        const {classes} = this.props;

        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Fragment>
                    <div id="datetimepicker">
                        <DateTimePicker className={classes.dateTimeRoot} disablePast={true} id="startDateTime"
                                        value={startDateTime}
                                        onChange={this.handleDateStartChange}/>
                        <DateTimePicker disablePast={true} id="endDateTime" value={endDateTime}
                                        onChange={this.handleEndDateChange}/>
                    </div>
                    <IconButton onClick={() => this.handleClick()}><Alarm/></IconButton>
                </Fragment>
            </MuiPickersUtilsProvider>
        )
    }
}

TimeAndDatePicker.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {event: state.event}
};

export default withStyles(styles)(connect(mapStateToProps)(TimeAndDatePicker));