import './App.css'

function App() {

  return (
    <div className="logo-box">
        <img src="./src/images/twitter.png" alt="twitter" className="logo" />
        <h2>Sign In to X</h2>
        <button className='google'>
          <img src="./src/images/google.png" alt="google" />
          Sign in with Google
        </button>
        <button className='apple'>
          <img src="./src/images/apple.png" alt="apple" />
          Sign in with Apple
        </button>
        <hr></hr>
        <span>or</span>
        <form>
          <input type="text" placeholder="Phone, email, or username" />
          <button>Next</button>
        </form>
        <button className='forget'>Forget Password?</button>
        <p>
          Don't Have an account?<a> Sign up</a>
        </p>
    </div>
  )
}

export default App
