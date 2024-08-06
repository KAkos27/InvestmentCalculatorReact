import { useState } from "react";

import Header from "./util/components/Header/Header";
import Result from "./util/components/Result/Result";
import UserInput from "./util/components/UserInput/UserInput";

const App = () => {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleUserInput = (event) => {
    setInvestmentData((prevData) => {
      const updatedData = { ...prevData };
      const input = parseFloat(event.target.value);

      if (event.target.id === "initial") {
        updatedData.initialInvestment = input;
      } else if (event.target.id === "annual") {
        updatedData.annualInvestment = input;
      } else if (event.target.id === "expected") {
        updatedData.expectedReturn = input;
      } else {
        updatedData.duration = input;
      }

      return updatedData;
    });
  };

  const calculatable =
    investmentData.initialInvestment > 0 && investmentData.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput={investmentData} onUserInput={handleUserInput} />
      {calculatable ? <Result investmentResults={investmentData} /> : <></>}
    </>
  );
};

export default App;
