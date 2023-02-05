function BmiScore({bmiNo,bmiType,changeWeight}) {

  console.log(changeWeight);

  // console.log(props);
  // const {bmiNo,bmiName}=props;
  return (


    <div className="text-center rounded shadow p-4">
      <div>Your Bmi Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-3 alert fs-1 alert-primary col-sm-4">{bmiNo}</div>

      </div>

    <div className="fs-3 fw-bold text primary">{bmiType}</div>

    {changeWeight.type === "positive" && (<div className="fs-4 text-danger">"You need to lose <span className="fw-bold">{changeWeight.weight} kg"</span></div>
    )}
    {changeWeight.type === "negative" && (<div className="fs-4 text-warning">"You need to gain <span className="fw-bold">{changeWeight.weight} kg"</span></div>
    )}
    {changeWeight.type === "normal" && (<div className="fs-4 text-success">"Your weight is Normal"</div>
    )}

    </div>
    // <div>
      
    //   BmiScore :{bmiNo} <br/>
    //   Bmi Type : {bmiName}
    // </div>
  )
}

export default BmiScore