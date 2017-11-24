import {error} from 'module-logger';
import {IllegalArgumentError} from '../utils/errors';

export default function(err, req, res, next) {
  error(err);

  const formatedError =
    err instanceof Error
      ? {
        type: err.name,
        message: err.message,
        detail: err.detail,
      }
      : err;

  if (err instanceof IllegalArgumentError) {
    res.status(400).send(formatedError);
  } else {
    res.status(500).send(formatedError);
  }

  next();
}
