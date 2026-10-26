var xlg = {
	websocket : null,
	wsUri : null,
	tableId : null,
	casinoId : null,
	tryToConnect : true,

	// public
	connect : function(wsUri, casinoId, tableId) {
		var self = this;
		self.tryToConnect = true;
		self.wsUri = wsUri;
		console.log('connecting to ' + 'wss://' + wsUri + '/ws');
		if(self.websocket !== null && self.websocket.readyState !== 3){
			self.websocket.close();
			console.log('Socket open closing it');
		} 
		self.websocket = new WebSocket('wss://' + wsUri + '/ws');
		self.websocket.onopen = function(evt) {
			self.onWsOpen(evt, casinoId, tableId)
		};
		self.websocket.onclose = function(evt) {
			self.onWsClose(evt)
		};
		self.websocket.onmessage = function(evt) {
			self.onWsMessage(evt)
		};
		self.websocket.onerror = function(evt) {
			self.onWsError(evt)
		};
		if (tableId) {
			self.tableId = tableId;
		}
		self.casinoId = casinoId;
	},
	// public
	onMessage : function(data) {
		// to fill
	},
	// public
	onConnect : function() {
		// to fill
	},
	// public
	disconnect : function() {
		var self = this;
		self.tryToConnect = false;
		self.websocket.close();
		console.log('Disconnected');
	},
	// public
	subscribe : function(casinoId, tableId, currency) {
		var subscribeMessage = {
			type : 'subscribe',
			key : tableId,
			casinoId : casinoId,
			currency : currency
		}
		console.log('subscribing' + tableId);

		var self = this;
		// console.log('Subscribing ' + tableId);
		var jsonSub = JSON.stringify(subscribeMessage);
		self.doWsSend(jsonSub);
	},
	
	// public
	available : function(casinoId) {
		var availableMessage = {
			type : 'available',
			casinoId : casinoId
		}
		console.log('checking availability');

		var self = this;
		// console.log('Subscribing ' + tableId);
		var jsonSub = JSON.stringify(availableMessage);
		self.doWsSend(jsonSub);
	},

	onWsOpen : function(evt) {
		var self = this;

		// console.log(evt.data);
		if (self.onConnect != null) {
			self.onConnect();
		}

		console.log('Connected to wss server');
		if (self.tableId) {
			self.subscribe(self.casinoId, self.tableId)
		}
	},

	onWsClose : function(evt) {
		console.log("DISCONNECTED");
		var self = this;
		if (self.tryToConnect === true) {
			console.log("RECONNECTING");
			self.connect(self.wsUri, self.casinoId, self.tableId);
		}
	},

	onWsMessage : function(evt) {
		var self = this;
		var data = JSON.parse(evt.data);
		// console.log(evt.data);
		if (self.onMessage != null) {
			self.onMessage(data);
		}
	},

	onWsError : function(evt) {
		console.log('ERROR: ' + evt.data);
	},

	ping : function() {
    	var self = this;
    	var pingMessage = {
            type : 'ping',
            pingTime : Date.now().toString()
        }
        var jsonSub = JSON.stringify(pingMessage);
        self.doWsSend(jsonSub);
    },

	doWsSend : function(message) {
		var self = this;
		console.log("SENT: " + message);
		self.websocket.send(message);
	}
};

var dga=xlg;