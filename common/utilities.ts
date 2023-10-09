import moment from 'moment';

const hasOwn = {}.hasOwnProperty;
const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
const localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
const nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;

export const noop = () => {};

export const pluralize = (text, count) => {
  return count > 1 || count === 0 ? `${text}s` : text;
};

export function toDateISOString(data) {
  const date = new Date(data);

  if (isNaN(date.getTime())) {
    console.error('Invalid Date:', data);
    return;
  }

  const options: any = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function formatUTCDateString(data: string | number | Date): string {
  // Initialize a moment.js library object
  const date = moment.utc(data);

  // Check if the date is valid
  if (!date.isValid()) {
    console.error('Invalid Date:', data);
    return '';
  }

  // Format the date
  const formattedDate = date.format('ddd, MMM D');
  return formattedDate;
}

export function formatUTCTime(data: string | number | Date): string {
  // Initialize a moment.js library object
  const time = moment.utc(data);

  // Check if the time is valid
  if (!time.isValid()) {
    console.error('Invalid Date:', data);
    return '';
  }

  // Format the time
  const formattedTime = time.format('h:mm a');
  return formattedTime;
}

export function toDateISOStrinWithTimezone(data, timezone) {
  const timeZone = timezone;
  const date = new Date(data);

  const options: any = {
    timeZone,
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export const elide = (string, length = 140, emptyState = '...') => {
  if (isEmpty(string)) {
    return emptyState;
  }

  if (string.length < length) {
    return string.trim();
  }

  return `${string.substring(0, length)}...`;
};

export function bytesToSize(bytes: number, decimals: number = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${(bytes / Math.pow(k, i)).toFixed(dm)} ${sizes[i]}`;
}

export function isEmpty(text: any) {
  // NOTE(jim): If a number gets passed in, it isn't considered empty for zero.
  if (text === 0) {
    return false;
  }

  if (!text) {
    return true;
  }

  if (typeof text === 'object') {
    return true;
  }

  if (text.length === 0) {
    return true;
  }

  text = text.toString();

  return Boolean(!text.trim());
}

export function createSlug(text: any) {
  if (isEmpty(text)) {
    return 'untitled';
  }

  const a = 'æøåàáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
  const b = 'aoaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special chars
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function isUrl(string: any) {
  if (typeof string !== 'string') {
    return false;
  }

  var match = string.match(protocolAndDomainRE);
  if (!match) {
    return false;
  }

  var everythingAfterProtocol = match[1];
  if (!everythingAfterProtocol) {
    return false;
  }

  if (localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol)) {
    return true;
  }

  return false;
}

export function debounce<Args extends unknown[]>(fn: (...args: Args) => void, delay: number) {
  let timeoutID: number | undefined;
  let lastArgs: Args | undefined;

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = undefined;
    }
  };

  const debounced = (...args: Args) => {
    clearTimeout(timeoutID);
    lastArgs = args;
    timeoutID = window.setTimeout(run, delay);
  };

  debounced.flush = () => {
    clearTimeout(timeoutID);
  };

  return debounced;
}

export function classNames(...args: any[]): string {
  let classes: string[] = [];

  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];
    if (!arg) continue;

    let argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        let inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === 'object') {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
      } else {
        for (let key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(' ');
}

export const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

export async function makeRequest({ endpoint, host }) {
  try {
    const res = await fetch(`https://${host}/api/${endpoint}`);
    const json = await res.json();

    return { ...json };
  } catch (e) {
    return console.log(e);
  }
}

export function cleanString(input = '') {
  return input
    .replace(/[\s,()"':`?!;.]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}
