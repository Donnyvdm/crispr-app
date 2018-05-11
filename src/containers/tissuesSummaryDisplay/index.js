import React from 'react';
import { Row, Col } from 'reactstrap';
import PieChart from '../pieChart';
import HomeSectionDescription from '../homeSectionDescription';
import TissuesSummaryDescription from '../tissuesSummaryDescription';

const tissuesSummaryDisplay = () => {
  return (
    <div>
      <Row className="stats-container">
        <Col xs={{ size: 12, offset: 0 }} sm={{ size: 4, offset: 2 }}>
          <PieChart />
        </Col>

        <Col
          className={'my-auto'}
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 4 }}
        >
          <HomeSectionDescription>
            <TissuesSummaryDescription />
          </HomeSectionDescription>
        </Col>
      </Row>
    </div>
  );
};

export default tissuesSummaryDisplay;