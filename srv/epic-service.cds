using { org.energy4u.epic as my } from '../db/schema';
 @requires           : 'authenticated-user'
service ProjectService {
  //entity Projects as projection on my.Projects;


  entity Teams as projection on my.Teams;

/* type HelloUser {
  ID: UUID;
  name: String;
} */

  function helloUser() returns  Users;
  
  entity Users as projection on my.Users;
}