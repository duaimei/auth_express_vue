Both the client and the server should have their respective READMEs, this one is more for notes along the way.
# The problem:
given that I am on: http://localhost:8080/
and I click on the "GOOGLE" button
And the email is valid
Then I expect to be redirected to http://localhost:8080/home

given that a user clicks on "GOOGLE" button on the frontend
And google authenticates the user
Then I expect that there will be a database upsert for the user
And the route should redirect the user to http://localhost:8080
# Diagram in use:
https://developers.google.com/identity/sign-in/web/server-side-flow

# passport strategy:
http://www.passportjs.org/packages/passport-oauth2/
https://github.com/jaredhanson/passport-oauth2
This is the one that I went with for the server to begin with