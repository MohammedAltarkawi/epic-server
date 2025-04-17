
namespace org.energy4u.epic;

entity Users  {
  key ID       : String;
 // persNr       : String(10);
  name         : String(100);
  //email        : String(100);
  //role         : String(20);

  //manager      : Association to one Users; 
  team         : Association to one Teams; // Each user belongs to one team
}

entity Teams  {
  key ID         : Integer;
  name           : String(100);

  manager        : Association to one Users; // Each team has one manager
  teamMembers    : Association to many Users on teamMembers.team = $self; // Each team has many employees
}
