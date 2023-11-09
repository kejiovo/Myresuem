async function pushMessage(event) {
	event.preventDefault();

	var name = document.getElementById('name').value;
	var vx = document.getElementById('vx').value;
	var message = document.getElementById('message').value;
	let m = 	`姓名:${name}\n微信:${vx}\n消息:${message}`
	// 发送post
	var url = "https://api.day.app"
	var body = {
		"title": "网页消息",
		"body":m,
		"device_key":"gQ7d2q2VJFe6kA9R7ZWK48"
	}
	fetch(url, { //请求的服务器地址
		body: JSON.stringify(body), //请求的数据
		// body:{name:"mumu",age:20}, //第二种请求数据的方法json
		method: "POST", //请求方法
		headers: { //请求头信息
			// 'Content-Type':'application/x-www-form-urlencoded' //用url编码形式处理数据
			'Content-Type': 'application/json' //第二种请求头编写方式json
		}
	}).then(res=>res.text()) //请求得到的数据转换为text
       .then(res=>{
           alert("发送成功啦，等我联系你哦")   //打印输出
       })
       .catch(err=>{    //错误打印
           alert("发送失败了，网页又出bug啦")
       })
}
