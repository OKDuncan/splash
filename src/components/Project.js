import React, { Component } from 'react';
import { Button, Dropdown, Grid, Header, Icon, Input, Label, Menu, TextArea } from "semantic-ui-react";
import HeaderComponent from './Header';
import DropdownItem from 'semantic-ui-react/dist/commonjs/modules/Dropdown/DropdownItem';

const FavoriteTemplate = ({ item, selectTemplate }) => {
    return (
        <Grid.Column mobile={12} tablet={12} computer={4} textAlign="left">
            <div className="large-btn itemTemplate">
                <div style={{ height: '60%' }}>
                    <h3>{item.title}</h3>
                    <p className="favorite-template-description">{item.description}</p>
                </div>
                <Button className="form-btn" style={{ alignSelf: 'center' }} onClick={() => { selectTemplate(item) }} >Use Template</Button>
            </div>
        </Grid.Column>
    )
};

const Projects = ({ item, selectProject }) => {
    let color = item.status ? 'green' : 'orange'
    return (
        <Grid.Column mobile={12} tablet={12} computer={4} textAlign="left">
            <div className="large-btn itemTemplate" onClick={() => selectProject(item)} >
                <div style={{ width: '100%' }}>
                    <h3>{item.title} <Label circular color={color} empty /> </h3>
                    <p className="projects-description" style={{ webkitBoxOrient: 'vertical' }}>{item.description}</p>
                </div>
                <div className="graph-container">
                </div>
                <div>
                    <h4>Integrations</h4>
                    <Grid>
                        {item.integrations.map((item, index) =>
                            <Grid.Column mobile={16} tablet={16} computer={8} textAlign="left" style={{ paddingTop: 2, paddingBottom: 2 }} >
                                <span> - {item}</span>
                            </Grid.Column>
                        )}
                    </Grid>
                </div>
            </div>
        </Grid.Column>
    )
};

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProjects: true,
            addProject: false,
            activeItem: 'your-projects',
            noConfigure: true,
            useTemplate: {},
            useProject: {},
            showProjectItem: false,
            projects: [{
                title: "Pet Shop",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text e",
                integrations: ["payment channel", "synthetic asset", "wyre"],
                status: 1
            }],
            favoriteTemplates: [{
                title: 'React',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            }, {
                title: 'Vue',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text e",
            },]
        }

        this._addConfigure = this._addConfigure.bind(this);
    }

    componendDidUpdate() {
        console.log('update')
    }

    _showElement(e, activeMenu) {
        let states = {
            showProjects: false,
            addProject: false,
            showProjectItem: false,
            activeItem: activeMenu,
        }
        switch (e) {
            case 'projects':
                states.showProjects = true;
                break;
            case 'add-project':
                states.addProject = true;
                break;
            case 'project-item':
                states.showProjectItem = true;
                break;
        }
        console.log(states);
        this.setState(states);
    }

    _addConfigure() {
        this.setState({ noConfigure: false })
    }

    _selectTemplate(template) {
        this.setState({ useTemplate: template });
    }

    _selectProject(project) {
        this.setState({ useProject: project });
    }

    handleItemClick = (e, { name }) => this.setState({ useTemplate: {}, activeItem: name })

    render() {
        const { activeItem, projects } = this.state
        return (
            <div id="project">
                <HeaderComponent isLoggedIn={true} showElement={(e, activeMenu) => this._showElement(e, activeMenu)}>
                </HeaderComponent>
                <div className="project-view-container">
                    <div className="container">
                        {this.state.showProjects &&
                            <>
                            <h1 className="header-text">Projects</h1>
                            <Menu className="project-menu" pointing secondary>
                                <Menu.Item name="your-projects" active={activeItem === 'your-projects'} onClick={this.handleItemClick} >
                                    <span>Your Projects  <Label circular>{projects.length}</Label> </span>
                                </Menu.Item>
                                <Menu.Item name="favorite-projects" active={activeItem === 'favorite-projects'} onClick={this.handleItemClick} >
                                    <span>Favorite Projects  <Label circular> 0</Label> </span>
                                </Menu.Item>
                                <Menu.Item name="explore-projects" active={activeItem === 'explore-projects'} onClick={this.handleItemClick} >
                                    <span style={{ lineHeight: '30px' }}>Explore Projects </span>
                                </Menu.Item>
                            </Menu>
                            <div className="subcontainer">
                                {(activeItem === 'your-projects' && projects.length === 0) &&
                                    <div className="large-btn large-btn-solo" onClick={() => this._showElement('add-project', 'blank-template')}>
                                        <Header as='h1' className="large-btn-header">
                                            New Project
                                        </Header>
                                        <Icon size="huge" className="large-btn-icon" name='add circle' />
                                    </div>
                                }
                                {(activeItem === 'your-projects' && projects.length > 0) &&
                                    <div className="project-menu-container" style={{ padding: 20 }}>
                                        <Grid style={{ overflow: 'auto', height: '100%' }}>
                                            {this.state.projects.map((item, index) =>
                                                <Projects key={index} item={item} selectProject={(project) => { this._selectProject(project); this._showElement('project-item', 'data'); }} />
                                            )}
                                        </Grid>
                                    </div>
                                }
                            </div>
                            </>
                        }
                        {this.state.addProject &&
                            <div className="add-project-container">
                                <h1 className="header-text">New Project</h1>
                                <Menu className="project-menu" pointing secondary>
                                    <Menu.Item name="blank-template" active={activeItem === 'blank-template'} onClick={this.handleItemClick} >
                                        <span style={{ lineHeight: '30px' }}>Blank Template </span>
                                    </Menu.Item>
                                    <Menu.Item name="favorite-template" active={activeItem === 'favorite-template'} onClick={this.handleItemClick} >
                                        <span>Favorite Templates  <Label circular> {this.state.favoriteTemplates.length}</Label> </span>
                                    </Menu.Item>
                                    <Menu.Item name="explore-template" active={activeItem === 'explore-template'} onClick={this.handleItemClick} >
                                        <span style={{ lineHeight: '30px' }}>Explore Templates </span>
                                    </Menu.Item>
                                </Menu>
                                <div className="project-menu-container">
                                    {(activeItem === 'blank-template') || (activeItem === 'favorite-template' && Object.keys(this.state.useTemplate).length > 0) ?
                                        <> <Grid>
                                            <Grid.Row>
                                                <Grid.Column computer={8} >
                                                    <h3>Project Name</h3>
                                                    <Input placeholder='My awesome project' value={this.state.useTemplate ? this.state.useTemplate.title : ''} className="search-input-transparent" style={{ width: '100%' }} />
                                                    {(activeItem === 'favorite-template' && Object.keys(this.state.useTemplate).length > 0) ?
                                                        <>
                                                        <h3>Project Template</h3>
                                                        <Input placeholder='My awesome project' value={this.state.useTemplate ? this.state.useTemplate.title : ''} className="search-input-transparent" style={{ width: '100%' }} />
                                                        </>
                                                        : null}
                                                </Grid.Column>
                                                <Grid.Column computer={8} >
                                                    <div className="deployment-container">
                                                        <h3>Deployments</h3>
                                                        {this.state.noConfigure ?
                                                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                                                <span className="no-deployment-text">No deployments configured</span>
                                                                <Button className="form-btn white-btn" onClick={this._addConfigure} >Configure</Button>
                                                            </div>
                                                            : <div style={{ paddingLeft: 50, paddingRight: 50, textAlign: 'center' }}>
                                                                <Grid>
                                                                    <Grid.Row>
                                                                        <Grid.Column computer={8} className="configure-left">
                                                                            <h3>Infastracture: </h3>
                                                                        </Grid.Column>
                                                                        <Grid.Column computer={8}>
                                                                            <Dropdown text='Amazon' className="configure-dropdown" >
                                                                                <Dropdown.Menu>
                                                                                    <Dropdown.Item text='Open...' description='ctrl + o' />
                                                                                    <Dropdown.Item text='Save as...' description='ctrl + s' />
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </Grid.Column>
                                                                    </Grid.Row>
                                                                    <Grid.Row>
                                                                        <Grid.Column computer={8} className="configure-left">
                                                                            <h3>Repository: </h3>
                                                                        </Grid.Column>
                                                                        <Grid.Column computer={8}>
                                                                            <Dropdown text='Github' className="configure-dropdown" >
                                                                                <Dropdown.Menu>
                                                                                    <Dropdown.Item text='Open...' description='ctrl + o' />
                                                                                    <Dropdown.Item text='Save as...' description='ctrl + s' />
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </Grid.Column>
                                                                    </Grid.Row>
                                                                </Grid>
                                                            </div>
                                                        }
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column computer={16} >
                                                    <h3>Project description (optional)</h3>
                                                    <TextArea placeholder='Description details' value={this.state.useTemplate ? this.state.useTemplate.description : ''} rows={5} style={{ width: '100%', padding: 10, borderRadius: 5 }} />
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        <Button className="form-btn" style={{ float: 'right', marginTop: 25 }} >Create Project</Button>
                                        </> : null
                                    }
                                    {activeItem === 'favorite-template' && Object.keys(this.state.useTemplate).length === 0 &&
                                        <Grid style={{ overflow: 'auto', height: '100%' }}>
                                            {this.state.favoriteTemplates.map((item, index) =>
                                                <FavoriteTemplate key={index} item={item} selectTemplate={(template) => { this._selectTemplate(template) }} />
                                            )}
                                        </Grid>
                                    }
                                </div>
                            </div>
                        }
                        {this.state.showProjectItem &&
                            <>
                            <div>
                                <h1 className="header-text">
                                    <Icon className="project-item-star-icon" name='star outline' />
                                    {this.state.useProject.title}
                                    <Label className="project-item-status-icon" circular color={this.state.useProject.status ? 'green' : 'orange'} empty />
                                </h1>
                                <Icon className="project-item-star-icon" name='star outline' />
                            </div>
                            <Menu className="project-menu" pointing secondary>
                                <Menu.Item name="data" active={activeItem === 'data'} onClick={this.handleItemClick} >
                                    <span style={{ lineHeight: '30px' }}>Data </span>
                                </Menu.Item>
                                <Menu.Item name="alerts" active={activeItem === 'alerts'} onClick={this.handleItemClick} >
                                    <span>Alerts  <Label circular> 0</Label> </span>
                                </Menu.Item>
                                <Menu.Item name="events" active={activeItem === 'events'} onClick={this.handleItemClick} >
                                    <span style={{ lineHeight: '30px' }}>Events </span>
                                </Menu.Item>
                                <Menu.Item name="integrations" active={activeItem === 'integrations'} onClick={this.handleItemClick} >
                                    <span style={{ lineHeight: '30px' }}>Integrations </span>
                                </Menu.Item>
                                <Menu.Item name="settings" active={activeItem === 'settings'} onClick={this.handleItemClick} >
                                    <span style={{ lineHeight: '30px' }}>Settings </span>
                                </Menu.Item>
                            </Menu>
                            <div className="subcontainer">
                                {activeItem === 'data' &&
                                    <span>adf</span>
                                }
                            </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default (Project);