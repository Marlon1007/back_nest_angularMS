# GitHub Commands

# Iniatilize the local repository
```
git init
```
Reference of the local repository with the remote one
(GITHUB)
````
git remote add origin https://github.com/Marlon1007/back_nest_angularMS.git
````
# Validate reference
````
git remote -v
````
--------------------
````
git add .
dit commit -m "proyecto base"
git push origin master
````
````
- For force

git push -f origin master
````
# Packages

-Autenticación con jwt y Passport
```
npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt        
```

# Modules
````
- Auth
- Module
nest g mo modules/auth
- Controller
nest g co modules/auth
- Service
nest g s modules/auth
- Users crud
nest g res modules/users
````
# Class validator
````
npm i --save class-validator class-transformer
````
# Database
´´´´
npm install typeorm @nestjs/typeorm pg
´´´´
# Migrations
´´´´
- Generate migration
npm run migration:generate --name=table_user
- Run migration
npm run migration:run   
´´´´