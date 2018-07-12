import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import Searchbox from '../searchbox';
import DepmapGenesHeader from '../depmapGenesHeader';
import HomeSection from '../homeSection';
import TissuesSummary from '../tissuesSummary';

const Home = () => (
  <Container>
    <HomeSection customStyle={{ padding: '100px 25px 100px 25px' }}>
      <DepmapGenesHeader className="text-center" />
      <Searchbox />
    </HomeSection>

    <HomeSection customStyle={{ borderTop: '1px solid green' }}>
      <TissuesSummary />
    </HomeSection>
  </Container>
);

export default Home;
