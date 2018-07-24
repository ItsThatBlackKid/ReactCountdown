import React, {Component} from "react";
import moment from "moment/moment";
import Typography from "@material-ui/core/es/Typography/Typography";

export default class CountdownDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: props.event,
            duration: "",
        }
    }

    tick() {
        let {duration} = this.state;
        let newD = moment.duration(duration).subtract(1, 'second');
        this.setState({
            duration: newD
        });
    }

    componentDidMount() {
        const {event} = this.props;
        const start = event.startDateTime;
        const end = event.endDateTime;
        let ms = moment(end).diff(moment(start));
        let d = moment.duration(ms);
        this.setState({
            duration: ms
        });
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {duration} = this.state;
        const {classes} = this.props;

        let days = moment.duration(duration).asDays();
        let months = moment.duration(duration).asMonths();
        console.log();

        return <Typography className={classes.root} variant="headline">
            {duration > 0 ? moment.duration(duration).format("hh:mm:ss") : "Time's up"}
        </Typography>
    }
}
