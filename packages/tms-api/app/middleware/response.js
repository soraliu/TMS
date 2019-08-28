const { isObject, isArray } = require('lodash');

module.exports = () => async (ctx, next) => {
  await next();

  if (ctx.status === 200) {
    if (isArray(ctx.body)) {
      // success
      const [data] = ctx.body;
      ctx.body = { data: data || null };
    } else if (isObject(ctx.body)) {
      // error response
      ctx.logger.warn('Response Error Object: ');
      ctx.logger.warn(ctx.body.toString());

      let { code, message, placeholder } = ctx.body;
      try {
        message = message || ctx.__(code, placeholder) || ctx.body.toString();
      } catch (e) {
        message = 'Unknown Error';
      }
      ctx.body = { error: { code: code || -1, message } };
    } else {
      // error response
      ctx.logger.warn('Response Error: ');
      ctx.logger.warn(ctx.body);

      ctx.body = { error: ctx.body };
    }
  }
};
