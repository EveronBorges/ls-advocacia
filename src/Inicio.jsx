import bg from "./images/top-ls-advocacia.jpg";
import logo from "./images/logo-ls-advocacia.png";

const Inicio = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: `inset 0 0 0 2000px rgba( 220, 20, 60, 0.5)`,
      }}
    >
      <img src={logo} alt="" />
    </div>
  );
};

export default Inicio;
