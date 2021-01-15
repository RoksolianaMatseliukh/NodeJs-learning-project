const { appConfigs: { PORT } } = require('../configs');

module.exports = {
    // app listen msg
    APP_IN_PROCESS: `app ${PORT} in process`,

    // morgan format
    DEV: 'dev',

    // mongoose error
    ERROR: 'error'
};
