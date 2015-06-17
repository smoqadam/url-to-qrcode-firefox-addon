self.port.on('show',function onShow(data) {
  var qr = document.getElementById('qr');
  qr.src = 'http://api.qrserver.com/v1/create-qr-code/?data='+data.url+'&size=120x120';
});