
export default function (props) {

    return (
      <div className="Auth-form-container ">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="text-center Auth-form-title">Iniciar sesión</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" >
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Passwword</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="/home">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

 