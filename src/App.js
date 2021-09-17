import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    
    let negative = 0;
    
    let litres = (bottles * 0.33);

    let grams = (litres * 8 * 4.5);
    
    let burning = (weight / 10);

    let left = grams - (burning * time);

    if (left < 0) {
      setResult(negative)
    }
    
    else if (gender === 'male') {

      setResult(left / (weight * 0.7));
    }
    else {
    
      setResult(left / (weight * 0.6));
    }
     
    
    
  }
  
  return (
    <>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        </select>
      </div>
      <div>
       <label>Time</label>
       <select name="time" value={time} onChange={e => setTime(e.target.value)}>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
       </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange ={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
      <output>{result.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
    </>
  );
}

export default App;
