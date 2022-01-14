import MeetupDetail from "../components/meetups/MeetupDetail";
const DATA = {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://cdn.pixabay.com/photo/2018/03/02/17/19/paris-3193674_960_720.jpg',
    address: ' Paris',
    description: 'This is the first meetup'
}
function MeetupDetails(){
    return <MeetupDetail title = {DATA.title} image ={DATA.image} address ={DATA.address} description ={DATA.description} ></MeetupDetail>
}
export async function getStaticPaths(){
    return {
        fallback:false,
        paths:[
            {
                params:{
                    meetupId:'m1'
                }
            },
            {
                params:{
                    meetupId:'m2'
                }
            },
            {
                params:{
                    meetupId:'m3'
                }
            }
        ]
    }
}
export async function getStaticProps(context){
    const id = context.params.meetupId;
    console.log(id);
    return {
        props:{
            meetupData: DATA
        }
    }
}
export default MeetupDetails