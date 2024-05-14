import { useState } from "react";

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleCheckboxChange = (e) => setButtonDisabled(!e.target.checked);

  return (
    <div>
      <h1>Sundaes on Demand</h1>

      <input onChange={handleCheckboxChange} type="checkbox" id="terms-and-conditions" />
      <label htmlFor="terms-and-conditions">I agree to terms and conditions</label>

      <br />

      <button disabled={buttonDisabled}>Confirm order</button>
    </div>
  );
}

export default App;
