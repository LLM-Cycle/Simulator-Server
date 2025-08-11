import logger from '../config/logger'; 
import { Request, Response, NextFunction } from 'express';

//middleware to log the client ip in the server

function requestLogger(req: Request, res: Response, next: NextFunction) {
  const clientIp =
    req.headers['x-forwarded-for']?.toString().split(',')[0] || 
    req.socket.remoteAddress;

  logger.info(`Incoming ${req.method} request to ${req.url} from ${clientIp}`);
  next();
}

export default requestLogger;
