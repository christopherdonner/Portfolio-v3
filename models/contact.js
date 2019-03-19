module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define("Contact", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    text: DataTypes.TEXT,
  });
  return Contact;
};
