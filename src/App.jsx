import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import BmiCard from "./components/BmiCard";
import { useState } from "react";

function App() {
  const [bmi, setBmi] = useState('');

  const handleBmi = (calculatedBmi) => {
    setBmi(calculatedBmi);
  };

  console.log(bmi);

  return (
    <div className="vh-100 bg-secondary row">
      {/* Left Column */}
      <div className="col-md-6 bg-warning d-flex justify-content-center align-items-center flex-column">
        {!bmi ? (
          <h1>Know Your BMI</h1>
        ) : (
          <>
            <h1>YOUR BMI IS</h1>
            <h2>{bmi}</h2>
          </>
        )}
      </div>

      {/* Right Column */}
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <BmiCard updateBmi={handleBmi} />
      </div>
    </div>
  );
}

export default App;
