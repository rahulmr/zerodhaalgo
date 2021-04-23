const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

//define db through mongojs


app.get('/', (req, res) => {
    res.send('Please use /api/client');
});

app.listen(port, () => {
    console.log('Server start on port' +port);
});
app.use (express.static(path.join(__dirname,'./dist/zerodha')));

var KiteConnect = require("kiteconnect").KiteConnect;

var api_key = "909lcbtyglf6ks4o",
	secret = "xcmxsyn41ro183qmj4r9uzzx76xlcdf4",
	request_token = "4V1oM3113M4nob3ixQuQMoU16FDiOjC0",
	access_token = "pVa9WSjhU2EQy56kEy37TB9tQa9MYhIP";

var options = {
	"api_key": api_key,
	"debug": false
};




kc = new KiteConnect(options);
kc.setSessionExpiryHook(sessionHook);

if(!access_token) {
	kc.generateSession(request_token, secret)
		.then(function(response) {
			console.log("Response", response);
			init();
		})
		.catch(function(err) {
			console.log(err);
		})
} else {
	kc.setAccessToken(access_token);
	init();
}

var KiteTicker = require("kiteconnect").KiteTicker;
var ticker = new KiteTicker({
	api_key: "909lcbtyglf6ks4o",
	access_token: "pVa9WSjhU2EQy56kEy37TB9tQa9MYhIP"
});

// set autoreconnect with 10 maximum reconnections and 5 second interval
ticker.autoReconnect(true, 10, 5)
ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe);

ticker.on("noreconnect", function() {
	console.log("noreconnect");
});

ticker.on("reconnecting", function(reconnect_interval, reconnections) {
	console.log("Reconnecting: attempt - ", reconnections, " innterval - ", reconnect_interval);
});

function onTicks(ticks) {
	console.log("Ticks", ticks);

}

function subscribe() {
	var items = [738561];
	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
}

function init() {
	console.log(kc.getLoginURL())


	getProfile();
	//getMargins();
	//getMargins("equity");
	//getPositions();
	//getHoldings();
	//getOrders();
	//getOrderHistory();
	//getTrades();
	//getOrderTrades();
	//getInstruments();
	//getInstruments("NFO");
	//getQuote(["NSE:RELIANCE"]);
	//getOHLC(["NSE:RELIANCE"]);
	//getLTP(["NSE:RELIANCE"]);
	//getHistoricalData(779521, "day", new Date("2018-01-01 18:05:00"), new Date("2018-01-10 18:05:37"));
	//getHistoricalData(779521, "day", "2018-01-01 18:05:00", "2018-01-10 18:05:37");
	//getMFInstruments();
	//getMFOrders();
	//getMFSIPS();
	//regularOrderPlace("regular");
	//bracketOrderPlace();
	//modifyOrder("regular");
	//cancelOrder("regular");
	//getGTT();
	//getGTT("some_trigger_id");
	//placeGTT();
	//modifyGTT();
	//deleteGTT("some_trigger_id");

	//invalidateAccessToken()
}

function sessionHook() {
	console.log("User loggedout");
}

function getProfile() {
	kc.getProfile()
		.then(function(response) {
			console.log(response)

           
		}).catch(function(err) {
			console.log(err);
		});
}
