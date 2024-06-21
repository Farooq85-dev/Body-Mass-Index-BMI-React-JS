import MuiButton from "./Button";
import { TextField } from "@mui/material";
import { FaWeightScale } from "react-icons/fa6";
import { GiBodyHeight } from "react-icons/gi";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { FaFillDrip } from "react-icons/fa6";
import toast from "react-hot-toast";

function BmiComp() {
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");

  const getValues = () => {
    if (
      heightFeet.trim() === "" ||
      heightInches.trim() === "" ||
      weight.trim() === ""
    ) {
      toast.error("Please fill all field😒😒😒");
    } else {
      const heightIntoInches =
        parseFloat(heightFeet) * 12 + parseFloat(heightInches);
      const heightIntoMeters = heightIntoInches * 0.0254;
      const userBmi =
        parseFloat(weight) / (heightIntoMeters * heightIntoMeters);
      const roundedBmi = userBmi.toFixed(0);

      if (roundedBmi < 18.5) {
        toast.error(`Your BMI is ${roundedBmi}. You are Underweight.`);
      } else if (roundedBmi >= 18.5 && roundedBmi < 24.9) {
        toast.success(
          `Your BMI is ${roundedBmi}. Congratulation! you are Normal.`
        );
      } else if (roundedBmi >= 25 && roundedBmi < 29.9) {
        toast.error(
          `Your BMI is ${roundedBmi}. Congratulation! you are over Weight.`
        );
      } else if (roundedBmi >= 30) {
        toast.error(`Your BMI is ${roundedBmi}. You are Overweight.`);
      }
    }
  };

  return (
    <div className="main flex  justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-5 m-5 bg-gray-300 shadow-md rounded-xl p-5">
        <div className="flex flex-row justify-center items-center">
          <FaFillDrip className="mr-2 w-5 h-5 text-red-700" />
          <h1 className="font-bold">Fill all the fields carefully.</h1>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Height In Feets"
            type="number"
            onChange={(e) => setHeightFeet(e.target.value)}
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <GiBodyHeight className="w-10 h-10 text-black" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Height In Inches"
            type="number"
            onChange={(e) => setHeightInches(e.target.value)}
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <GiBodyHeight className="w-10 h-10 text-black" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Weight In Kg"
            type="number"
            variant="filled"
            onChange={(e) => setWeight(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaWeightScale className="w-10 h-10 text-black" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <MuiButton
            click={getValues}
            icon="generate"
            innerTxt="GENERATE BMI"
          />
        </div>
      </div>
    </div>
  );
}

export default BmiComp;
