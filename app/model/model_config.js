module.exports=app=>{
	const Datatypes = app.Sequelize
	const Model = app.model.define('model_config', {
		id: {
			type: Datatypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		appid: Datatypes.STRING(256),
		appsecret: Datatypes.STRING(256),
		token: Datatypes.STRING(32),
		encodingaeskey: Datatypes.STRING(256)
	},{
		tableName: 'config'
	})
	return Model
}