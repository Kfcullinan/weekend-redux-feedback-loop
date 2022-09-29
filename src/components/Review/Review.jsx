import { useSelector, useDispatch } from 'react-redux'
// allows us to navigate to another page
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Review = () => {

    const history= useHistory();
    const displayFeeling = useSelector(store => store.feeling)
    const displayUnderstanding = useSelector(store => store.understanding)
    const displaySupport = useSelector(store => store.support)
    const displayComments = useSelector(store => store.comments)
    const dispatch = useDispatch();

    const submitFeedback = () => {
        console.log('submitFeedback');
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: displayFeeling,
                understanding: displayUnderstanding,
                support: displaySupport,
                comments: displayComments
            }
            }).then((response) => {
                dispatch({ type: 'CLEAR_ALL'});
                history.push('/');
    
            }).catch((error) => {
                console.log('Issue getting feedback', error);
            })
    }
    return (
        <>
        <h1>Summary:</h1>
        <div>
                <h2>Feeling: {displayFeeling}</h2>
                <h2>Understanding: {displayUnderstanding}</h2>
                <h2>Support: {displaySupport}</h2>
                <h2>Comments: {displayComments}</h2>
                <button onClick={submitFeedback} className="button">Submit</button>
        </div>
        </>
    );
}

export default Review;