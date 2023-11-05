const dbConnection = require('./mongodb')

const insert = async () =>{
    const db =await dbConnection();
    let result = await db.deleteOne({name:"nihal"})
    console.log(result)
}

insert()