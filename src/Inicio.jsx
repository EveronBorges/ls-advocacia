import bg from "./images/top-ls-advocacia.jpg";
import logo from "./images/logo-ls-advocacia.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Inicio = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: `inset 0 0 0 2000px rgba( 220, 20, 60, 0.5)`,
        }}
      >
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6">
                <table style={{ width: "100%", height: "100vh" }}>
                  <tbody>
                    <tr>
                      <td>
                        <h2
                          style={{
                            textAlign: "center",
                            textShadow: "2px 2px 3px #262510",
                            padding: "30px",
                          }}
                        >
                          <b>
                            Você está enfrentando dificuldades para pagar o seu
                            financiamento? Dê o primeiro passo para regularizar
                            suas finanças. Envie uma mensagem AGORA MESMO!
                          </b>
                        </h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-4">
                <div
                  style={{
                    width: "500px",
                    height: "106vh",
                    boxShadow: `inset 0 0 0 2000px rgba( 0, 0, 0, 1)`,
                    position: "absolute",
                    top: "-10px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="row">
                    <div className="col-sm-12" style={{ textAlign: "center" }}>
                      <br />
                      <img
                        src={logo}
                        alt="logo"
                        style={{
                          maxWidth: "90%",
                          height: "120px",
                          padding: "10px",
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-12">
                      <h6
                        style={{
                          color: "white",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        FORMULÁRIO DE CONTATO
                      </h6>
                      <div className="form-contato">
                        <div className="form-group">
                          <label for="txNome" style={{ width: "100%" }}>
                            Nome*
                          </label>
                          <input
                            id="txNome"
                            name="txNome"
                            type="text"
                            className="form-control new-border"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="txWhats" style={{ width: "100%" }}>
                            WhatsApp*
                          </label>
                          <input
                            id="txWhats"
                            name="txWhats"
                            type="text"
                            className="form-control"
                            placeholder={`(00) 00000-0000`}
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="txEmail" style={{ width: "100%" }}>
                            E-mail
                          </label>
                          <input
                            id="txEmail"
                            name="txEmail"
                            type="email"
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="txObservacao" style={{ width: "100%" }}>
                            Descreva brevemente seu problema
                          </label>
                          <textarea
                            id="txObservacao"
                            name="txObservacao"
                            className="form-control"
                            rows={5}
                          ></textarea>
                        </div>
                        <br />
                        <div
                          className="form-group"
                          style={{ width: "100%", textAlign: "center" }}
                        >
                          <button
                            id="btnSolicitar"
                            name="btnSolicitar"
                            className="btn"
                            style={{
                              width: "250px",
                              backgroundColor: "transparent",
                              borderColor: "crimson",
                              color: "white",
                            }}
                          >
                            <b>SOLICITAR CONTATO</b>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ height: "250px", backgroundColor: "gold" }}>
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <p style={{ width: "100%", height: "235px", display: "table" }}>
              <label
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  width: "100%",
                  height: "200px",
                  display: "table-cell",
                  fontSize:"x-large",
                  fontWeight:"bold"
                }}
              >
                Há 11 anos atuamos na resolução de conflitos judiciais e extrajudiciais, de forma transparente. Atendimento personalizado de pessoas físicas e jurídicas, em todo o estado do Rio Grande do Sul
              </label>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
