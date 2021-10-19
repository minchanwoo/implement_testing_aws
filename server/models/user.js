module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		name: {
			type: DataTypes.STRING(20),
		},
		nick: {
			type: DataTypes.STRING(20),
		},
		email: {
			type: DataTypes.STRING(50),
		},
		password: {
			type: DataTypes.STRING(100),
		},
	}, {
		paranoid: true,
	})
};