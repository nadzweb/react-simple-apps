import React, { PropTypes } from 'react';
import {isUndefined} from 'lodash';
import styled from 'styled-components';

function Bar(props) {
  if(props && !_.isUndefined(props.value) && !_.isEmpty(props.value)) {
    google.charts.setOnLoadCallback(function() {
      let data = new google.visualization.DataTable();
      data.addColumn('string', props.value.legends.xvalue);
      data.addColumn('number', props.value.legends.yvalue);
      data.addRows(props.value.data);

      let options = props.value.options;
      let chart = new google.visualization.ColumnChart(document.getElementById(props.refId));
      chart.draw(data, options);
    });
  }
  return null;
};

Bar.propTypes = {
 value: PropTypes.any,
 refId: PropTypes.string
};

export default Bar;