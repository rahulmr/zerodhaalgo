const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var fs = require("fs");
const app = express();

const port = 3000;

//define db through mongojs

//https://api.kite.trade/instruments
//https://kite.zerodha.com/connect/login?v=3&api_key=909lcbtyglf6ks4o

app.get('/foo', (req, res) => {




	instruments = ["NFO:NIFTY2150615000CE", "NSE:INFY", "BSE:INFY"];
	kc.getLTP(instruments).then(function (response) {



		var myDoc = {
			Instruments: {
				NSEINFY: response["NSE:INFY"].last_price,
				BSEINFY: response["BSE:INFY"].last_price,
				NFO: response["NFO:NIFTY2150615000CE"].last_price

			}
		};
		res.json(myDoc);
		console.log(myDoc);
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
	request_token = "dZsCZh47pB8LPR461YRCM27yazFLXm7U",
	access_token = "V28aZxsu3JZck9C8iH5reRFkQHa3Vmv2";
	

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
kc.getLTP(instruments).then(function (response) {
	var myDoc = {
		Instruments: {
			NIFTY: response["NSE:NIFTY 50"].last_price,
		}
	};
	//res.json(myDoc);
	var x = response["NSE:NIFTY 50"].last_price;
	var y = 50;
	var z = x % y;
	//console.log(myDoc, x - z);

//NFO:NIFTY21APR
//NFO:NIFTY21506
var text1uni = "NFO:NIFTY21520";
	var text1 = text1uni;
	var text2 = new String(x - z + 50);
	var text3 = "CE";
	var text4 = text1.concat(text2, text3);
	//console.log(text4);

	var text9 = text1uni;
	var text10 = new String(x - z );
	var text11 = "PE";
	var text12 = text9.concat(text10, text11);
	//console.log(text12);

	
	var text5 = text1uni;
	var text6 = new String(x - z + 50 );
	var text7 = "PE";
	var text8 = text5.concat(text6, text7);
	//console.log(text8);

	var text13 = text1uni;
	var text14 = new String(x - z + 100 );
	var text15 = "CE";
	var text16 = text13.concat(text14, text15);
	//console.log(text16);

	//=================
	var textA1 = text1uni;
	var textA2 = new String(x - z );
	var textA3 = "CE";
	var textA4 = textA1.concat(textA2, textA3);
	//console.log(text4);

	var textA9 = text1uni;
	var textA10 = new String(x - z - 50);
	var textA11 = "PE";
	var textA12 = textA9.concat(textA10, textA11);
	//console.log(text12);

	
	var textA5 = text1uni;
	var textA6 = new String(x - z  );
	var textA7 = "PE";
	var textA8 = textA5.concat(textA6, textA7);
	//console.log(text8);

	var textA13 = text1uni;
	var textA14 = new String(x - z + 50 );
	var textA15 = "CE";
	var textA16 = textA13.concat(textA14, textA15);
	//console.log(text16);
	//====================

	var textB1 = text1uni;
	var textB2 = new String(x - z + 100);
	var textB3 = "CE";
	var textB4 = textB1.concat(textB2, textB3);
	//console.log(text4);

	var textB9 = text1uni;
	var textB10 = new String(x - z + 50 );
	var textB11 = "PE";
	var textB12 = textB9.concat(textB10, textB11);
	//console.log(text12);

	
	var textB5 = text1uni;
	var textB6 = new String(x - z + 100 );
	var textB7 = "PE";
	var textB8 = textB5.concat(textB6, textB7);
	//console.log(text8);

	var textB13 = text1uni;
	var textB14 = new String(x - z + 150 );
	var textB15 = "CE";
	var textB16 = textB13.concat(textB14, textB15);
	//console.log(text16);

		//====================

		var textC1 = text1uni;
		var textC2 = new String(x - z - 50);
		var textC3 = "CE";
		var textC4 = textC1.concat(textC2, textC3);
		//console.log(text4);
	
		var textC9 = text1uni;
		var textC10 = new String(x - z - 100 );
		var textC11 = "PE";
		var textC12 = textC9.concat(textC10, textC11);
		//console.log(text12);
	
		
		var textC5 = text1uni;
		var textC6 = new String(x - z - 50 );
		var textC7 = "PE";
		var textC8 = textC5.concat(textC6, textC7);
		//console.log(text8);
	
		var textC13 = text1uni;
		var textC14 = new String(x - z );
		var textC15 = "CE";
		var textC16 = textC13.concat(textC14, textC15);
		//console.log(text16);

			//====================

	var textD1 = text1uni;
	var textD2 = new String(x - z + 150);
	var textD3 = "CE";
	var textD4 = textD1.concat(textD2, textD3);
	//console.log(text4);

	var textD9 = text1uni;
	var textD10 = new String(x - z + 100 );
	var textD11 = "PE";
	var textD12 = textD9.concat(textD10, textD11);
	//console.log(text12);

	
	var textD5 = text1uni;
	var textD6 = new String(x - z + 150 );
	var textD7 = "PE";
	var textD8 = textD5.concat(textD6, textD7);
	//console.log(text8);

	var textD13 = text1uni;
	var textD14 = new String(x - z + 200 );
	var textD15 = "CE";
	var textD16 = textD13.concat(textD14, textD15);
	//console.log(text16);

	var textE1 = text1uni;
	var textE2 = new String(x - z - 100 );
	var textE3 = "CE";
	var textE4 = textE1.concat(textE2, textE3);
	//console.log(text4);

	var textE9 = text1uni;
	var textE10 = new String(x - z - 150 );
	var textE11 = "PE";
	var textE12 = textE9.concat(textE10, textE11);
	//console.log(text12);

	
	var textE5 = text1uni;
	var textE6 = new String(x - z - 100 );
	var textE7 = "PE";
	var textE8 = textE5.concat(textE6, textE7);
	//console.log(text8);

	var textE13 = text1uni;
	var textE14 = new String(x - z - 50 );
	var textE15 = "CE";
	var textE16 = textE13.concat(textE14, textE15);
	//console.log(text16);

	var textF1 = text1uni;
	var textF2 = new String(x - z + 200);
	var textF3 = "CE";
	var textF4 = textF1.concat(textF2, textF3);
	//console.log(text4);

	var textF9 = text1uni;
	var textF10 = new String(x - z + 150 );
	var textF11 = "PE";
	var textF12 = textF9.concat(textF10, textF11);
	//console.log(text12);

	
	var textF5 = text1uni;
	var textF6 = new String(x - z + 200 );
	var textF7 = "PE";
	var textF8 = textF5.concat(textF6, textF7);
	//console.log(text8);

	var textF13 = text1uni;
	var textF14 = new String(x - z + 250 );
	var textF15 = "CE";
	var textF16 = textF13.concat(textF14, textF15);


		//=================
		var textG1 = text1uni;
		var textG2 = new String(x - z -150);
		var textG3 = "CE";
		var textG4 = textG1.concat(textG2, textG3);
		//console.log(text4);
	
		var textG9 = text1uni;
		var textG10 = new String(x - z - 200);
		var textG11 = "PE";
		var textG12 = textG9.concat(textG10, textG11);
		//console.log(text12);
	
		
		var textG5 = text1uni;
		var textG6 = new String(x - z - 150 );
		var textG7 = "PE";
		var textG8 = textG5.concat(textG6, textG7);
		//console.log(text8);
	
		var textG13 = text1uni;
		var textG14 = new String(x - z - 100 );
		var textG15 = "CE";
		var textG16 = textG13.concat(textG14, textG15);
		//=================
		var textI1 = text1uni;
		var textI2 = new String(x - z - 200 );
		var textI3 = "CE";
		var textI4 = textI1.concat(textI2, textI3);
		//console.log(text4);
	
		var textI9 = text1uni;
		var textI10 = new String(x - z - 250);
		var textI11 = "PE";
		var textI12 = textI9.concat(textI10, textI11);
		//console.log(text12);
	
		
		var textI5 = text1uni;
		var textI6 = new String(x - z -200 );
		var textI7 = "PE";
		var textI8 = textI5.concat(textI6, textI7);
		//console.log(text8);
	
		var textI13 = text1uni;
		var textI14 = new String(x - z - 150 );
		var textI15 = "CE";
		var textI16 = textI13.concat(textI14, textI15);

	//====================

	var textH1 = text1uni;
	var textH2 = new String(x - z + 250);
	var textH3 = "CE";
	var textH4 = textH1.concat(textH2, textH3);
	//console.log(text4);

	var textH9 = text1uni;
	var textH10 = new String(x - z + 200 );
	var textH11 = "PE";
	var textH12 = textH9.concat(textH10, textH11);
	//console.log(text12);

	
	var textH5 = text1uni;
	var textH6 = new String(x - z + 250 );
	var textH7 = "PE";
	var textH8 = textH5.concat(textH6, textH7);
	//console.log(text8);

	var textH13 = text1uni;
	var textH14 = new String(x - z + 300 );
	var textH15 = "CE";
	var textH16 = textH13.concat(textH14, textH15);
	//console.log(text16);
		//====================

		var textJ1 = text1uni;
		var textJ2 = new String(x - z + 300);
		var textJ3 = "CE";
		var textJ4 = textJ1.concat(textJ2, textJ3);
		//console.log(text4);
	
		var textJ9 = text1uni;
		var textJ10 = new String(x - z + 250 );
		var textJ11 = "PE";
		var textJ12 = textJ9.concat(textJ10, textJ11);
		//console.log(text12);
	
		
		var textJ5 = text1uni;
		var textJ6 = new String(x - z + 300 );
		var textJ7 = "PE";
		var textJ8 = textJ5.concat(textJ6, textJ7);
		//console.log(text8);
	
		var textJ13 = text1uni;
		var textJ14 = new String(x - z + 350 );
		var textJ15 = "CE";
		var textJ16 = textJ13.concat(textJ14, textJ15);
		//console.log(text16);
	kc.getLTP(new Array(textG4, textG12, textG8, textG16,textH4, textH12, textH8, textH16,textI4, textI12, textI8, textI16,textJ4, textJ12, textJ8, textJ16,textF4, textF12, textF8, textF16,textE4, textE12, textE8, textE16,textC4, textC12, textC8, textC16,textD4, textD12, textD8, textD16,textA4, textA12, textA8, textA16, text4, text12, text8, text16, textB4, textB12, textB8, textB16)).then(function (response) {
		//console.log(response);
		var d = new Date();
		var n = d.getMinutes();
		console.log( 
			(response[textI4].last_price - response[textI16].last_price).toFixed(2), ',', (response[textI8].last_price - response[textI12].last_price).toFixed(2),  '||',
			(response[textG4].last_price - response[textG16].last_price).toFixed(2), ',', (response[textG8].last_price - response[textG12].last_price).toFixed(2),  '||',
			(response[textE4].last_price - response[textE16].last_price).toFixed(2), ',', (response[textE8].last_price - response[textE12].last_price).toFixed(2),  '||', 
			(response[textC4].last_price - response[textC16].last_price).toFixed(2), ',', (response[textC8].last_price - response[textC12].last_price).toFixed(2),'||',
			d.getHours(),':', d.getMinutes(),'**' , 
			(response[textA4].last_price - response[textA16].last_price).toFixed(2), ',', (response[textA8].last_price - response[textA12].last_price).toFixed(2),'||',
			x, ':',
			(response[text4].last_price - response[text16].last_price).toFixed(2), ',', (response[text8].last_price - response[text12].last_price).toFixed(2) ,'||',
			(response[textB4].last_price - response[textB16].last_price).toFixed(2), ',', (response[textB8].last_price - response[textB12].last_price).toFixed(2), '||', 
			(response[textD4].last_price - response[textD16].last_price).toFixed(2), ',', (response[textD8].last_price - response[textD12].last_price).toFixed(2), '||', 
			(response[textF4].last_price - response[textF16].last_price).toFixed(2), ',', (response[textF8].last_price - response[textF12].last_price).toFixed(2), '||',
			(response[textH4].last_price - response[textH16].last_price).toFixed(2), ',', (response[textH8].last_price - response[textH12].last_price).toFixed(2)
			);
		//console.log( (response[textC4].last_price - response[textC16].last_price).toFixed(2), ',', (response[textC8].last_price - response[textC12].last_price).toFixed(2),'||',d.getHours(),':', d.getMinutes(),'**' , (response[textA4].last_price - response[textA16].last_price).toFixed(2), ',', (response[textA8].last_price - response[textA12].last_price).toFixed(2),'||',x, ':',(response[text4].last_price - response[text16].last_price).toFixed(2), ',', (response[text8].last_price - response[text12].last_price).toFixed(2) ,'||',(response[textB4].last_price - response[textB16].last_price).toFixed(2), ',', (response[textB8].last_price - response[textB12].last_price).toFixed(2), '||', (response[textD4].last_price - response[textD16].last_price).toFixed(2), ',', (response[textD8].last_price - response[textD12].last_price).toFixed(2), '||', (response[textE4].last_price - response[textE16].last_price).toFixed(2), ',', (response[textE8].last_price - response[textE12].last_price).toFixed(2),  '||', (response[textF4].last_price - response[textF16].last_price).toFixed(2), ',', (response[textF8].last_price - response[textF12].last_price).toFixed(2));
		//console.log('This',response[textC4].last_price , response[textC16].last_price, ',', response[textC8].last_price , response[textC12].last_price);
		//console.log(textD4,textD16, textD8, textD12);
		var path = "C:\\Users\\gmano\\Desktop\\Manoj\\2021\\stock.txt";
		
		//var data = (response[textC4].last_price - response[textC16].last_price).toFixed(2) +  ',' + (response[textC8].last_price - response[textC12].last_price).toFixed(2) + '||' + d.getHours() +  ':' + d.getMinutes() + '**'  + (response[textA4].last_price - response[textA16].last_price).toFixed(2) + ',' + (response[textA8].last_price - response[textA12].last_price).toFixed(2) + '||' + x +  ':'+ (response[text4].last_price - response[text16].last_price).toFixed(2)+  ',' +  (response[text8].last_price - response[text12].last_price).toFixed(2) +'||' + (response[textB4].last_price - response[textB16].last_price).toFixed(2) + ',' + (response[textB8].last_price - response[textB12].last_price).toFixed(2) +  '||' + (response[textD4].last_price - response[textD16].last_price).toFixed(2) +  ',' + (response[textD8].last_price - response[textD12].last_price).toFixed(2) + '\n';
		var data = 
(response[textI4].last_price - response[textI16].last_price).toFixed(2) +  ',' + (response[textI8].last_price - response[textI12].last_price).toFixed(2) + '||' + 
(response[textG4].last_price - response[textG16].last_price).toFixed(2) +  ',' + (response[textG8].last_price - response[textG12].last_price).toFixed(2) + '||' + 
(response[textE4].last_price - response[textE16].last_price).toFixed(2) +  ',' + (response[textE8].last_price - response[textE12].last_price).toFixed(2) + '||' + 
(response[textC4].last_price - response[textC16].last_price).toFixed(2) +  ',' + (response[textC8].last_price - response[textC12].last_price).toFixed(2) + '||' +
d.getHours() +  ':' + d.getMinutes() + '**'  + 
(response[textA4].last_price - response[textA16].last_price).toFixed(2) + ',' + (response[textA8].last_price - response[textA12].last_price).toFixed(2) + '||' +
x +  ':'+ 
(response[text4].last_price - response[text16].last_price).toFixed(2)+  ',' +  (response[text8].last_price - response[text12].last_price).toFixed(2) +'||' +
(response[textB4].last_price - response[textB16].last_price).toFixed(2) + ',' + (response[textB8].last_price - response[textB12].last_price).toFixed(2) +  '||' + 
(response[textD4].last_price - response[textD16].last_price).toFixed(2) +  ',' + (response[textD8].last_price - response[textD12].last_price).toFixed(2) + '||' + 
(response[textF4].last_price - response[textF16].last_price).toFixed(2) +  ',' + (response[textF8].last_price - response[textF12].last_price).toFixed(2) + '||' + 
(response[textH4].last_price - response[textH16].last_price).toFixed(2) +  ',' + (response[textH8].last_price - response[textH12].last_price).toFixed(2) + '\n';
		if((response[text4].last_price - response[text16].last_price).toFixed(2) > 90 || (response[text8].last_price - response[text12].last_price).toFixed(2) > 90){
			data = "'GOT'+ text4 + text16 +  text8 + text12 + '\n' ";
		}else if((response[textA4].last_price - response[textA16].last_price).toFixed(2) > 90 || (response[textA8].last_price - response[textA12].last_price).toFixed(2) > 90){
			data = "'GOT'+ textA4 + textA16 +  textA8 + textA12 + '\n'";
		}else if((response[textB4].last_price - response[textB16].last_price).toFixed(2) > 90 || (response[textB8].last_price - response[textB12].last_price).toFixed(2) > 90){
			data = "'GOT'+ textB4 + textB16 +  textB8 + textB12 + '\n'";
		}else if((response[textC4].last_price - response[textC16].last_price).toFixed(2) > 90 || (response[textC8].last_price - response[textC12].last_price).toFixed(2) > 90) {
			data = "'GOT'+ textC4 + textC16 +  textC8 + textC12 + '\n'";
		}else if((response[textD4].last_price - response[textD16].last_price).toFixed(2) > 90 || (response[textD8].last_price - response[textD12].last_price).toFixed(2) > 90) {
			data = "'GOT'+ textD4 + textD16 +  textD8 + textD12 + '\n'";
		}else if((response[textE4].last_price - response[textE16].last_price).toFixed(2) > 90 || (response[textE8].last_price - response[textE12].last_price).toFixed(2) > 90) {
			data = "'GOT'+ textE4 + textE16 +  textE8 + textE12 + '\n'";
		}else if((response[textF4].last_price - response[textF16].last_price).toFixed(2) > 90 || (response[textF8].last_price - response[textF12].last_price).toFixed(2) > 90) {
			data = "'GOT'+ textF4 + textF16 +  textF8 + textF12 + '\n'";
		}else if((response[textG4].last_price - response[textG16].last_price).toFixed(2) > 90 || (response[textG8].last_price - response[textG12].last_price).toFixed(2) > 90) {
			data = "'GOT'+ textG4 + textG16 +  textG8 + textG12 + '\n'";
		}else if((response[textH4].last_price - response[textH16].last_price).toFixed(2) > 90 || (response[textH8].last_price - response[textH12].last_price).toFixed(2) > 90) {
			data = "'GOT'+ textH4 + textH16 +  textH8 + textH12 + '\n'";
		}else if((response[textI4].last_price - response[textI16].last_price).toFixed(2) > 90 || (response[textI8].last_price - response[textI12].last_price).toFixed(2) > 90) {
			data = "'GOT'+ textI4 + textI16 +  textI8 + textI12 + '\n'";
		}else if((response[textJ4].last_price - response[textJ16].last_price).toFixed(2) > 90 || (response[textJ8].last_price - response[textJ12].last_price).toFixed(2) > 90) {
			data = "'GOT'+ textJ4 + textJ16 +  textJ8 + textJ12 + '\n'";
		}

		fs.appendFile(path, data, function(error) {
			 if (error) {
			   console.error("write error:  " + error.message);
			 } else {

			 }
		});

		/*fs.writeFile('./stockfile.txt',(d.getHours(),':', d.getMinutes(),'**' , (response[textA4].last_price - response[textA16].last_price).toFixed(2), ',', (response[textA8].last_price - response[textA12].last_price).toFixed(2),'||',x, ':',(response[text4].last_price - response[text16].last_price).toFixed(2), ',', (response[text8].last_price - response[text12].last_price).toFixed(2) ,'||',(response[textB4].last_price - response[textB16].last_price).toFixed(2), ',', (response[textB8].last_price - response[textB12].last_price).toFixed(2), '\n'), (err) => { 
			  
			// In case of a error throw err. 
			if (err) throw err; 
		}) */


	});
	

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