const { dataBaseEnum: { CAR_ASSOCIATION }, modelNamesEnum: { CAR }, tableNamesEnum: { CARS } } = require('../../constants');

module.exports = (client, DataTypes) => {
    const Car = client.define(
        CAR,
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            model: {
                type: DataTypes.STRING,
                allowNull: false
            },

            price: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },

            year: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: CARS,
            timestamps: false
        }
    );

    const Car_File = require('./Car_File')(client, DataTypes);

    Car.hasMany(Car_File, CAR_ASSOCIATION);

    return Car;
};
