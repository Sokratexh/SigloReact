import './App.css';



function Main() {
  return (
    <div className="main">
      <main className="login">
     <form className="form">
       <div className="font-title">Login</div>
       <div className="font-subtitle">Please provide your credentials below</div>
       <div className="">
         <label className="desc">Email </label>
         <input className="input-container" type="text" name="email" required />
       </div>
       <div className="">
         <label className="desc">Password </label>
         <input className="input-container" type="password" name="pass" required />
       </div>
       <div className="descEsp">
         <button onClick="" input className="button-container" type="submit" >Login</button>
       </div>
     </form>
      </main>
    </div>
  );
}

export default Main;
