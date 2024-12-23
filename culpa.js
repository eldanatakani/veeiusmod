import { format, utcToZonedTime } from 'date-fns-tz';

const convertTimeZone = (date, fromTimeZone, toTimeZone) => {
  const zonedDate = utcToZonedTime(date, fromTimeZone);
  const formattedDate = format(zonedDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: toTimeZone });
  return formattedDate;
};

const date = new Date(); // Current date and time

const mcmurdoTimeZone = 'Antarctica/McMurdo';
const aucklandTimeZone = 'Pacific/Auckland';

const convertedDate = convertTimeZone(date, mcmurdoTimeZone, aucklandTimeZone);

console.log('Original Date:', date);
console.log('Converted Date:', convertedDate);
