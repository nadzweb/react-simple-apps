import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import {each} from 'lodash';

import H2 from 'components/H2';
import messages from './messages';

import {AttendeeRow, Big, Div, Form} from './Style';

export default class MeetingCalculatorPage extends React.Component {
  
  constructor() {
    super();
    this.state = {
      attendees: [{ name: '', cost: 0, hours:0 }]
    };
  }
  
  handleAttendeeNameChange = (idx) => (evt) => {
    const newAttendees = this.state.attendees.map((attendee, sidx) => {
      if (idx !== sidx) return attendee;
      return { ...attendee, name: evt.target.value, cost:attendee.cost , hours:attendee.hours };
    });
    this.setState({ attendees: newAttendees });
  }
  handleAttendeeHoursChange = (idx) => (evt) => {
    const newAttendees = this.state.attendees.map((attendee, sidx) => {
      if (idx !== sidx) return attendee;
      return { ...attendee, name: attendee.name, cost:attendee.cost , hours:evt.target.value };
    });
    this.setState({ attendees: newAttendees });
  }
  handleAttendeeCostChange = (idx) => (evt) => {
    const newAttendees = this.state.attendees.map((attendee, sidx) => {
      if (idx !== sidx) return attendee;
      return { ...attendee, name: attendee.name, cost:evt.target.value , hours:attendee.hours };
    });
    this.setState({ attendees: newAttendees });
  }  
  
  handleAddAttendee = () => {
    this.setState({ attendees: this.state.attendees.concat([{ name: '', cost: 0, hours: 0 }]) });
  }
  
  handleRemoveAttendee = (idx) => () => {
    this.setState({ attendees: this.state.attendees.filter((s, sidx) => idx !== sidx) });
  }

  render() {
    let total = 0, average = 0;
    let cost =  _.each(this.state.attendees, function(v,k) {
      total += parseFloat(v.hours) * parseFloat(v.cost);
    });
    average = (total/this.state.attendees.length);
    return (
      <div className="col-12 col-sm-12 col-md-9">
        <Helmet
          title="Meeting Calculator Page"
          meta={[
            { name: 'description', content: 'Meeting Calculator page' },
          ]}
        />
        
        <H2>
          <FormattedMessage {...messages.heading} />
        </H2>
        <FormattedMessage {...messages.blurb} />
        <Form onSubmit={this.handleSubmit}>
          { total != 0 && 
              <div className="row">
                <div className="col col-3 col-md-4"><FormattedMessage {...messages.attendeeName} /></div>
                <div className="col col-3 col-md-2"><FormattedMessage {...messages.attendeeHour} /></div>
                <div className="col col-3 col-md-2"><FormattedMessage {...messages.attendeeCostHour} /></div>
                <div className="col col-3 col-md-4">&nbsp;</div>
            </div>
          }

          {this.state.attendees.map((attendee, idx) => (
            <AttendeeRow key={idx} className="row attendee-row">
              <div className="col col-3 col-md-4">
                <input
                  type="text"
                  name="name"
                  value={attendee.name}
                  onChange={this.handleAttendeeNameChange(idx)}
                />
              </div>
              <div className="col col-3 col-md-2">
                <input
                  type="number"
                  name="hours"
                  value={attendee.hours}
                  onChange={this.handleAttendeeHoursChange(idx)}
                />
              </div>
              <div className="col col-3 col-md-2">
              <input
                type="number"
                name="cost"
                value={attendee.cost}
                onChange={this.handleAttendeeCostChange(idx)}
              />
              </div>
              <div className="col col-3 col-md-4">
                <button type="button" onClick={this.handleRemoveAttendee(idx)} className="btn btn-secondary"><FormattedMessage {...messages.remove} /></button>
              </div>
            </AttendeeRow>
          ))}
          <div className="row">
            <div className="col-12">
              <button type="button" onClick={this.handleAddAttendee} className="btn btn-primary"><FormattedMessage {...messages.addAttendee} /></button>
            </div>
          </div>
          <br/>
          { total != 0 && !_.isNaN(total) &&
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="alert alert-success text-center" role="alert">
                  <div>
                    <FormattedMessage {...messages.totalCost} /><br />
                    <Big> <FormattedNumber value={total} style="currency" currency="USD"/></Big><br/><br/>
                    <FormattedMessage {...messages.averageCost} /><br />
                    <Big> <FormattedNumber value={average} style="currency" currency="USD"/></Big>
                    
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                 <div className="alert alert-info" role="alert">
                  <strong><FormattedMessage {...messages.summary} /></strong>
                  <ul>
                  {this.state.attendees.map((attendee, idx) => (
                    <li key={idx}>{attendee.name} - {attendee.hours} {attendee.hours>1?'hrs':'hr'} at {attendee.cost}/hr = <FormattedNumber value={attendee.hours*attendee.cost} style="currency" currency="USD"/>
                    </li>
                  ))}
                  </ul>
                 </div>
              </div>
            </div>
          }         

        </Form>
     </div>
    )
  }
}