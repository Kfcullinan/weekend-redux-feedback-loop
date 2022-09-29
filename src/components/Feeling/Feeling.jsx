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
const nextStep = () => {
    if (feeling !== undefined && feeling.length){ //something wrong here> 0
        history.push('/understanding');
    } else {
        alert ('A number is required')
    }
}
return (

    <>
        
        <h3>How are you feeling?</h3>
        <br />
        <p>1-5</p>
        <div>
            {/*step 3 getter and setter */}
            <input value={feeling} onChange={handleChange} className="input" type="number"/>
            <button onClick={nextStep} className="button">Next</button>
        </div>
    </>
)      
}

export default Feeling;