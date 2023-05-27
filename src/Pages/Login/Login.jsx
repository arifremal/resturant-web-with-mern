import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



const Login = () => {
  const captchaRef = useRef()
  const [disable,setDisable] = useState(true)

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password= form.password.value;
   
  }
  const handleValidateCaptcha= ()=>{
    const user_captcha_value = captchaRef.current.value
    
    if(validateCaptcha(user_captcha_value)){
      setDisable(false)

    }
    else{
      
      setDisable(true)

    }

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center ">Login now!</h1>
          <p className="py-6 text-center ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi <br /> exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="captcha"
                  ref={captchaRef}
                  placeholder="write the text"
                  name="captcha"
                  className="input input-bordered"
                />
                <button onClick={handleValidateCaptcha} className="btn mt-2 btn-outline btn-accent btn-xs">Done</button>

                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  disabled={disable}
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
