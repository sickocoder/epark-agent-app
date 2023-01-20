import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const getPricing = (
  enterDate: moment.Moment,
  outDate: moment.Moment
) => {
  const spentTime = moment.duration(outDate.diff(enterDate));

  if (spentTime.asMinutes() > 15) {
    let hours = Math.round(spentTime.asHours());
    const remainingMinutes = Math.max(0, spentTime.asMinutes() - hours * 60);

    if (remainingMinutes > 10) {
      hours += 1;
    }

    if (hours > 1) return 100 + (hours - 1) * 50;
    return 100;
  }

  return 0;
};
