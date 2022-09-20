import { useSelector, useDispatch } from 'react-redux';
// allows us to navigate to another page
import { useHistory } from 'react-router-dom';


const Feeling = () => {
    const history = useHistory();
    // step 2 useSelector and dispatch
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();


const handleChange = (event) => {
    //passing data to our reducer
    dispatch({ type: 'SET_FEELING', payload: event.target.value})
}

return (

    <>
        
        <h3>How are you feeling?</h3>
        <br />
        <p>1 = The feeling you had when learning Props and anything above that is a win in my book</p>
        <div>
            {/*step 3 getter and setter */}
            <input value={feeling} onChange={handleChange} className="input" type="number"/>
            <button onClick={() => history.push('/understanding')} className="button">Next</button>
        </div>
    </>
)
}

export default Feeling;