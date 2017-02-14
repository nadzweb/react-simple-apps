import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import {each, filter} from 'lodash';

import H2 from 'components/H2';
import messages from './messages';
import Pie from './Pie';
import Bar from './Bar';

import {BoardWrapper, AddTaskForm, Div, Form} from './Style';

export default class DashboardPage extends React.Component {
  
  constructor() {
    super();
    this.state = {
      pieData: {},
      barDie: {}
    };
  }

  componentDidMount() {
    // setup bar and pie chart data, make ajax requests here and fill data
    this.setupPieData();
    this.setupBarData();
  }

  setupPieData = () => {
    let data = [
      ['Facebook', 1],
      ['Twitter', 2],
      ['LinkedIn', 1],
      ['Billboards', 3],
      ['Conventional media', 4]
    ];
    let options = {'title':'Campaign Performances', 'width':400, 'height':300};
    let columns = {type:'string', value: 'Campaign Medium'}
    let obj =  {data:data, options:options, columns:columns};
    this.setState({pieData: obj});
  }

   setupBarData = () => {
    let data = [
      ['Facebook', 10000],
      ['Twitter', 7000],
      ['LinkedIn', 6111],
      ['Billboards', 1893],
      ['Conventional media', 1445]
    ];
    let options = {'title':'Traffic sources', 'width':400, 'height':300};
    let legends = {xvalue:'Traffic sources', yvalue:'Source value'};
    let obj =  {data:data, options:options, legends:legends};
    this.setState({barData: obj});
  }

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-9">
        <Helmet
          title="Dashboard Page"
          meta={[
            { name: 'description', content: 'A simple dashboard page with graphs' },
          ]}
        />
        
        <H2>
          <FormattedMessage {...messages.heading} />
        </H2>
        <FormattedMessage {...messages.blurb} />

        <div className="row">
          <div className="col-12 col-md-6">
            <div id="piechart"></div>
            <Pie value={this.state.pieData} refId="piechart" />
          </div> 
          <div className="col-12 col-md-6">
            <div id="barchart"></div>
            <Bar value={this.state.barData} refId="barchart" />
          </div>
        </div>

     </div>
    )
  }
}