import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Icon, Image } from "semantic-ui-react";

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yourTeamStatus: 'no-team'
        }
        this.onChangeTeamStatus = this.onChangeTeamStatus.bind(this);
        this.join = this.join.bind(this);
        this.skip = this.skip.bind(this);
    }

    onChangeTeamStatus(status) {
        this.setState({ yourTeamStatus: status })
    }

    join() {
        let changeStatus;
        switch (this.state.yourTeamStatus) {
            case "invite":
                changeStatus = "success";
                break;
            case "success":
                changeStatus = "fail";
                break;
            case "fail":
                changeStatus = "download";
                break;
            default:
                break;
        }
        this.onChangeTeamStatus(changeStatus);
    }
    
    skip() {
        this.props.history.push('/project')
    }

    render() {
        return (
            <div id="team">
                <div className="container">
                    <div className="subcontainer">
                        <Header as='h1' className="header">
                            {
                                this.state.yourTeamStatus === 'no-team' ? "Looks like you're not part of a team yet" :
                                    (this.state.yourTeamStatus === 'create') ? "Create your team's Abridged URL." :
                                        (this.state.yourTeamStatus === 'join') ? "What is your Abridged URL ?" :
                                            (this.state.yourTeamStatus === 'invite') ? "John Doe has envited you to a team!" :
                                                (this.state.yourTeamStatus === 'success') ? "Looks like you found your team!" :
                                                    (this.state.yourTeamStatus === 'fail') ? "Looks like you don't have access to this team!" :
                                                        (this.state.yourTeamStatus === 'download') ? "Install the command line interface (CLI) to get started." : null
                            }
                        </Header>
                        {this.state.yourTeamStatus === 'no-team' &&
                            <Grid columns='equal' verticalAlign="middle" className="large-btn-container">
                                <Grid.Row style={{ height: '100%' }}>
                                    <Grid.Column computer={8} mobile={16} style={{ height: '100%' }} onClick={() => this.onChangeTeamStatus('create')}>
                                        <div className="large-btn">
                                            <Header as='h1' className="large-btn-header">
                                                Create Team
                                        </Header>
                                            <Icon size="huge" className="large-btn-icon" name='add circle' />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column computer={8} mobile={16} style={{ height: '100%' }} onClick={() => this.onChangeTeamStatus('join')}>
                                        <div className="large-btn">
                                            <Header as='h1' className="large-btn-header">
                                                Join Team
                                        </Header>
                                            <Icon size="huge" className="large-btn-icon" name='users' />
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        }
                        {(this.state.yourTeamStatus === 'create' || this.state.yourTeamStatus === 'join') &&
                            <>
                            <Form className="form">
                                <Form.Field className="form-field">
                                    <input className="form-input form-label" placeholder="Team URL" />
                                    <label className="form-label">.abridged.io</label>
                                </Form.Field>
                                {this.state.yourTeamStatus === 'create' && <Button className="form-btn" onClick={this.continue}>Continue</Button>}
                                {this.state.yourTeamStatus === 'join' && <Button className="form-btn" onClick={() => this.onChangeTeamStatus('invite')}>Join</Button>}
                            </Form>
                            {this.state.yourTeamStatus === 'create' &&
                                <div className="underlined team-bottom" onClick={() => this.onChangeTeamStatus('join')} >
                                    <label className="bottom-text"> Have an existing team? Join a Team </label>
                                    <Icon className="form-icon" disabled name='angle right' />
                                </div>
                            }
                            {this.state.yourTeamStatus === 'join' &&
                                <div className="underlined team-bottom" onClick={() => this.onChangeTeamStatus('create')} >
                                    <label className="bottom-text"> Don't have an existing team? Create a Team </label>
                                    <Icon className="form-icon" disabled name='angle right' />
                                </div>
                            }
                            </>
                        }
                        {
                            (this.state.yourTeamStatus === 'invite' || this.state.yourTeamStatus === 'success' || this.state.yourTeamStatus === 'fail') &&
                            <>
                            <div className="large-btn large-btn-solo">
                                <Image width={70} height={70} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Header as='h1' className="large-btn-header" style={{ marginBottom: 0 }}>
                                    Abridged
                                </Header>
                                <span>abridged.abridged.io</span>
                            </div>
                            <div className="form">
                                <Button className="form-btn bottom-btn" onClick={this.join}>{(this.state.yourTeamStatus === 'invite' || this.state.yourTeamStatus === 'success') ? "Join" : "Request Access"}</Button>
                            </div>
                            </>
                        }
                        {
                            (this.state.yourTeamStatus === 'download') &&
                            <>
                            <div className="large-btn large-btn-solo">
                                <Header as='h1' className="large-btn-header">
                                    Download Cli
                                </Header>
                                <Icon size="huge" className="large-btn-icon" name='add circle' />
                            </div>
                            <div className="underlined team-bottom"  onClick={this.skip}  >
                                <label className="bottom-text"> CLI already installed ? <span style={{color: '#27e774'}}>Skip this step</span> </label>
                                <Icon className="form-icon" disabled name='angle right' />
                            </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default (Team);