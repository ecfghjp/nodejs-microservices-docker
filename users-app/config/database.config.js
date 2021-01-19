const hostname = process.env.DB_HOST||'localhost';//should be mongo in .env/docker-compose
const port = process.env.DB_PORT||'27017';

const DB_URI = 'mongodb://'+hostname+':'+port+'/users';
console.log(DB_URI);
module.exports={
    url: DB_URI
}