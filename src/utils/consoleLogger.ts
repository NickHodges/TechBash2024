
import type { Logger } from "./logger";

export class ConsoleLogger implements Logger {
  logRequest(method: string, url: string, timestamp: string): void {
    console.log(`[${timestamp}] ${method} request to ${url}`);
  }
}