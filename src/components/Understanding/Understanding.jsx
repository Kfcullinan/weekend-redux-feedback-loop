import { useSelector, useDispatch } from 'react-redux'
// allows us to navigate to another page
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    const history = useHistory();
    // step 2 useSelector and dispatch
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();


const handleChange2 = (event) => {
    //passing data to our reducer
    dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value})
}

const nextStep = () => {
    if (understanding !== undefined && understanding.value > 0){
        history.push('/support');
    } else{
        alert ('A number is required')
    }
}


return (

    <>
        <h3>How well are you understanding React Redux?</h3>
        <br />
        <p>Enter 1 for not at all</p>
        <div>
            {/*step 3 getter and setter */}
            <input value={understanding} onChange={handleChange2} className="input" type="number"/>
            <button onClick={nextStep} className="button">Next</button>
        </div>
    </>
)
}

export default Understanding;