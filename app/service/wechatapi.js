const API = require('co-wechat-api')
module.exports=app=>{
	return class wechatapiservice extends app.Service{
		async index(){
			const { ctx } = this;
			const config = ctx.servcie.config.findbyid();
			const appid = config.get('appid');
			const appsecret = config.get('appsecret');
			const api = new API(appid, appsecret, async()=>{
				const token = await app.redis.get('accesstoken');
				if(!token){
					return null;
				}else{
					return JSON.parse(token);
				}
			},async(token)=>{
				const accesstoken = await app.redis.set("accesstoken", token);
				return accesstoken;
			}) 
			api.setOpts({timeout: 15000});
			return api	
		}
	}
}