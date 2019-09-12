import React from 'react';
import { connect } from 'react-redux';
import ImgMediaCard from './ImgMediaCard';

const Home = props => (
    <div style={{ marginTop: 60, marginLeft: 40 }}>
        <ImgMediaCard />
    </div>
    
);

export default connect()(Home);
