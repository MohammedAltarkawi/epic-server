const cds = require('@sap/cds')
class ProjectService extends cds.ApplicationService { init() {
  const { Users } = cds.entities('ProjectService')

  // Register your event handlers in here, for example:
  this.on('READ', Users, async (req) => { 
    return { 
      ID: '11111111-1111-1111-1111-111111111111',
      name: "Hello from the event handler!"
    };
    
  }) 

  this.on('helloUser', async (req) => {
    const username = req.user.id;
      return await SELECT.from(Users).where({ ID: username });    
  })

  return super.init()
}}
module.exports = ProjectService