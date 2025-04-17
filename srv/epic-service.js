const cds = require('@sap/cds')
class ProjectService extends cds.ApplicationService { init() {
  const { Users } = cds.entities('ProjectService')

  // Register your event handlers in here, for example:
  this.on('READ', Users, book => { 
    return { 
      ID: '11111111-1111-1111-1111-111111111111',
      name: "Hello from the event handler!"
    };
    
  }) 

  this.on('helloUser', async (req) => {
    return { 
      ID: '11111111-1111-1111-1111-111111111111',
      name: "Hello from the event handler!"
    };
  })

  return super.init()
}}
module.exports = ProjectService