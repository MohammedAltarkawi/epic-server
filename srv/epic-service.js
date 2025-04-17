const cds = require('@sap/cds')
class ProjectService extends cds.ApplicationService { init() {
  const { Users } = cds.entities('ProjectService')

  // Register your event handlers in here, for example:
  this.on('READ', Users, book => { 
    return "Hello from the event handler!"
  }) 

  return super.init()
}}
module.exports = ProjectService