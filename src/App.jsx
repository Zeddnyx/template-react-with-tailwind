import StepByStep from "./Components/StepByStep/StepByStep";
import Faq from "./Components/FAQ/Faq";
import DropDown from "./Components/DropDown/DropDown";
import Nav from "./Components/NavBar/Nav";

function App() {
  return (
    <div className="px-10 my-5 grid grid-cols-1 gap-8">
      <StepByStep />
      <Faq />
      <DropDown />
      <Nav />
    </div>
  );
}

export default App;
