import { useSelector, useDispatch } from 'react-redux'
// allows us to navigate to another page
import { useHistory } from 'react-router-dom';

const Support = () => {
    const history = useHistory();
    // step 2 useSelector and dispatch
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();


const handleChange3 = (event) => {
    //passing data to our reducer
    dispatch({ type: 'SET_SUPPORT', payload: event.target.value})
}

const nextStep = () => {
    if (support !== undefined && support.value > 0){
        history.push('/comments');
    } else{
        alert ('A number is required')
    }
}

return (

    <>
        <h3>Do you feel supported during this cohort?</h3>
        <br />
        <p>Enter 1 for not at all</p>
        <div>
            {/*step 3 getter and setter */}
            <input value={support} onChange={handleChange3} className="input" type="number"/>
            <button onClick={nextStep} className="button">Next</button>
        </div>
    </>
)
}

export default Support;