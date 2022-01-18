// api/new-meetup
import {MongoClient} from 'mongodb'
async function handler(req,res){
    if(req.method === 'POST'){
        console.log('reqeuest receivec')
       const data =  req.body;
       const usrName = process.env.MONGOUSR
       const psk = process.env.MONGOPSK
       const client =  await MongoClient.connect('mongodb+srv://' + usrName + ':' + psk + '@cluster0.1kfn7.mongodb.net/meetups?retryWrites=true&w=majority')
       const db = client.db();
       const meetupsCollection = db.collection('meetups');
       const result = await meetupsCollection.insertOne(data);
       
       client.close();
       res.status(201).json({message: 'Meetup inserted!'});

    }
}

export default handler;