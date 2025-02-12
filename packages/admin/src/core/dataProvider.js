import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  fetchUtils,
} from 'react-admin';
import _ from 'lodash';
import { stringify } from 'query-string';

const API_URL = '/api';

/**
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
  switch (type) {
    case GET_LIST: {
      const { page, perPage } = params.pagination;
      const query = {
        sort: params.sort.field,
        order: params.sort.order,
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify(params.filter),
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_ONE: {
      return { url: `${API_URL}/${resource}/${params.id}` };
    }
    case GET_MANY: {
      const query = {
        filter: JSON.stringify({ id: params.ids }),
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_MANY_REFERENCE: {
      const { page, perPage } = params.pagination;
      const query = {
        sort: JSON.stringify(params.sort.field),
        order: JSON.stringify(params.sort.order),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case UPDATE:
      return {
        url: `${API_URL}/${resource}/${params.id}`,
        options: { method: 'PUT', body: JSON.stringify(params.data) },
      };
    case CREATE:
      return {
        url: `${API_URL}/${resource}`,
        options: { method: 'POST', body: JSON.stringify(params.data) },
      };
    case DELETE:
      return {
        url: `${API_URL}/${resource}/${params.id}`,
        options: { method: 'DELETE' },
      };
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
  const { json } = response;
  console.log(json);
  switch (type) {
    case GET_LIST:
      return {
        data: json[resource].map(value => _.set(value, 'id', value.publicId)),
        total: json[resource].length,
      };
    case GET_MANY:
      return {
        data: json[resource].map(value => _.set(value, 'id', value.publicId)),
      };
    case CREATE:
      return { data: { ...params.data, id: 1 } };
    default:
      return { data: { ...json, id: json ? json.publicId : 1 } };
  }
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {
  const accessToken = localStorage.getItem('token');
  const { fetchJson } = fetchUtils;
  const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
  if (accessToken && options) {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Authorization', `Bearer ${accessToken}`);
  }
  return fetchJson(url, options).then(response =>
    convertHTTPResponseToDataProvider(response, type, resource, params),
  );
};
