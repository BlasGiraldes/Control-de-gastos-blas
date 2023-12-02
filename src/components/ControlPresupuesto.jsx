import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  gastos,
  presupuesto,
  setGastos,
  setPresupuesto,
  setisValidPresupuesto
}) => {
  const [porcentaje, setPorcentaje] = useState(20);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

    // Calcular el procentaje gastado

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);

    setGastado(totalGastado);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500);
  }, [gastos]);

  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')

    if (resultado) {
      setGastos([])
      setPresupuesto([])
      setisValidPresupuesto(false)
    }else{

    }
  }

  const formatearCantidad = (cantidad) => {
    var formatter = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "ARS",
    });
    return formatter.format(cantidad);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <p>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: "#3B82F6",
          })}
          value={porcentaje}
          text={`${porcentaje} % Gastado`}
        />
      </p>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear APP
        </button>
        <p>
          <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible:</span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado:</span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
