import MeetupList from '../components/meetups/MeetupList'
import { useEffect , useState } from 'react';
import {MongoClient} from 'mongodb'
import Head from 'next/head'
function Homepage(props){
    return(
        <>
        <Head>
            <title>React meetups</title>
            <meta name='description' content='Browse a huge list of highy active react meetups!'></meta>
        </Head>
         <MeetupList meetups= {props.meetups}/>
        </>
       
    );
}
//executed only on build process
export async function getStaticProps() {
    const usrName = process.env.MONGOUSR
    const psk = process.env.MONGOPSK
    const client =  await MongoClient.connect('mongodb+srv://' + usrName + ':' + psk + '@cluster0.1kfn7.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupCollections = db.collection('meetups');
    const meetups = await meetupCollections.find().toArray();

    return {
        props:{
            meetups:meetups.map((meetup) => ({
                title:meetup.title,
                address:meetup.address,
                description:meetup.description,
                image:meetup.image,
                id:meetup._id.toString()
            }))
        },
        revalidate:10
    }

}

//re-render att every request (good for data that changes at every request)
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     //fetch data from api
//     return{
//         props:DUMMY_MEETUP
//     };
// }
export default Homepage;