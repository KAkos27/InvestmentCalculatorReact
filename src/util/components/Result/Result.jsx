import { formatter, calculateInvestmentResults } from "../../investment.js";

const Result = ({ investmentResults }) => {
  const calculatedResults = calculateInvestmentResults(investmentResults);
  const initialInvestment =
    calculatedResults[0].valueEndOfYear -
    calculatedResults[0].interest -
    calculatedResults[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResults.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;
          const totalInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <th>{result.year}</th>
              <th>{formatter.format(result.valueEndOfYear)}</th>
              <th>{formatter.format(result.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalInvested)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
