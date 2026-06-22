## Bug report for @nestjs/typeorm

### Steps

1. create `.env.local` file and type your database 'username' and 'password'
```ini
DB_USERNAME=your_username
DB_PASSWORD=your_password
```
2. `npm i`  
3. `npm run dev`  


4. call  
```bash
curl -XPOST http://127.0.0.1:3000/app/init
```

5. call  
```bash
curl -XGET http://127.0.0.1:3000/app/entity-manager
```

6. call  
```bash
curl -XGET http://127.0.0.1:3000/app/repository
```

7. check logs, the second `FindPost` are incorrect.
