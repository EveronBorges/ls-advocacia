const LGPDCookie = ({ showCookie = "none", Aceitar }) => {
  return (
    <div className="cookies-container" style={{ display: `${showCookie}` }}>
      <div className="cookies-content">
        Servimos cookies. Se você acha que está tudo bem, basta clicar em
        "Aceitar".
        <button
          className="btn"
          style={{ backgroundColor: "crimson", color: "white" }}
          onClick={Aceitar}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default LGPDCookie;
