import React, {Component, Fragment} from 'react';
import './App.css';
import PersistAppBar from "./components/PersistAppBar";
import CountDownTimer from './components/countdown'
import Provider from "react-redux/es/components/Provider";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core/styles"
import connect from "react-redux/es/connect/connect";
import {getContrast} from "./utils/ColorUtils";
import Paper from "@material-ui/core/es/Paper/Paper";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";


class App extends Component {
    state = {
        theme: this.props.UITheme,
        timerFinished: true,
    };

    componentWillMount() {
        const {UITheme} = this.props;


        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: UITheme.primary.main,

                },
                secondary: UITheme.secondary,
                background: {
                    default: UITheme.primary.main
                }
            },

            shadows: ["none"],

            overrides: {
                MuiButton: {
                    root: {
                        color: getContrast(UITheme.primary.main),
                    }
                },
                MuiInput: {
                    root: {
                        color: getContrast(UITheme.primary.main),
                        width: '200px',
                    },
                    underline: {
                       '&:before, &:after': {
                           borderBottom: 'none',
                           transition: 'none',
                       },
                       '&:hover:not($disabled):not($focused):not($error):before': {
                           borderBottom: '1px solid white',
                       },
                    }
                },

                MuiIconButton: {
                    root: {
                        color: getContrast(UITheme.primary.main),
                    }
                },

                MuiTypography: {
                    root: {
                        color: getContrast(UITheme.primary.main)
                    }
                },
            }
        });

        this.setState({
            theme: theme,
        })
    }

    render() {
        const {theme, timerFinished} = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <PersistAppBar/>
                <CountDownTimer/>
                <CssBaseline/>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {event: state.event, UITheme: state.UITheme}
};

export default connect(mapStateToProps)(App);
