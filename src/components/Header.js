import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Dropdown, Form, Grid, Icon, Image, Input, Label, Menu } from "semantic-ui-react";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDropdownVisible: false,
            activeMenu: ''
        }
        this.renderLogoutHeader = this.renderLogoutHeader.bind(this);
        this.renderLoginHeader = this.renderLoginHeader.bind(this);
        this._handleCloseDropdown = this._handleCloseDropdown.bind(this);
        this._handleOpenDropdown = this._handleOpenDropdown.bind(this);
    }

    componendDidUpdate() {
        console.log('update')
    }

    _handleCloseDropdown(dpElement) {
        switch (dpElement) {
            case 'projects':
                this.setState({ projectDropdownVisible: false })
                break;
            default:
                break;
        }
    }

    _handleOpenDropdown(dpElement) {
        switch (dpElement) {
            case 'projects':
                this.setState({ projectDropdownVisible: true })
                break;
            default:
                break;
        }
    }

    _changeView(closeView, activeItem) {
        this._handleCloseDropdown(closeView);
        this.props.showElement(closeView, activeItem);
    }

    
    handleMenuClick = (e, { name }) => { this.setState({ activeItem: name }); this.props.goToPage(name)}

    renderLoginHeader() {
        return (
            <Grid.Row className="loginHeader">
                <Grid.Column computer={1} style={{ display: 'flex', alignItems: 'center' }}>
                    <Image width={50} height={50} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column computer={15} >
                    <Menu secondary className="menu-item">
                        <Menu.Menu>
                            <Menu.Item className="white-grid-column">
                                <Dropdown
                                    text='Projects'
                                    open={this.state.projectDropdownVisible}
                                    onBlur={() => this._handleCloseDropdown('projects')}
                                    onFocus={() => this._handleOpenDropdown('projects')}
                                >
                                    <Dropdown.Menu className="project-menu-dropdown">
                                        <div className="project-container">
                                            <Grid columns='equal' style={{ height: '100%' }}>
                                                <Grid.Row>
                                                    <Grid.Column computer={6}>
                                                        <div className="project-left-container">
                                                            <span onClick={() => { this._changeView('projects', 'your-projects') }}>Your Projects</span>
                                                            <span onClick={() => { this._changeView('projects', 'favorite-projects') }}>Favorite Projects</span>
                                                            <span onClick={() => { this._changeView('projects', 'explore-projects') }}>Explore Projects</span>
                                                        </div>
                                                    </Grid.Column>
                                                    <Grid.Column computer={10}>
                                                        <div className="project-right-container">
                                                            <Input icon='search' placeholder='Search...' className="search-input-transparent" />
                                                            <span className="project-right-text">Frequently viewed</span>
                                                        </div>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item>
                                <Dropdown text='Integrations'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='New' />
                                        <Dropdown.Item text='Open...' description='ctrl + o' />
                                        <Dropdown.Item text='Save as...' description='ctrl + s' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item>
                                <Dropdown text='Analytics'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='New' />
                                        <Dropdown.Item text='Open...' description='ctrl + o' />
                                        <Dropdown.Item text='Save as...' description='ctrl + s' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item>
                                <div className="new-project-container">
                                    <Icon name="add circle" />
                                    <span>New Project</span>
                                </div>
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position='right' style={{ paddingRight: 20 }}>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...' className="search-input" />
                                {/* <Input placeholder='Search...' /> */}
                            </Menu.Item>
                            <Menu.Item className="item-with-icon">
                                <Image width={30} height={30} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Dropdown>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='New' />
                                        <Dropdown.Item text='Open...' description='ctrl + o' />
                                        <Dropdown.Item text='Save as...' description='ctrl + s' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item className="item-with-icon">
                                <Image width={30} height={30} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Dropdown>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='New' />
                                        <Dropdown.Item text='Open...' description='ctrl + o' />
                                        <Dropdown.Item text='Save as...' description='ctrl + s' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        )
    }

    renderLogoutHeader() {
        const { activeItem } = this.state;
        return (
            <Grid.Row>
                <Grid.Column computer={10}>
                    <Image width={70} height={70} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column computer={6}>
                    <Menu className="header-menu" pointing secondary>
                        <Menu.Item name="documentation" active={activeItem === 'documentation'} onClick={this.handleMenuClick} >
                            <span className="header-text" >DOCUMENTATION</span>
                        </Menu.Item>
                        <Menu.Item name="sdk-overview" active={activeItem === 'sdk-overview'} onClick={this.handleMenuClick} >
                            <span className="header-text">SDK OVERVIEW</span>
                        </Menu.Item>
                        <Menu.Item style={{borderBottom: 0}} name="request-access" active={activeItem === 'request-access'} onClick={this.handleMenuClick} >
                        <span className="header-text btn">REQUEST ACCESS</span>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>
                {/* <Grid.Column computer={2} className="header-text-column">
                    <span className="header-text">DOCUMENTATION</span>
                </Grid.Column>
                <Grid.Column computer={2} className="header-text-column" >
                    <span className="header-text underlined">SDK OVERVIEW</span>
                </Grid.Column>
                <Grid.Column computer={2} className="header-text-column">
                    <span className="header-text btn">ACCESS</span>
                </Grid.Column> */}
            </Grid.Row>
        )
    }

    render() {
        return (
            <div id="header">
                <Grid columns='equal' verticalAlign="middle">
                    {
                        !this.props.isLoggedIn ?
                            this.renderLogoutHeader() : this.renderLoginHeader()
                    }
                </Grid>
            </div>
        );
    }
}

export default (HeaderComponent);