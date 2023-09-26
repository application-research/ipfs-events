import moment from 'moment';

export const generateHourlyTimeRanges = (times: string[]): string[] => {
  // Extract unique hours from the provided times
  const hours: number[] = [...new Set(times.map((time) => moment(time, 'hh:mm a').hour()))].sort((a, b) => a - b);

  // Generate hourly ranges
  const ranges: string[] = [];
  for (let i = 0; i < hours.length - 1; i++) {
    const start = moment.utc({ hour: hours[i] }).format('hh:mm a');
    const end = moment.utc({ hour: hours[i + 1] }).format('hh:mm a');
    ranges.push(`${start} - ${end}`);
  }
  return ranges;
};

export const extractAllTimesFromTalks = (formattedAirtableData: any): string[] => {
  return generateHourlyTimeRanges(
    Object.values(formattedAirtableData)
      .flatMap((eventArray: any) => eventArray)
      .flatMap((event: any) => event.records.map((record: any) => record.startTime))
  );
};

export const extractAllTracksFromTrackDetails = (formattedAirtableData: any): string[] => {
  return Object.values(formattedAirtableData)
    .flatMap((eventArray: any) => eventArray)
    .flatMap((event: any) => event.trackDetails?.tracks || [])
    .filter(Boolean);
};

export const getTalkWithinSelectedHour = (eventTime: string, selectedTime: string): boolean => {
  const eventMoment = moment(eventTime, 'hh:mm a');
  const selectedMomentStart = moment(selectedTime, 'HH:mm a');
  const selectedMomentEnd = selectedMomentStart.clone().add(1, 'hour');

  return eventMoment.isSameOrAfter(selectedMomentStart) && eventMoment.isBefore(selectedMomentEnd);
};
