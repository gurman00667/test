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

```http://localhost:6999/adduser```
It **POST** request you need to pass some data as object 

```
{
EMAIL : ""
Name : ""
Password : ""
}

```
