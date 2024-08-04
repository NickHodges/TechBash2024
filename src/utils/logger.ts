// Logger.ts

export interface Logger {
  logRequest(method: string, url: string, timestamp: string): void;
}
