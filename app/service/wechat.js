const request = require('request-promise-native')
module.exports=app=>{
	return class wehchatservice extends app.Service{
		async sendtemplate(openid, templateid, data){
			const { ctx } = this;
			const api = await ctx.service.wechatapi.index();
			const topcolor = "#FF0000";
			const url = "";
			await api.sendTemplate(openid, templateid, url, topcolor, data);
		}
		async login(code){
			const { ctx } = this;
			const config = await ctx.service.config.findbyid();
			const appid = config.get('appid');
			const appsecret = config.get('appsecret');
			const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appsecret}&js_code=${code}&grant_type=authorization_code`
			const data = await request({url, method: 'POST', json:true})
			return data
		}
	}
}