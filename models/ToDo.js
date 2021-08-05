require('dotenv').config();

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {dialect: 'postgres'}
);

class ToDo extends Model {}

ToDo.init({
  // Model attributes are defined here
  task: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
      validate: {
        notNull: {
          msg: 'Please enter a to do!'
        }
    }
  },
  deadline: {
    type: DataTypes.STRING(60)
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'todo', // We need to choose the model name
  timestamps: true,
  createdAt: 'createdat',
  updatedAt: 'updatedat'

});

module.exports = ToDo;