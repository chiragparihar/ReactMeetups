
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
function NewMeetupPage() {
    function addMeetupHandler(entered) {
        console.log(entered)
    }
    return <NewMeetupForm onAddMeetup ={addMeetupHandler} />
}

export default NewMeetupPage