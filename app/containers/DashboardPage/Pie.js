import React, { PropTypes } from 'react';
import {isUndefined} from 'lodash';
import styled from 'styled-components';

function Pie(props) {
  if(props && !_.isUndefined(props.value.data)) {
    google.charts.setOnLoadCallback(function() {
      let data = new google.visualization.DataTable();
      data.addColumn('string', props.value.columns.value);
      data.addColumn('number', props.value.data.length);
      data.addRows(props.value.data);

      let options = props.value.options;
      let chart = new google.visualization.PieChart(document.getElementById(props.refId));
      chart.draw(data, options);
    });
  }
  return null;
};

Pie.propTypes = {
 value: PropTypes.any,
 refId: PropTypes.string
};

export default Pie;