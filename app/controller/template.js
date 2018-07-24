module.exports=app=>{
	return class templatecontroller extends app.Controller{
		async sendtemplate(){
			const {ctx} = this;
			const createRule = {
				"form_id": "string",
				"token": "string"
			};
			ctx.validate(createRule);
			const body = ctx.request.body;
			const { form_id, token } = body;
			const openid = await ctx.service.jwt.verify(token);
			const templateid = 'BO32UsIzhWqKZvUsJupuw74AynHTBJ64qNjgnE__bSE'
			const data = { 
				"keyword1" : {
					"value" : "萝岗"
				},
				"keyword2" : {
					"value" : "斯伯丁"
				},
				"keyword3" : {
					"value" : "1"
				},
				"keyword4" : {
					"value" : "300"
				},
				"keyword5" : {
					"value" : "20"
				},
				"keyword6" : {
					"value" : "准时发货"
				}
			};
			await ctx.service.wechat.sendtemplate(openid, templateid, data)
		}
	}
}