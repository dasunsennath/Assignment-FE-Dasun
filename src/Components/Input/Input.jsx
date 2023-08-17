import "./Input.css";

function Input() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center text-center">
        <div className="col-md-6 col-sm-10 col-lg-5 d-flex justify-content-center align-items-center text-center">
          <div className="fieldInput">
            <input
              className="form-input"
              type="email"
              placeholder="Enter a City"
            />
            <button type="submit" className="form-submit">
              Add City
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
