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
                <table style={{ width: "100%", height: "100%" }}>
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
                    width: "100%",
                    height: "90vh",
                    boxShadow: `inset 0 0 0 2000px rgba( 0, 0, 0, 0.75)`,
                  }}
                >
                  <div className="row">
                    <div className="col-sm-12" style={{ textAlign: "center" }}>
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
                            rows={4}
                          ></textarea>
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
      <section>adjhaksjdhakashdk</section>
    </>
  );
};

export default Inicio;
