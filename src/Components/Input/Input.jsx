import "./Input.css";

function Input() {
  return (

    
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center align-items-center text-center">
              <div className="fieldInput">
              {/* <form> */}
                <input
                  className="form-input"
                  type="email"
                  placeholder="Enter Your City"
                />
                <button type="submit" className="form-submit">
                  Add City
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
     
 
  );
}

export default Input;
