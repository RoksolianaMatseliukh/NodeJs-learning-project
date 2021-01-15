module.exports = {
    DATABASE_NAME: 'auto_shop',
    LOCALHOST: 'localhost',
    MYSQL: 'mysql',

    // reference key
    ID: 'id',

    // foreignKey
    USER_ID: 'user_id',

    // association between tables
    CAR_ASSOCIATION: {
        foreignKey: 'car_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },

    USER_ASSOCIATION: {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },

    // mongoose connection
    MONGOOSE_LOCALHOST: 'mongodb://localhost:27017/'
};
