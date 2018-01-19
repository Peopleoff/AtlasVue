const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const ServiceControllerPolicy = require('./policies/ServiceControllerPolicy');
const Servers = require('./controllers/ServersController');
const Attachments = require('./controllers/AttachmentController');
const User = require('./controllers/UserController');
const Documentation = require('./controllers/DocumentationController');
const Locations = require('./controllers/LocationsController');
const Services = require('./controllers/ServiceController');

module.exports = (app) => {

  // Get Requests
  app.get('/ServerTypes', Servers.getAllServersTypes);
  app.get('/getUserGroups', User.getUserGroups);
  app.get('/Users', User.getUsers);
  app.get('/Documentation', Documentation.getAllDocumentation);
  app.get('/DisplayServer/:id', Servers.DisplayServer);
  app.get('/Servers/:location_id', Servers.getAllServers);
  app.get('/Racks/:location_id', Servers.getAllRacks);
  app.get('/locations/:location_id', Locations.getAllLocations);
  app.get('/Profile/:id', User.getProfile);
  app.get('/Attachments', Attachments.getAllAttachments);
  app.get('/Services', Services.getAllServices);
  // Post Requests
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/decryptPassword', AuthenticationController.decryptPassword);
  app.post('/addService', ServiceControllerPolicy.addService, Services.addService);
  app.post('/linkService', Services.updateLinkService);
  app.post('/updateLinkService', Services.updateLinkService);
  app.post('/deleteService', Services.deleteService);
  app.post('/login', AuthenticationController.login);
  app.post('/changePassword', AuthenticationControllerPolicy.changePassword, AuthenticationController.changePassword);
  app.post('/Servers', Servers.addServer);
  app.post('/isAuth', AuthenticationController.isAuth);
  app.post('/addAttachment', Attachments.addAttachment);
  app.post('/createDocument', Documentation.createDocument);
  app.post('/deleteDocument', Documentation.deleteDocument);
  app.post('/updateDocument', Documentation.updateDocument);

};
