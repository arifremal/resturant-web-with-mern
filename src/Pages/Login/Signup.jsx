import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const {createUser,updateUserPhoto,reset}= useContext(AuthContext)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
      createUser(data.email,data.password)
      .then(result=>{
        updateUserPhoto(data.name,data.photo)
        .then(()=>{})
        .catch(error => console.log(error))
      })
      .catch(error =>{
        console.log(error);
        reset()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/home')
      })
    };
  
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" {...register("name",{ required: true })} 
                
                placeholder="email" className="input input-bordered" />
               {errors.name && <span className="text-red-900">name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="name" {...register("photo",{ required: true })} 
                
                placeholder="photo" className="input input-bordered" />
               {errors.name && <span className="text-red-900">photo is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" {...register("email")} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" {...register("password")} className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input
                  className="btn btn-primary"
                  
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
            <p><small>Already have an account? <Link to="/login" > Create acc</Link></small></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;