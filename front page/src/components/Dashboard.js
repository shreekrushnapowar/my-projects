import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Customer from './Customer';
import Login from './Login';
import NewRegister from './NewRegister';
import Recharge from './Recharge';
import Rechargedet from './Rechargedet';

const Dashboard = () => {
    const [component, setcomponent] = useState(0);
   const updatecomponent = (variable)=>{
    setcomponent(variable);
   }
    return (
        <div>
            <div className="container-fluid mb-5">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
           <h2 >DASHBOARD</h2>
                <li className="nav-item">
                  <button className="btn btn-outline-success mx-2 my-2 w-100 px-4 rounded-pill" onClick={()=>{updatecomponent(1)}}><i className="fa fa-user-plus me-3">  New Register</i>
                  
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-success mx-2 my-2 w-100 px-4 rounded-pill" to="#" onClick={()=>{updatecomponent(2)}}><i className="fa fa-sign-in me-3"> Recharge</i>
                    
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-success mx-2 my-2 w-100 px-4 rounded-pill" to="#" onClick={()=>{updatecomponent(3)}}><i className="fa fa-users me-3">  Customers</i>
                  
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-success mx-2 my-2 w-100 px-4 rounded-pill" to="#" onClick={()=>{updatecomponent(4)}}><i className="fa fa-sign-in me-3">   Daily Recharge </i>
                  </button>
                </li>
               
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
            </div>
               
              </div>
            </div>   
                {component===1?<NewRegister/>:component===2?<Recharge/>:component===3?<Customer/>:component===4?<Rechargedet/>:<Login/> }         
          </main>
        </div>
      </div>
        </div>
    );
}

export default Dashboard;