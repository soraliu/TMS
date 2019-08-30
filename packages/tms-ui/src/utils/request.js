import { fetch } from 'dva';
import { prefix } from '@/config/router';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const response = await fetch(`${prefix}${url}`, options);

  if (response.status >= 300) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  const { data, error } = await response.json();

  if (error) throw error && error.message || error || 'Unknown Error!';

  return data;
}
