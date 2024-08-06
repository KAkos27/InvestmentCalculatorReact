import { calculateInvestmentResults, formatter } from "./util/investment.js";

import Header from "./util/components/Header/Header";
import Result from "./util/components/Result/Result";
import UserInput from "./util/components/UserInput/UserInput";

const dummyData = calculateInvestmentResults({
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 12,
});
console.log(dummyData);

const handleUserInput = (event) => {
  if (event.target.id === "initial") {
    console.log(event.target.value + "initial");
  } else if (event.target.id === "annual") {
    console.log(event.target.value + "annual");
  } else if (event.target.id === "expected") {
    console.log(event.target.value + "expected");
  } else {
    console.log(event.target.value + "duration");
  }
};

const App = () => {
  return (
    <>
      <Header />
      <UserInput onUserInput={handleUserInput} />
      <Result investmentResults={dummyData} />
    </>
  );
};

export default App;
