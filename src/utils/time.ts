import moment from 'moment';

export const getParkedTimeInterval = (
  enterTimeString: string,
  nowTimeString: string
) => moment.utc(moment(nowTimeString).diff(moment(enterTimeString)));

export const getParkedTimeIntervalInMinutes = (
  enterTime: string,
  outTime: string
) => moment(enterTime).hour() * 60 + moment(outTime).minute();

export const getParkedTimeFormatted = (time: moment.Moment) => {
  const parkedTimeString = time.format('DD, HH:mm');
  const splittedParkedTimeString = parkedTimeString.split(',');

  return `${
    splittedParkedTimeString[0] === '01'
      ? ''
      : `${splittedParkedTimeString[0]} dias, `
  }${splittedParkedTimeString[1]}`;
};
