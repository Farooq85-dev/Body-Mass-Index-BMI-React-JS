import { TbBodyScan } from "react-icons/tb";
import MuiButton from "./Button";
import "../index.scss";

function WelcomeComp() {
  return (
    <div className="main flex h-screen justify-center items-center">
      <div
        className="flex flex-col justify-center items-center gap-5 m-5 bg-gray-300 shadow-md
       rounded-xl px-10 py-5"
      >
        <div>
          <h1 className="font-bold">Your BMI</h1>
        </div>
        <div>
          <TbBodyScan className="w-40 h-40" />
        </div>
        <div>
          <MuiButton redirect="toBmi" icon="calcu" innerTxt="START" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeComp;
