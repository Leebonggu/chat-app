const { createLogger, format, transports } = require('winston');

const logFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.printf((log) => format.colorize().colorize(log.level, `${log.timestamp} ${log.level} ${log.message}`)),
);

const logger = createLogger({
  format: logFormat,
  transports: [new transports.Console()],
});

module.exports = logger;