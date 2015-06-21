const {ToggleButton} = require('sdk/ui/button/toggle');
const tabs = require('sdk/tabs');
const pageMod = require('sdk/page-mod');
const data    = require('sdk/self').data;
const panel   = require('sdk/panel').Panel({
	width: 160,
	height: 160,
	contentURL : data.url('index.html'),
	contentScriptFile :  data.url('qrcode.js'),
	onHide : function(){
		button.state('window',{checked : false});
	}
});


let button = ToggleButton({
	id : 'urltoqr',
	label : 'Click to convert URL to QR code',
	icon  : {
		"32": data.url("images.png")
	},
	onChange : function(state){
		if(state.checked)
			panel.show({
				position:button
			});
	}
});


panel.on('show',function () {
	panel.port.emit('show',{url : tabs.activeTab.url});
})