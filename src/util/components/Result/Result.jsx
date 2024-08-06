import { formatter } from "../../investment.js";

const Result = ({ investmentResults }) => {
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
        {investmentResults.map((result, i) => (
          <tr>
            <th>{result.year}</th>
            <th>{formatter.format(result.valueEndOfYear)}</th>
            <th>{formatter.format(result.interest)}</th>
            <th>{formatter.format(result.annualInvestment)}</th>
            <th>asd</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
