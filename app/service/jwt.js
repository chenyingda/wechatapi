module.exports=app=>{
	return class jwtservice extends app.Service{
		async sign(openid){
			const token = await app.jwt.sign({openid: openid},'cyd');
			return token
		}
		async verify(token){
			const openid = await app.jwt.verify(token, 'cyd');
			return openid
		}
	}
}