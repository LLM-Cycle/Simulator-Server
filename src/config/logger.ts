import winston , { createLogger, format, transports } from 'winston';
import expressWinston from 'express-winston'; 
import LokiTransport from 'winston-loki';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'src/logs/error.log', level: 'error' }),
    new transports.File({ filename: 'src/logs/combined.log' }),
    new LokiTransport({
      host: 'http://localhost:3100',  // Replace with your Loki server URL
      labels: { job: 'node-app' },
      json: true
    })
  ]
});


export default logger; 