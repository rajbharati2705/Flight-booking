const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const { red, blue, yellow, green, magenta } =require('colorette');

const colorizeLevel = (level) => {
    switch (level) {
        case 'ERROR':
            return red(level);
        case 'INFO':
            return blue(level);
        case 'WARN':
            return yellow(level);
        default:
            return level;
    }
};

const customFormat= printf( ({ level, message, timestamp })=>{

    const customLevel = colorizeLevel(level.toUpperCase());
    const customTimeStamp = green(timestamp);
    const custommessage = magenta(message);

    
    return `-> ${customTimeStamp} : ${customLevel} : ${custommessage}`;
});

const logger = createLogger({
    format: combine(
      timestamp({format:'YYYY-MM-DD HH:MM:SS'}),
      customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename:'combines.log'})
    ]
  });

  module.exports = logger;