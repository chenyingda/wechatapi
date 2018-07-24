module.exports=app=>{
	return class logincontroller extends app.Controller{
		async login(){
			const { ctx } = this;
			const createRule = {
				"code": "string"
			}
			ctx.validate(createRule);
			const body = ctx.request.body;
			const { code } = body;
			console.log('this is code', code);
			const result = await ctx.service.wechat.login(code);
			console.log('this is result',result);
			const openid = result.openid;
			console.log('this is openid', openid);
			const token = await ctx.service.jwt.sign(openid);
			ctx.body={
				code: 200,
				data: token
			}	
		}	
	}
}