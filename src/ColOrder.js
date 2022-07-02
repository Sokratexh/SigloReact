import './App.css';

function ColOrder() {
  return (
    <div className="">
    <div  className="d-flex">
    <div className="nav-search">
          <form className="d-flex " role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
               <button className="btn btn-hv btn-outline-success" type="submit">Bt</button>
          </form> 
    </div>
    <div className="d-flex nav-right">
      <div className="font-st1">Order Notes</div>
     <button className="btn btn-hv btn-outline-success font-st2" type="submit">New Order Note</button>
    </div>       
    </div>
    <div className="table-inf">
               <ul className="table-items">
            <li>DD/MM/YYYY</li>
            <li>Value</li>
            </ul>
          </div>
          <div className="table-inf">
           <ul className="table-items">
            <li>DD/MM/YYYY</li>
            <li>Value</li>
            </ul>
          </div>      

    </div>
    );
  }

  export default ColOrder;
