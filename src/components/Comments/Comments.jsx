import { useSelector, useDispatch } from 'react-redux'
// allows us to navigate to another page
import { useHistory } from 'react-router-dom';

const Comments = () => {
    const history = useHistory();
    // step 2 useSelector and dispatch
    const support = useSelector(store => store.comments);
    const dispatch = useDispatch();


const handleChange4 = (event) => {
    //passing data to our reducer
    dispatch({ type: 'SET_COMMENTS', payload: event.target.value})
}

return (

    <>
        <h3>Leave any comments below</h3>
        <br />
    
        <div>
            {/*step 3 getter and setter */}
            <input value={support} onChange={handleChange4} className="input" type="text"/>
            <button onClick={() => history.push('/comments')} className="button">Next</button>
        </div>
    </>
)
}

export default Comments;