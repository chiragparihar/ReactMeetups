import MeetupList from '../components/meetups/MeetupList'
import { useEffect , useState } from 'react';
const DUMMY_MEETUP =[
    {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://cdn.pixabay.com/photo/2018/03/02/17/19/paris-3193674_960_720.jpg',
    address: ' Paris',
    description: 'This is the first meetup'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://cdn.pixabay.com/photo/2019/09/13/15/12/road-4474168_960_720.jpg',
        address: ' New York',
        description: 'This is the second meetup'

    },
    {
        id: 'm3',
        title: 'A third meetup',
        image: 'https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg',
        address: ' London',
        description: 'This is the third meetup'
    }
    
]
function Homepage(props){
    return(
        <MeetupList meetups= {props.meetups}/>
    );
}
//executed only on build process
export async function getStaticProps() {
    //need to always return an object
    return {
        props:{
            meetups:DUMMY_MEETUP
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