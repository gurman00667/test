### To run frontend server 
###### need to go inside frontend/test 
``` Npm ci ```
``` npm run serve```
*It will use port **8080** by default*

###### Similarly 

### To run backend server
###### need to go inside backend
``` Npm ci ```
``` npm run dev```
*It will use port **6999** *

There are several API calls To access them through Postman:

1. ```http://localhost:6999/adduser```
  It **POST** request you need to pass some data as object 

  ```
  {
  EMAIL : ""
  Name : ""
  Password : ""
  }

  ```

1. ```http://localhost:6999/uploads```

  It **GET** request you don't need to pass data 
   _res_ will be :
  ```
  data : [
    {
      text : ""
      path : ""
      filename : ""
    }
  ]
  ```

1. ```http://localhost:6999/uploads```

  It **POST** request you need to pass Form Data :
  ```
  data : [
    {
      text : ""
      file : *type file*
    }
  ]
  ```

