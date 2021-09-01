const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var fs = require("fs");
const app = express();

const port = 3000;

//define db through mongojs

//https://api.kite.trade/instruments
//https://kite.zerodha.com/connect/login?v=3&api_key=909lcbtyglf6ks4o

//step1
//Pay money, Extend the date for the firstApp, Copy the api-key
//step2
//https://kite.zerodha.com/connect/login?v=3&api_key=909lcbtyglf6ks4o
//copy the request token.
//step3
//save the request token remove the access token and refresh the access token
//step4
//Copy the new access token and run the execution using node server.js command

app.get('/foo', (req, res) => {




	instruments = [ "NSE:INFY", "BSE:INFY"];
	kc.getLTP(instruments).then(function (response) {



		var myDoc = {
			Instruments: {
				NSEINFY: response["NSE:INFY"].last_price,
				BSEINFY: response["BSE:INFY"].last_price
			}
		};
		res.json(myDoc);
		console.log('here', myDoc);
	}).catch(function (err) {
		console.log(err);
	})


	/*	exchange= ["NFO"];
			kc.getInstruments(exchange).then(function(response) {
				res.json(response);
			}).catch(function(err) {
				console.log(err);
			})*/


});

app.listen(port, () => {
	console.log('Server start on port' + port);
});
app.use(express.static(path.join(__dirname, './dist/zerodha')));





var KiteConnect = require("kiteconnect").KiteConnect;

var api_key = "909lcbtyglf6ks4o",
	secret = "xcmxsyn41ro183qmj4r9uzzx76xlcdf4",
	request_token = "YTvTPNw7iglRD22CO7P03y18VOFmlchB",
	access_token = "Uv4ZepVKpp1JlY0OUj3eVnRQ1UND8N3k";
	

var options = {
	"api_key": api_key,
	"debug": false
};




kc = new KiteConnect(options);
kc.setSessionExpiryHook(sessionHook);

if (!access_token) {
	kc.generateSession(request_token, secret)
		.then(function (response) {
			console.log("Response", response);
			init();
		})
		.catch(function (err) {
			console.log(err);
		})
} else {
	kc.setAccessToken(access_token);
	init();
}
var myVar = setInterval(myFunction, 2000);

function myFunction() {
	instruments = ["NSE:NIFTY 50"];
kc.getLTP(instruments).then(
	function (response) {
	var myDoc = {
		Instruments: {
			NIFTY: response["NSE:NIFTY 50"].last_price,
		}
	};
	//res.json(myDoc);
	var x = response["NSE:NIFTY 50"].last_price;
	var y = 50;
	var z = x % y;
	console.log(myDoc, x - z);
	}).catch(function (err) {
	console.log(err);
})
}







	function init() {
		//console.log(kc.getLoginURL())


		//getProfile();
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
			.then(function (response) {
				app.get('/getProfile1', (req, res) => {
					res.send(response);
				});
				console.log(response)


			}).catch(function (err) {
				console.log(err);
			});
	}
	function getInstruments(exchange) {
		kc.getInstruments(exchange).then(function (response) {
			console.log(response);
		}).catch(function (err) {
			console.log(err);
		})
	}