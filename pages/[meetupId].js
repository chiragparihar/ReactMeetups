import MeetupDetail from "../components/meetups/MeetupDetail";
import { MongoClient,ObjectId } from "mongodb";
import Head from 'next/head'
function MeetupDetails(props){
    
    return (
        <>
        <Head>
            <title>{props.DATA.title}</title>
            <meta name='description' content={props.DATA.description}></meta>
        </Head>
        <MeetupDetail title = {props.DATA.title} image ={props.DATA.image} address ={props.DATA.address} description ={props.DATA.description} ></MeetupDetail>
        </>
    )
}
export async function getStaticPaths(){
    const usrName = process.env.MONGOUSR
    const psk = process.env.MONGOPSK
    const client =  await MongoClient.connect('mongodb+srv://' + usrName + ':' + psk + '@cluster0.1kfn7.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupCollections = db.collection('meetups');
    const meetups = await meetupCollections.find({},{_id:1}).toArray();
    client.close();
    return {
        fallback:'blocking',
        paths:meetups.map((id) =>({
            params:{meetupId: id._id.toString()}
        }))
    }
}
export async function getStaticProps(context){
    const usrName = process.env.MONGOUSR
    const id = context.params.meetupId;
    const psk = process.env.MONGOPSK
    const client =  await MongoClient.connect('mongodb+srv://' + usrName + ':' + psk + '@cluster0.1kfn7.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupCollections = db.collection('meetups');
    const meetup = await meetupCollections.findOne({_id: ObjectId(id)})
    client.close();
    return {
        props:{
            DATA:{
                image:meetup.image,
                description:meetup.description,
                title:meetup.title,
                address:meetup.address

            }
        }
    }
}
export default MeetupDetails