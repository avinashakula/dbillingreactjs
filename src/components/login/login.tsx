import { useState } from "react";
import PageHeader from "@utilities/components/pageHeader";

function Login() {
    const [data, setData] = useState({});
    const updateData = (e:any) => {
        setData({...data, [e.target.name]:e.target.value})
    }
    const login = () => {
        console.log(data);
    }
    
  return (
    <>    
      <div className="container mt-5 ">
        <PageHeader title={"D-Billing Login"} textAlign={"text-center"} />
        <div className="col-md-6 offset-md-3 bg-white p-3 rounded-4 shadow-sm">
            <form onSubmit={e=>{e.preventDefault();login}}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" onKeyUp={updateData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" name="password" className="form-control" onKeyUp={updateData} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary btn-md" onClick={login}>Login</button>
                </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
