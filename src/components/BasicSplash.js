import React, { Component } from "react";
import { Grid, Header, Icon, Image, Menu, Button } from "semantic-ui-react";


const HeaderBar = () => {
    return (
        <Grid id="basic-splash-header">
            <Grid.Row>
                <Grid.Column computer={8} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image width={50} height={50} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column computer={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', verticalAlign: 'middle' }}>
                    <a href="https://abridged.typeform.com/to/r8M964"className="header-text btn" id="early" style="color:#FFFFFF;" >REQUEST EARLY ACCESS</a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

const FooterBar = () => {
    return (
        <div id="basic-splash-footer">
            {/* <Grid columns='equal' verticalAlign="middle" style={{ marginTop: 0, height: '100%' }}>
                <Grid.Row >
                    <Grid.Column computer={13} tablet={12} mobile={6} >
                        <Image width={50} height={50} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column computer={1} tablet={2} mobile={5} className="footer-text-column">
                        <span className="footer-text btn">Terms of Use</span>
                    </Grid.Column>
                    <Grid.Column computer={2} tablet={2} mobile={5} className="footer-text-column">
                        <span className="footer-text btn">Privacy Policy</span>
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}
        </div>
    )
}

const sdkDesc = 'Our SDK gives developers of all experience levels standardized access to scalability and UX tools, lowering the learning curve and accelerating workflow.';
const cliDesc = 'Our CLI makes it extremely easy to install the Web3 solutions best suited for your app to cut time from development to deployment.';
const portalDesc = 'The Abridged portal is a subscription-based PaaS that provides analytics and product development resources for all apps developed with the Abridged SDK/CLI.'

export default class BasicSplash extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'sdk',
            menuDesc: sdkDesc
        }
    }

    handleClick (e) {
        switch(e.currentTarget.id) {
            case 'early':
                window.open('https://abridged.typeform.com/to/r8M964',"_self")
                break;
            case 'enroll':
                window.open('https://abridged.typeform.com/to/RnFpLE',"_self")
                break;
        }
    }

    handleItemClick = (e, { name }) => {
        let menuDesc;
        switch (name) {
            case 'sdk':
                menuDesc = sdkDesc;
                break;
            case 'cli':
                menuDesc = cliDesc;
                break;
            case 'portal':
                menuDesc = portalDesc;
                break;
        }
        this.setState({ menuDesc: menuDesc, activeItem: name });
    }

    render() {
        const { activeItem, menuDesc } = this.state
        return (
            <div className="basic-splash-container">
                <div className="body">
                    <HeaderBar />
                    <div id="basic-splash">
                        <div className="header-container">
                            <Header as='h1' className="header">Bringing usability to Web 3.0</Header>
                            {/* <span className="subheader">The users want to use a great app.</span>
                            <span className="subheader">You want to build a great app.</span>
                            <span className="subheader">Don't let messy blockchain integrations get in the way either.</span> */}
                            <div className="divider" />
                        </div>
                        <div className="section">
                            <h1>The Abridged Suite</h1>
                            <span className="subheader">Abridged aggregates Ethereum layer 2 solutions, standardizes the access points to each integration, and provides them as components that modularly extend your app's functionality.</span>
                        </div>
                        <div className="section-2">
                            <Grid className="section-grid">
                                <Grid.Row className="section-row" >
                                    <Grid.Column computer={6} tablet={16} mobile={16} className="section-column section-column-menu">
                                        <Menu secondary vertical >
                                            <Menu.Item
                                                name='sdk'
                                                active={activeItem === 'sdk'}
                                                className="menu-header"
                                                onClick={this.handleItemClick}
                                            > SDK</Menu.Item>
                                            <Menu.Item
                                                name='cli'
                                                active={activeItem === 'cli'}
                                                className="menu-header"
                                                onClick={this.handleItemClick}
                                            > CLI</Menu.Item>
                                            <Menu.Item
                                                name='portal'
                                                active={activeItem === 'portal'}
                                                className="menu-header"
                                                onClick={this.handleItemClick}
                                            > Portal</Menu.Item>
                                        </Menu>
                                    </Grid.Column>
                                    <Grid.Column computer={10} className="section-column section-column-desc">
                                        <span className="menu-desc">{menuDesc}</span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row className="section-row-2">
                                    <Button onClick={this.handleClick} className="header-text btn" id="early">Request Early Access</Button>
                                </Grid.Row>
                            </Grid>
                        </div>
                        <div className="header-container section-3">
                            <h2>Abridged relies on an open source foundation, leveraging the power of community driven development</h2>
                            <div className="divider" />
                        </div>
                        <div className="section">
                            <span className="subheader">Want to build integrations into the Abridged SDK?</span>
                            <h2>Enroll in our Builder Program</h2>
                            <span className="subheader">Create integrations to gain exposure to the Abridged ecosystem.</span>
                        </div>
                        <div className="section-center">
                            <Button onClick={this.handleClick} className="btn enrol-btn white-btn" id ="enroll">ENROLL</Button>
                        </div>
                        {/* <div className="section" style={{ marginTop: 70 }}>
                            <span className="subheader">Next</span>
                            <h2>Request Early Access</h2>
                        </div>
                        <div className="section-center">
                            <div className="underlined team-bottom section-bottom " >
                                <label className="bottom-text"> Sign up to get early developer access to Abridged</label>
                                <Icon className="form-icon" disabled name='angle right' />
                            </div>
                        </div> */}
                    </div>
                </div>
                <FooterBar />
            </div>
        );
    }
}
