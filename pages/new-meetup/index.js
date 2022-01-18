import Head from 'next/head';
import {useRouter} from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(entered) {
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body: JSON.stringify(entered),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
        router.push('/')
    }
    return (
        <>
        <Head>
            <title>Add a meetups</title>
            <meta name='description' content=' Add amazing meetups'></meta>
        </Head>
        <NewMeetupForm onAddMeetup ={addMeetupHandler} />
        </>
    )
}

export default NewMeetupPage