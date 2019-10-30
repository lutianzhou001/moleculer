const Fcoin = require("fcoin-api");

let fcoin = new Fcoin({
	key: "fb7dcf9d53b74ec9b4b3cbc8de245206",
	secret: "43f3d15c2b404a1ea69c5495ced0d231",
	proxy: "" // 为空则不开启
});

//现货接口

async function getDepthBid(symbol) {
	let depthBid = await fcoin.getDepth("L20", symbol).then(data => { return data.data.bids; });
	return depthBid;
}

async function getDepthAsk(symbol) {
	let depthAsk = await fcoin.getDepth("L20", symbol).then(data => { return data.data.asks; });
	return depthAsk;
}

async function placeOrderBuy(symbol, depth, amount, account_type) {
	return fcoin.createOrder(symbol, "buy", "limit", depth, amount, "main", account_type).then(
		data => {
			return data.data;
		});
}

async function placeOrderSell(symbol, depth, amount, account_type) {
	return fcoin.createOrder(symbol, "sell", "limit", depth, amount, "main", account_type).then(
		data => {
			return data.data;
		});
}

async function getAmount(symbol) {
	let balance =  await fcoin.getBalance().then(data => {return data.data;});
	for (let i=0; i<balance.length; i++){
		if (balance[i].currency == symbol.slice(0, symbol.indexOf("usdt")+1));
		console.log(balance[i].available);
	}
}

async function getLeverageAmount(symbol){
	return await fcoin.getLeverageBalance(symbol).then(data => {console.log(data);});
}


let x = getAmount("btcusdt");

//期货接口


module.exports = {
	getDepthBid,
	getDepthAsk,
	placeOrderBuy,
	placeOrderSell,
	getAmount,
	getLeverageAmount
}; 

