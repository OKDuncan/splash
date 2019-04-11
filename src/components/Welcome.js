import React, { Component } from "react";
import { Button, Checkbox, Form, Grid, Header, Icon, Image } from "semantic-ui-react";
import HeaderComponent from './Header';
import FooterComponent from './Footer';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeModal: 'login'
        }
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
        this.continue = this.continue.bind(this);
        this.goToPage = this.goToPage.bind(this);
    }

    signUp() {
        this.setState({ activeModal: 'signUp' })
    }

    login() {
        this.setState({ activeModal: 'login' })
    }

    continue() {
        if (this.state.activeModal === 'signUp') {
            this.setState({ activeModal: 'verify' })
        } else {
            this.props.history.push("/team");
        }
    }

    goToPage(menu) {
        let nextPage;
        switch(menu) {
            case 'sdk-overview':
                nextPage = "basic-splash";
            break;
        }
        this.props.history.push(nextPage);
    }

    render() {
        return (
            <>
            <div className="body">
                <HeaderComponent isLoggedIn={false} goToPage={(menu)=>{ this.goToPage(menu) }} />
                <div id="welcome">
                    <Grid columns='equal' verticalAlign="middle" className="welcome-grid">
                        <Grid.Row>
                            <Grid.Column computer={6} className='welcome-column'>
                                <div className="welcome-left-container">
                                    <div id="loginModal" className="modal">
                                        <Header as='h1' className="header">{this.state.activeModal === 'login' ? 'Login' : (this.state.activeModal === 'signUp' ? 'Sign Up' : 'Check your inbox for your verification code')}</Header>
                                        <Form>
                                            {this.state.activeModal !== 'verify' &&
                                                <>
                                                <Form.Field className="form-field">
                                                    <div className="form-label-container">
                                                        <label className="form-label">Email:</label>
                                                    </div>
                                                    <input className="input" id="email" />
                                                </Form.Field>
                                                <Form.Field className="form-field">
                                                    <div className="form-label-container">
                                                        <label className="form-label">Password:</label>
                                                        {this.state.activeModal === 'login' && <label className="form-label-right">Forgot your password?</label>}
                                                    </div>
                                                    <input className="input" id="password" />
                                                </Form.Field>
                                                </>
                                            }
                                            {this.state.activeModal === 'signUp' &&
                                                <Form.Field className="form-field">
                                                    <div className="form-label-container">
                                                        <label className="form-label">Confirm Password:</label>
                                                    </div>
                                                    <input className="input" id="confirmPass" />
                                                </Form.Field>
                                            }
                                            {this.state.activeModal === 'verify' &&
                                                <Form.Field className="form-field">
                                                    <div className="form-label-container">
                                                        <label className="form-label">Access Code: </label>
                                                    </div>
                                                    <input className="input" id="confirmPass" />
                                                </Form.Field>
                                            }
                                            {this.state.activeModal === 'login' &&
                                                <Form.Field className="form-field">
                                                    <div className="form-custom-checkbox">
                                                        <label>Keep me logged in </label>
                                                        <Checkbox className="form-checkbox" id="keepLoggedIn" />
                                                    </div>
                                                </Form.Field>
                                            }
                                            <Form.Field className="form-field">
                                                <div className="form-label-container form-btn-container">
                                                    <Button className="form-btn" id="loginContinue" onClick={this.continue}>Continue</Button>
                                                    {this.state.activeModal === 'login' &&
                                                        <div className="underlined" onClick={this.signUp} >
                                                            <label className="signUp">Don't have an account? Sign Up </label>
                                                            <Icon className="signUp form-icon" disabled name='angle right' />
                                                        </div>
                                                    }
                                                    {this.state.activeModal === 'signUp' &&
                                                        <div className="underlined" onClick={this.login} >
                                                            <label className="signUp">Already have an account? Login </label>
                                                            <Icon className="signUp form-icon" disabled name='angle right' />
                                                        </div>
                                                    }
                                                    {this.state.activeModal === 'verify' &&
                                                        <div className="underlined" >
                                                            <label className="signUp">Resend Verification Email </label>
                                                            <Icon className="signUp form-icon" disabled name='angle right' />
                                                        </div>
                                                    }
                                                </div>
                                            </Form.Field>
                                        </Form>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column computer={10} className='welcome-column'>
                                <div className="welcome-right-container">
                                    <Image width={70} height={70} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
            <FooterComponent />
            </>
        );
    }
}
