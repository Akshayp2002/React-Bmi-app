import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import BmiScore from "./components/BmiScore";
import BmiList from "./components/BmiList";
import Test from "./components/test";
import { useState } from "react";

function App() {
  const [changeWeight, setchangeWeight] = useState({weight:"",type:""})
  const [bmi, setbmi] = useState("0.0");
  const [bmiType, setbmiType] = useState("Over Weight")
  const [bmiRange, setbmiRange] = useState({
    underweight :{low:""},
    normal     : {low :"",high:""},
    overweight : {low :"",high:""},
    obesityOne : {low :"",high:""},
    obesityTwo : {low :"",high:""},
    obesityThree : {high:""},
  });

  const onFormSubmit = (w, h) => {
    console.log(w, h);

    let b = calBmi(w,h);
    setbmi(b);

    setbmiType(WeightType(b));


    const range = {
      underweight :{low:calWeight(18.5,h)},
    normal : {low :calWeight(18.5,h),high:calWeight(24.9,h)},
    overweight : {low :calWeight(25,h),high:calWeight(29.9,h)},
    obesityOne : {low :calWeight(30,h),high:calWeight(34.9,h)},
    obesityTwo : {low :calWeight(35,h),high:calWeight(39.9,h)},
    obesityThree : {high:calWeight(40,h)},
    };
    setbmiRange(range);

    setchangeWeight(weightChange(b,w,range));
    
  };

  const calBmi = (w,h)=>(w / (h * h)).toFixed(2);

  const calWeight = (b,h)=>(b * h * h).toFixed(2);


  const weightChange = (b,w,range)=>{

    let changeObj ;
    if(b > 24.9){
      changeObj ={weight : (w - range.normal.high).toFixed(2),
      type :"positive"
    };
    return changeObj;
    } else if (b < 18.5){
      changeObj ={weight: (range.normal.low - w).toFixed(2),
      type: "negative",
    }
    return changeObj;

  }else {
    changeObj ={weight:0,type :"normal"
  };
    return changeObj;
  };
}


  const WeightType = (bmi)=>{
    if(bmi<18.5){
      return "Under weight"
    }else if(18.5<bmi && bmi <24.9){
      return "Normal"
    }else if(25<bmi && bmi <29.9){
      return "Over Weight"
    }else if(30 < bmi && bmi <34.9){
      return "Obesity Class I"
    }else if (35 < bmi && bmi <39.9){ 
      return "Obesity Class II"
    }else if(bmi>40){ 
      return "Obesity Class III"
    }

  }


  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <Form getData={onFormSubmit} />
        </div>
        <div className="row">
        <div className="col-12 col-md-6  mt-3">
          <BmiScore bmiNo={bmi} bmiType={bmiType} changeWeight = {changeWeight} />
        </div>
        <div className="col-12 col-md-6 mt-3 my-5">
          <BmiList bmiRange={bmiRange} bmi={bmi}/>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;



   {/* <button onClick={()=>setbmi(bmi + 1)}>+</button>
          <button onClick={()=>setbmi(bmi - 1)}>-</button> */}