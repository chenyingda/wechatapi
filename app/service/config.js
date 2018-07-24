module.exports=app=>{
	return class configservice extends app.Service{
		async findbyid(){
			const { ctx } = this;
			const config = await ctx.model.ModelConfig.findOne({where: {id: 1}});
			return config
		}
	}
}