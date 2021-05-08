import React, {useState} from 'react';
import './PricingTheme.css';

function PricingTheme() {
const [toggle, setToggle] = useState(false);

function handleClick(e){
  setToggle(function(preValue){
    return !preValue;
  });
  console.log(toggle);
}

  return (
    <div className="container center">

      <div className="container switchToggle">
        <div className="container">
          <div className="row">
            <div className="col">
              <label className="" htmlFor="flexSwitchCheckDefault">Anually</label>
            </div>
            <div className="col">
              <div className="form-check form-switch">
                <input onChange={handleClick} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name="toggleCheckBox" value={toggle}/>
              </div>
            </div>
            <div className="col">
              <label className="" htmlFor="flexSwitchCheckDefault">Monthly</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-sm">
          <div className="container card l shadow">
            <h5>Basic</h5>
            <h1 id="priceL">{toggle === true ? ("$199,99") : ("$19,99")}</h1>
            <div className="x">
              <p>500 GB Storage</p>
            </div>
            <div className="x">
              <p>2 Users Allowed</p>
            </div>
            <div className="x">
              <p>Send up to 3 GB</p>
            </div>
            <div className="d-grid">
              <button type="button" className="btn btn-outline-primary">Buy</button>
            </div>

          </div>
        </div>
        <div className="col-sm">
          <div className="container card m shadow">
            <h5>Professional</h5>
            <h1 id="priceM">$24.99</h1>
            <div className="x">
              <p>1 TB Storage</p>
            </div>
            <div className="x">
              <p>5 Users Allowed</p>
            </div>
            <div className="x">
              <p>Send up to 10 GB</p>
            </div>
            <div className="d-grid">
              <button type="button" className="btn btn-outline-light">Buy</button>
            </div>
          </div>

        </div>
        <div className="col-sm">
          <div className="container card l shadow">
            <h5>Master</h5>
            <h1 id="priceR">$39.99</h1>
            <div className="x">
              <p>2 TB Storage</p>
            </div>
            <div className="x">
              <p>10 Users Allowed</p>
            </div>
            <div className="x">
              <p>Send up to 20 GB</p>
            </div>
            <div className="d-grid">
              <button type="button" className="btn btn-outline-primary">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTheme;
