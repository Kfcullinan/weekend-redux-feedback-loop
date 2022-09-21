import { useSelector, useDispatch } from 'react-redux'
// allows us to navigate to another page
import { useHistory } from 'react-router-dom';


const Review = () => {
    const dispatch = useDispatch();
    const history= useHistory();
    const displayFeeling = useSelector(store => store.feeling)
    const displayUnderstanding = useSelector(store => store.understanding)
    const displaySupport = useSelector(store => store.support)
    const displayComments = useSelector(store => store.comments)
    return (
        <>
        <h1>Summary:</h1>
        <div>
                <h2>Feeling: {displayFeeling}</h2>
                <h2>Understanding: {displayUnderstanding}</h2>
                <h2>Support: {displaySupport}</h2>
                <h2>Comments: {displayComments}</h2>
                <button onClick={() => history.push('/summary')} className="button">Submit</button>
        </div>
        </>
    );
}

export default Review;