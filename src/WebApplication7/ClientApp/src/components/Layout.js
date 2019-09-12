import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import { NavMenu1 } from './NavMenu1';
import ButtonAppBar, { MenuMaterial } from './MenuMaterial';
import FixedContainer from './ContainerFixed';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



export default props => (
    
    <Grid fluid>
    <Row>
            <ButtonAppBar />
    </Row>
    <React.Fragment>
            <CssBaseline />          
            <Container fixed>                
                <Typography component="div" style={{ backgroundColor: 'white', height: '100vh' }} >
                    <div style={{ marginTop: 30, marginLeft: 40 }}>
                        {props.children}
                    </div>
                    </Typography>
               
        </Container>
    </React.Fragment>
    
       
        
        
    </Grid>
);
