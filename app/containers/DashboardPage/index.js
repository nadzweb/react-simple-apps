import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import {each, filter, isEmpty} from 'lodash';

import H2 from 'components/H2';
import messages from './messages';
import Pie from './Pie';
import Bar from './Bar';

import {InfoWrap} from './Style';

export default class DashboardPage extends React.Component {
  
  constructor() {
    super();
    this.state = {
      pieData: {},
      barData: {},
      contentData: []
    };
  }

  componentDidMount() {
    // setup bar and pie chart data, make ajax requests
    this.loadData();
  }

  loadData = () => {
    const requestURL = 'api-data.json';
    var self = this;
    fetch(requestURL)
    .then((response) => response.json())
    .then(function(data) {
      self.setState({
          contentData: data.dashboard.content, 
          pieData:data.dashboard.pie,
          barData:data.dashboard.bar});
    })
    .catch(e => e);
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
            {this.state.contentData.map((data, idx) => (
            <div key={idx} className="col-12 col-sm-4">
              <InfoWrap>
                <div>{data.text}</div>
                { idx==0 &&
                  <div>
                  <i className="fa fa-money"></i>
                  <div>
                    <FormattedNumber value={data.value} style="currency" currency="USD"/>
                  </div>
                 </div>
                }

                { idx==1 &&
                  <div>
                  <i className="fa fa-group"></i>
                  <div>
                    <FormattedNumber value={data.value}/>
                  </div>
                 </div>
                }
                { idx==2 &&
                  <div>
                  <i className="fa fa-long-arrow-up"></i>
                  <div>
                    {data.value}
                  </div>
                 </div>
                }
              </InfoWrap>
            </div>
            ))}
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div id="piechart"><div className="loader">Loading...</div></div>
            <Pie value={this.state.pieData} refId="piechart" />
          </div> 
          <div className="col-12 col-md-6">
            <div id="barchart"><div className="loader">Loading...</div></div>
            <Bar value={this.state.barData} refId="barchart" />
          </div>
        </div>

     </div>
    )
  }
}