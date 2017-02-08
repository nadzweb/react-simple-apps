/*
 * Messages
 *
 * This contains all the text for the component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  heading: {
    id: 'simpleapps.containers.MeetingCalculatorPage.header',
    defaultMessage: 'Meeting Cost Calculator',
  },
  blurb: {
    id: 'simpleapps.containers.MeetingCalculatorPage.blurb',
    defaultMessage: 'Enter the attendee name, hours and cost/per hour to calculate the meeting cost.',
  },
  attendeeName: {
    id: 'simpleapps.containers.MeetingCalculatorPage.attendeeName',
    defaultMessage: 'Attendee name',
  },
  attendeeHour: {
    id: 'simpleapps.containers.MeetingCalculatorPage.attendeeHour',
    defaultMessage: 'Hour',
  },
  attendeeCostHour: {
    id: 'simpleapps.containers.MeetingCalculatorPage.attendeeCostHour',
    defaultMessage: 'Cost / hour',
  },
  remove: {
    id: 'simpleapps.containers.MeetingCalculatorPage.remove',
    defaultMessage: 'Remove',
  },
  addAttendee: {
    id: 'simpleapps.containers.MeetingCalculatorPage.addAttendee',
    defaultMessage: 'Add Attendee',
  },
  totalCost: {
    id: 'simpleapps.containers.MeetingCalculatorPage.totalCost',
    defaultMessage: 'Total meeting cost',
  },
  averageCost: {
    id: 'simpleapps.containers.MeetingCalculatorPage.averageCost',
    defaultMessage: 'Average cost',
  },
  summary: {
    id: 'simpleapps.containers.MeetingCalculatorPage.summary',
    defaultMessage: 'Summary',
  }
});
