import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Grid, Image, Label } from "semantic-ui-react";

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="footer">
                <Grid columns='equal' verticalAlign="middle" style={{ marginTop: 0, height: '100%'}}>
                    <Grid.Row >
                        <Grid.Column computer={2}>
                            <Image width={50} height={50} src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </Grid.Column>
                        <Grid.Column computer={9} >
                            <span className="footer-text" style={{textAlign: 'left'}}> © 2019 xyz Inc. All Rights Reserved</span>
                        </Grid.Column>
                        <Grid.Column computer={1} className="footer-text-column">
                            <span className="footer-text">Documentation</span>
                        </Grid.Column>
                        <Grid.Column computer={1} className="footer-text-column" >
                            <span className="footer-text">SDK Overview</span>
                        </Grid.Column>
                        <Grid.Column computer={1} className="footer-text-column">
                            <span className="footer-text btn">Builder Program</span>
                        </Grid.Column>
                        <Grid.Column computer={1} className="footer-text-column">
                            <span className="footer-text btn">Terms of Use</span>
                        </Grid.Column>
                        <Grid.Column computer={1} className="footer-text-column">
                            <span className="footer-text btn">Privacy Policy</span>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default (FooterComponent);