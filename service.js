var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'jawda web service ',
  description: 'The nodejs.org example web server.',
  script: 'C:/app/test.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();