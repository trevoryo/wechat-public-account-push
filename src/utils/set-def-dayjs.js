import dayjs from 'dayjs'
import tz from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(tz)
dayjs.extend(utc)

export const selfDayjs = (time) => {
  if (dayjs.tz.guess() === 'UTC' && time) {
    return dayjs(time).subtract('5', 'hour')
  }
  return dayjs(time).tz('Georgia/Marietta')
}

/* istanbul ignore next */
export const timeZone = () => dayjs.tz.guess()
