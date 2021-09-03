const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccount.json');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var fs = require("fs");
const app = express();

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db=admin.firestore();

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

/*app.get('/foo', (req, res) => {




	instruments = ["NSE:NIFTY 50"];
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




});

app.listen(port, () => {
	console.log('Server start on port' + port);
});
app.use(express.static(path.join(__dirname, './dist/zerodha')));*/





var KiteConnect = require("kiteconnect").KiteConnect;

var api_key = "909lcbtyglf6ks4o",
	secret = "xcmxsyn41ro183qmj4r9uzzx76xlcdf4",
	request_token = "HlWNNeuF5l8q0c33Ja72VWjUd4XoIWYa",
	access_token = "RDDmT5NkQpqN1ofCZlv0bIPNrupBkrq1";
	

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
			//Called first if there is no access token - ''
		})
		.catch(function (err) {
			console.log(err);
		})
} else {
	//comes here if the access token is copied and saved 
	kc.setAccessToken(access_token);
	//init();
}
var myprogramInterval = 15000;
/*setInterval(function(){ // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    if(date.getHours() === 9 && date.getMinutes() === 15){ // Check the time
        // Do stuff
		myprogramInterval = 10000;
    }
}, 60000); // Repeat every 60000 milliseconds (1 minute)*/

var myVar = setInterval(myFunction, myprogramInterval);
// /The format is BANKNIFTY<YY><M><DD>strike<PE/CE>
//The month format is 1 for JAN, 2 for FEB, 3, 4, 5, 6, 7, 8, 9, O(capital o) for October, N for November, D for December.

function myFunction() {
	instruments = ["NSE:NIFTY 50", "NFO:NIFTY2190917250CE", "NFO:NIFTY2190917250PE", "NFO:NIFTY2190917300CE", "NFO:NIFTY2190917300PE", "NFO:BANKNIFTY2190936800CE", "NFO:BANKNIFTY2190936800PE", "NFO:BANKNIFTY2190936900CE", "NFO:BANKNIFTY2190936900PE"];
kc.getLTP(instruments).then(
	function (response) {
		var d = new Date();
		var n = d.getMinutes();
	var myDoc = {
		Instruments: {
			NIFTY: response["NSE:NIFTY 50"].last_price,
			NCE1: response["NFO:NIFTY2190917250CE"].last_price,
			NPE1: response["NFO:NIFTY2190917250PE"].last_price,
			NCE2: response["NFO:NIFTY2190917300CE"].last_price,
			NPE2: response["NFO:NIFTY2190917300PE"].last_price,
			BCE1: response["NFO:BANKNIFTY2190936800CE"].last_price,
			BPE1: response["NFO:BANKNIFTY2190936800PE"].last_price,
			BCE2: response["NFO:BANKNIFTY2190936900CE"].last_price,
			BPE2: response["NFO:BANKNIFTY2190936900PE"].last_price
		}
	};
	//res.json(myDoc);
	var x = response["NSE:NIFTY 50"].last_price;
	var NCE1= response["NFO:NIFTY2190917250CE"].last_price;
	var NPE1= response["NFO:NIFTY2190917250PE"].last_price;
	var NCE2= response["NFO:NIFTY2190917300CE"].last_price;
	var NPE2= response["NFO:NIFTY2190917300PE"].last_price;
	var BCE1= response["NFO:BANKNIFTY2190936800CE"].last_price;
	var BPE1= response["NFO:BANKNIFTY2190936800PE"].last_price;
	var BCE2= response["NFO:BANKNIFTY2190936900CE"].last_price;
	var BPE2= response["NFO:BANKNIFTY2190936900PE"].last_price;

	var y = 50;
	var z = x % y;
	console.log((d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString()) , (((NCE1 * 77) + (NPE1 * 74) + (NCE2 * 100) + (NPE2 * 60))/348).toFixed(2).toString(),
	(((BCE1 * 69) + (BPE1 * 100) + (BCE2 * 79) + (BPE2 * 86))/1176).toFixed(2).toString(), ((((NCE1 * 77) + (NPE1 * 74) + (NCE2 * 100) + (NPE2 * 60))/348) - (((BCE1 * 69) + (BPE1 * 100) + (BCE2 * 79) + (BPE2 * 86))/1176)).toFixed(2)  );
	const quoteData = {
		quote: x,
		date:  d.getHours() +  ':' + d.getMinutes() + '**'
	};
	
	var sometime= (d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString()) + ',' + (((NCE1 * 77) + (NPE1 * 74) + (NCE2 * 100) + (NPE2 * 60))/348).toFixed(2).toString() + ',' + (((BCE1 * 69) + (BPE1 * 100) + (BCE2 * 79) + (BPE2 * 86))/1176).toFixed(2).toString() ;
	//db.collection('sampleData').doc ('inspiration').set(quoteData);

	db.collection('sampleData').doc ('03092021').update({
		Values: admin.firestore.FieldValue.arrayUnion( `${sometime}`)
	  }, {merge:true});
	}).catch(function (err) {
	console.log(err);
})
}







	function init() {
		db.collection('sampleData').doc ('03092021').set({
			Values: admin.firestore.FieldValue.arrayUnion("Time, Nifty, BankNifty")
		  }, { merge: true }).then(some=>{
			  console.log("success");
		  });

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