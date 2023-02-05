import { useState } from 'react'

const Form =({getData}) => {
  const [weight ,setWeight] = useState("")
  const [height ,setHeight] = useState("");
  const [alert, setalert] = useState(false)

  const onSubmit=(e)=>{

    if(isNaN(weight) || isNaN(height)){

      // console.log("Invalid input");
      setalert(true);
    }
    else{

      getData(weight,height)
      setalert(false);
      // console.log(weight);
      // console.log(height);
    }

    e.preventDefault();
    
  };
 

  return (
    <> 
    <div className="container">
      <form onSubmit={onSubmit}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong">
            <div className="card-body text-center">
  
              <h3 className="mb-4">Bmi Calculator</h3>
  
              <div className="form-outline mb-4">
                <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} className="form-control form-control-md" />
                <label className="form-label"> Weight(kg):</label>
              </div>
  
              <div className="form-outline mb-4">
                <input type="text"  value={height}  onChange={(e)=>setHeight(e.target.value)} className="form-control form-control-md" />
                <label className="form-label">Height(m) :</label>
              </div>
              <button className="btn btn-primary btn-md btn-block" type="submit">Get BMI</button>
            </div>
          {alert && <div className="alert alert-danger" role="alert">Invalid input</div> }

          </div>
        </div>
      </div>
      </form>

    </div>
  </>
  )
}

export default Form