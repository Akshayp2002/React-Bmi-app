
function BmiList({bmiRange,bmi}) {

  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col-4">Type</div>
          <div className="col-4">BMI</div>
          <div className="col-4">WEIGHT</div>
        </div>

      </li>
      <li className={bmi <18.5 ? "border border-danger border-3 list-group-item":"list-group-item"}>
        <div className="row">
          <div className="col-4">Underweight</div>
          <div className="col-4">18.5</div>
          <div className="col-4">{bmiRange.underweight.low} kg</div>
        </div>

      </li>
      <li className={18.5 < bmi && bmi<24.9?"border border-danger border-3 list-group-item":"list-group-item"}>
        <div className="row">
          <div className="col-4">Normal</div>
          <div className="col-4">18.5-24.9</div>
          <div className="col-4">{bmiRange.normal.low +" kg - "+bmiRange.normal.high+" kg"}</div>
        </div>

      </li>
      <li className={25 < bmi && bmi < 29.9 ?"border border-danger border-3 list-group-item":"list-group-item"}>
        <div className="row">
          <div className="col-4">Over Weight</div>
          <div className="col-4">24.5-29.9</div>
          <div className="col-4">{bmiRange.overweight.low +" kg - "+bmiRange.overweight.high+" kg"}</div>
        </div>

      </li>
      <li className={30 < bmi && bmi < 34.9 ? "border border-danger border-3 list-group-item":"list-group-item"}>
        <div className="row">
          <div className="col-4">Obesity Class I</div>
          <div className="col-4">29.9-34.9</div>
          <div className="col-4">{bmiRange.obesityOne.low +" kg - "+bmiRange.obesityOne.high+" kg"}</div>
        </div>

      </li><li className={35 < bmi && bmi < 39.9 ? "border border-danger border-3 list-group-item":"list-group-item"}>
        <div className="row">
          <div className="col-4">Obesity Class II</div>
          <div className="col-4">34.9-39.9</div>
          <div className="col-4">{bmiRange.obesityTwo.low +" kg - "+bmiRange.obesityTwo.high+" kg"}</div>
        </div>

      </li><li className={bmi > 40 ?"border border-danger border-3 list-group-item":"list-group-item"}>
        <div className="row">
          <div className="col-4">Obesity Class III</div>
          <div className="col-4">40</div>
          <div className="col-4">{bmiRange.obesityThree.high+" kg"}</div>
        </div>

      </li>
      </ul>

    </div>
  )
}

export default BmiList