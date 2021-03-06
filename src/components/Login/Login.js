import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../../assets/logo.png'

const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            formErrors: {},
            login: false,
        }
        this.login = this.login.bind(this);
    }
    validateForm() {
        const { email, password } = this.state
        let formErrors = {}
        let formIsValid = true;
        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "Please enter your email address";
        }

        if (typeof email !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                formIsValid = false;
                formErrors["emailErr"] = "Please enter valid email.";
            }
        }
        if (!password) {
            formIsValid = false;
            formErrors["passErr"] = "Please enter your password.";
        }

        if (typeof password !== "undefined") {
            if (password.length < 6) {
                formIsValid = false;
                formErrors["passErr"] = "Password must be 6 characters long!";
            }
        }
        this.setState({ formErrors })
        return formIsValid
    }

    async login() {
        if (this.validateForm()) {
            this.props.history.push("/home")
        }
        //         const { email, password } = this.state
        //         const rawResponse = await fetch('https://online-auction-system.herokuapp.com/users/login', {
        //             method: 'POST',
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 email,
        //                 password,
        //             })
        //         });
        //         const content = await rawResponse.json();
        //         console.log(content)
        // if (content.message === "User registered successfully") {
        //     swal({
        //         title: "Welcome",
        //         text: "Account Created",
        //         icon: "success",
        //         button: "Done"
        //     }).then(() => {
        //         this.setState({
        //             fullName: "",
        //             email: "",
        //             password: ""
        //         })
        //     })
        //     this.props.history.push("/")
        // }
        // else{

        // }
        //     }
    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar}> */}
                    <img src={Logo} height="100" />
                    {/* </Avatar> */}
                    <Typography component="h1" variant="h5">
                        Sign in
        </Typography>
                    <div className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                            value={this.state.email}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <div className={classes.errorMsg}>{this.state.formErrors.emailErr}</div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                            value={this.state.password}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <div className={classes.errorMsg}>{this.state.formErrors.passErr}</div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.login}
                        >
                            Sign In
          </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Forget Password"}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        );
    }
}
export default withStyles(useStyles)(SignIn)