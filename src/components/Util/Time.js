import moment from 'moment';

const converTime =(time) => moment(time.toString()).valueOf();
const convertToHumanReadableTime = time => moment(time).format('llll')

const compose = (...fns) => x => fns.reduce((acc,fn) =>fn(acc),x )

export const timeConverter = time => compose(
  converTime,
  convertToHumanReadableTime
)(time);
