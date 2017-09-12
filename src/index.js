import humps from 'humps';


/**
 * create a middleware to change json format from snake case to camelcase in request
 * then change back to snake case in response
 *
 * @param {Object} options - humps options
 */
export default function createMiddleware(options) {
  return function (req, res, next) {
    /**
     * camelize req.body
     */
    if (req.body && typeof req.body === 'object') {
      req.body = humps.camelizeKeys(req.body, options);
    }

    /**
     * camelize req.query
     */
    if (req.query && typeof req.query === 'object') {
      req.query = humps.camelizeKeys(req.query, options);
    }

    /**
     * wrap res.json()
     */
    const sendJson = res.json;
    res.json = data => {
      return sendJson.call(res, humps.decamelizeKeys(data, options));
    }

    return next();
  }
}