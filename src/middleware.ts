
import { defineMiddleware } from 'astro:middleware';
import { ConsoleLogger } from './utils/consoleLogger';
// Instantiate the logger
const logger = new ConsoleLogger();

// Define the middleware function
export const onRequest = defineMiddleware((context, next) =>  {
  const method = context.request.method;
  const url = context.request.url;
  const timestamp = new Date().toISOString();

  // Use the logger to log the request details
  logger.logRequest(method, url, timestamp);

  // Proceed with the next middleware or route handler
  return next();
});