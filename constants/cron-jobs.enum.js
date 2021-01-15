const { FULL_CURRENT_DAY } = require('./date.enum');

module.exports = {
    EVERY_DAY_AT_00_00: '0 0 * * *',
    EVERY_DAY_AT_4_AM: '0 4 * * *',

    // crone-jobs msg
    LOGGED_IN_USERS_MSG: `logged in users per ${FULL_CURRENT_DAY}`,
    REFRESH_TOKEN_CONTROL_MSG: 'token pairs was deleted',
    REGISTERED_USERS_MSG: `registered users per ${FULL_CURRENT_DAY}`
};
