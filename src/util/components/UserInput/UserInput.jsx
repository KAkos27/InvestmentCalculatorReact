const UserInput = ({ userInput, onUserInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            id="initial"
            type="number"
            value={userInput.initialInvestment}
            onChange={onUserInput}
          ></input>
        </p>
        <p>
          <label>annual investment</label>
          <input
            id="annual"
            type="number"
            value={userInput.annualInvestment}
            onChange={onUserInput}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            id="expected"
            type="number"
            value={userInput.expectedReturn}
            onChange={onUserInput}
          ></input>
        </p>
        <p>
          <label>duration</label>
          <input
            id="duration"
            type="number"
            value={userInput.duration}
            onChange={onUserInput}
          ></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
