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
        <h3>Summary</h3>
        <div>
                <h2>{displayFeeling}</h2>
                <h2>{displayUnderstanding}</h2>
                <h2>{displaySupport}</h2>
                <h2>{displayComments}</h2>
                <button onClick={() => history.push('/summary')} className="button">Submit</button>
        </div>
        </>
    );
}

export default Review;