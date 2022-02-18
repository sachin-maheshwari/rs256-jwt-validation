# rs256-jwt-validation
server to validate topcoder RS256 JWT token 

How to run the server ?  

- docker build . -t "rs256-validation-server"

- docker run -it -p 3000:3000 rs256-validation-server

Open the URL http://localhost:3000?token=<RS256-JWT-Token> in browser
