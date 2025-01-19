import { Link } from "react-router";

const Login=()=>{
    const handleLoginSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.username.value;
        const password=form.password.value;
        const loginValue={
            name,
            password
        }
        console.log(loginValue)

    }
    return(
        <div className=' mt-10 lg:ml-96 md:ml-64 md:h-60    md:w-80 md:p-3 shadow-xl container'>
        <form onSubmit={handleLoginSubmit} >
              <input type="text" name='username' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Name'></input>
              <br />
              <input type="password" name="password" required className='w-full border border-black p-1 mt-5' placeholder='Enter your password'  ></input>
              <br />
        <button className="  p-2  w-full mt-8 bg-blue-300"><input type="submit"  value="Login"/></button>
        </form>
        <p>Do not have any account? please <Link to='/register' className='text-sky-700 hover:underline'>Register</Link> </p>
      </div>
    )
}
export default Login;