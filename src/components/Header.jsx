import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          setGastos={setGastos}
          gastos={gastos}
          setPresupuesto={setPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
