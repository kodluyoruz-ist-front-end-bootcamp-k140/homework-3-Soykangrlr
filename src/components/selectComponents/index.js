import Index from "../index";
import IndexCls from "../indexCls";
import { useState } from "react";
import { useAppContext } from "../../context/context";
//Component Select  Buttonları oluşturuldu
//Contextden gelene State Göre  Arka Plan Değitiridi
function IndexSelect() {
  const [activeComponents, setActiveComponents] = useState("fn");
  const { state } = useAppContext();
  return (
    <div className={` ${state.style.background} colordiv`}  >
      <div className="select-cm-btn">
        <button
          type="button"
          className={
            activeComponents === "cls"
              ? "btn btn-outline-info active"
              : "btn btn-outline-info"
          }
          onClick={() => setActiveComponents("cls")}
        >
          ComponetCls
        </button>
        <button
          type="button"
          className={
            activeComponents === "fn"
              ? "btn btn-outline-info active"
              : "btn btn-outline-info"
          }
          onClick={() => setActiveComponents("fn")}
        >
          ComponentsFn
        </button>
      </div>

      {activeComponents === "fn" ?
        <Index />
        :
        // Class Componente Gelen State Göre color props göderildi
        <IndexCls color={state.title === "Dark Mode" ? "white" : "black"} />}

    </div>
  );
}
export default IndexSelect;
