import React from 'react';
import { connect } from 'react-redux';
import { fetchTissues } from './actions/tissues';
import PieChart from '../pieChart';

class TissuesPieChart extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchTissues();
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <PieChart tissues={this.props.tissues} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tissues: state.tissues,
    hasErrored: state.tissuesHasErrored,
    isLoading: state.tissuesIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTissues: () => dispatch(fetchTissues())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TissuesPieChart);