import React from 'react';
import { Row, Col } from 'reactstrap';
import Searchbox from '../searchbox';
import DepmapGenesHeader from '../depmapGenesHeader';
import HomeSection from '../homeSection';
import TissuesSummary from '../tissuesSummary';

const Home = () => (
  <React.Fragment>
    <HomeSection customStyle={{ padding: '100px 25px 100px 25px' }}>
      <DepmapGenesHeader className="text-center" />
      <Searchbox />
    </HomeSection>

    <HomeSection>
      <TissuesSummary />
    </HomeSection>
  </React.Fragment>
);

export default Home;
