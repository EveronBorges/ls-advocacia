import React, { useState, useEffect } from "react";
import bg from "./images/top-ls-advocacia.jpg";
import logo from "./images/logo-ls-advocacia.png";
import "bootstrap/dist/css/bootstrap.min.css";
import LGPDCookie from "./cookie";
import { SendMail } from "./services";
import Swal from "sweetalert2";
import Button from "react-bootstrap-button-loader";

const Inicio = () => {
  const [showCookie, setShowCookie] = useState("none");
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  const width = window.innerWidth > 640 ? "30vw" : "100%";
  const height = window.innerWidth > 640 ? "106vh" : "100vh";

  const limparContato = () => {
    setNome("");
    setWhatsApp("");
    setEmail("");
    setDescricao("");
  };

  useEffect(() => {
    if (!localStorage.LSCookie) {
      setShowCookie("block");
    }
  }, []);

  const acceptCookie = () => {
    setShowCookie("none");
    localStorage.setItem("LSCookie", true);
  };

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
                    minWidth: `${width}`,
                    height: `${height}`,
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
                            value={nome}
                            onChange={(control) =>
                              setNome(control.target.value)
                            }
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
                            value={whatsapp}
                            onChange={(control) =>
                              setWhatsApp(control.target.value)
                            }
                          ></input>
                        </div>
                        <div className="form-group">
                          <label for="txEmail" style={{ width: "100%" }}>
                            E-mail*
                          </label>
                          <input
                            id="txEmail"
                            name="txEmail"
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(control) =>
                              setEmail(control.target.value)
                            }
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
                            value={descricao}
                            onChange={(control) =>
                              setDescricao(control.target.value)
                            }
                          ></textarea>
                        </div>
                        <br />
                        <div
                          className="form-group"
                          style={{ width: "100%", textAlign: "center" }}
                        >
                          <Button
                            id={`btnSolicitar`}
                            loading={buttonLoading}
                            style={{
                              width: "250px",
                              backgroundColor: "transparent",
                              borderColor: "crimson",
                              color: "white",
                            }}
                            onClick={() => {
                              if (nome === "") {
                                Swal.fire({
                                  icon: "error",
                                  title: "Solicitação de contato",
                                  text: "O campo de nome é obrigatório",
                                });
                                return;
                              } else if (whatsapp === "") {
                                Swal.fire({
                                  icon: "error",
                                  title: "Solicitação de contato",
                                  text: "O campo de WhatsApp é obrigatório",
                                });
                                return;
                              } else if (email === "") {
                                Swal.fire({
                                  icon: "error",
                                  title: "Solicitação de contato",
                                  text: "O campo de e-mail é obrigatório",
                                });
                                return;
                              }

                              setButtonLoading(true);

                              SendMail({
                                nome,
                                whatsapp,
                                email,
                                descricao,
                              })
                                .then((retorno) => {
                                  console.log(retorno);

                                  Swal.fire({
                                    icon: "success",
                                    title: "Solicitação de contato",
                                    text: "Seu e-mail foi enviado com sucesso!",
                                  }).finally(() => {
                                    limparContato();
                                  });
                                })
                                .finally(() => {
                                  setButtonLoading(false);
                                });
                            }}
                          >
                            <b>SOLICITAR CONTATO</b>
                          </Button>
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
      <section style={{ backgroundColor: "#f7f2e9" }}>
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <p style={{ width: "100%", height: "280px", display: "table" }}>
              <label
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  width: "100%",
                  height: "200px",
                  display: "table-cell",
                  fontSize: "x-large",
                  fontFamily: "Barlow Semi Condensed",
                }}
              >
                <br />
                <h4>JUROS ABUSIVOS? Reduza a sua dívida! </h4>
                <br />A LS Advogados dispõe de ampla experiência em ações de
                revisão de contratos de financiamento de veículos.
                <br />
                Recupere a sua tranquilidade financeira e assegure a manutenção
                da posse do seu veículo.
              </label>
            </p>
            <div className="row">
              <div className="col-sm-12" style={{ textAlign: "center" }}>
                <button
                  className="btn btn-success"
                  style={{ height: "50px" }}
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send?phone=5554984181647",
                      "_blank"
                    );
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ verticalAlign: "bottom" }}
                  >
                    whatsapp
                  </span>
                  &nbsp;QUERO FALAR COM UM ADVOGADO
                </button>
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "gold" }}>
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <p
              style={{
                width: "100%",
                display: "table",
                paddingTop: "50px",
                paddingBottom: "50px",
              }}
            >
              <label
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  width: "100%",
                  display: "table-cell",
                  fontSize: "x-large",
                  fontFamily: "Barlow Semi Condensed",
                }}
              >
                Há 11 anos atuamos na resolução de conflitos judiciais e
                extrajudiciais, de forma transparente. Atendimento personalizado
                de pessoas físicas e jurídicas, em todo o estado do Rio Grande
                do Sul
              </label>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-8 offset-sm-2">
                <h4
                  style={{ color: "var(--bs-body-color)", paddingTop: "50px" }}
                >
                  SOBRE A EMPRESA
                </h4>
                <div style={{ paddingTop: "20px", paddingBottom: "50px" }}>
                  <p>
                    O Escritório De Luiz, Souza e Advogados Associados atua no
                    mercado desde 2010, com intuito de encurtar o caminho entre
                    as pessoas e a justiça, por meio de serviços de elevada
                    qualidade.
                  </p>
                  <p>
                    Contamos com uma equipe multidisciplinar de advogados e
                    profissionais das áreas de administração, contabilidade e
                    economia, com o objetivo de oferecer soluções completas
                    tanto para pessoas físicas, quanto para pessoas jurídicas.
                  </p>
                  <p>
                    Com ética e responsabilidade atendemos nossos clientes de
                    forma personalizada, pois acreditamos que criar um
                    relacionamento duradouro e de confiança é a premissa para
                    resolução de qualquer causa.
                  </p>
                  <p>
                    Se você procura aconselhamento jurídico ou representação em
                    uma ação judicial, conte com a LS Advogados. Há 11 anos o
                    seu direito é a nossa responsabilidade. Agende seu
                    atendimento agora mesmo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "var(--bs-body-color)", color: "white" }}
      >
        <br />
        <h6 style={{ width: "100%", textAlign: "center", fontWeight: "bold" }}>
          VANTAGENS DE ADQUIRIR OS SERVIÇOS DA LS
        </h6>
        <br />
        <div className="row">
          <div className="col-sm-5 offset-sm-2">
            <div className="form-group">
              <p style={{ width: "100%" }}>
                <span
                  class="material-icons"
                  style={{ color: "crimson", verticalAlign: "bottom" }}
                >
                  chevron_right
                </span>
                Reduzir taxas de juros em seus contratos
              </p>
              <p style={{ width: "100%" }}>
                <span
                  class="material-icons"
                  style={{ color: "crimson", verticalAlign: "bottom" }}
                >
                  chevron_right
                </span>
                Evitar ações de busca e apreensão de seu veículo
              </p>
              <p style={{ width: "100%" }}>
                <span
                  class="material-icons"
                  style={{ color: "crimson", verticalAlign: "bottom" }}
                >
                  chevron_right
                </span>
                Resolver inscrição indevida em SPC, SERASA e Cartório de
                Protestos
              </p>
              <p style={{ width: "100%" }}>
                <span
                  class="material-icons"
                  style={{ color: "crimson", verticalAlign: "bottom" }}
                >
                  chevron_right
                </span>
                Recorrer de auxílio doença negado
              </p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group">
              <p style={{ width: "100%" }}>
                <span
                  class="material-icons"
                  style={{ color: "crimson", verticalAlign: "bottom" }}
                >
                  chevron_right
                </span>
                Entrar com pedido de aposentadoria
              </p>
              <p style={{ width: "100%" }}>
                <span
                  class="material-icons"
                  style={{ color: "crimson", verticalAlign: "bottom" }}
                >
                  chevron_right
                </span>
                Revisar equívocos no recolhimento de produtos
              </p>
              <p style={{ width: "100%" }}>
                <span
                  class="material-icons"
                  style={{ color: "crimson", verticalAlign: "bottom" }}
                >
                  chevron_right
                </span>
                Registrar marcas e patentes
              </p>
              <p style={{ width: "100%" }}>
                <span
                  class="material-icons"
                  style={{ color: "crimson", verticalAlign: "bottom" }}
                >
                  chevron_right
                </span>
                Adequar sua empresa às normas ambientais
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12" style={{ textAlign: "center" }}>
            <button
              className="btn btn-success"
              style={{ height: "50px" }}
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send?phone=5554984181647",
                  "_blank"
                );
              }}
            >
              <span
                className="material-icons"
                style={{ verticalAlign: "bottom" }}
              >
                whatsapp
              </span>
              &nbsp;QUERO FALAR COM UM ADVOGADO
            </button>
          </div>
        </div>
        <br />
      </section>
      <section>
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <div className="row">
              <div className="col-sm-4">
                <br />
                <h6>
                  <b>Redes sociais</b>
                </h6>
                <div>
                  <img
                    src="https://img.icons8.com/small/16/000000/facebook-new.png"
                    alt=""
                  />
                  &nbsp;
                  <a
                    style={{ outline: "none", color: "var(--bs-body-color)" }}
                    href="https://www.facebook.com/lsadvog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.instagram.com/lsadvogados
                  </a>
                  <br />
                  <img
                    src="https://img.icons8.com/small/16/000000/instagram-new.png"
                    alt=""
                  />
                  <a
                    style={{ outline: "none", color: "var(--bs-body-color)" }}
                    href="https://www.instagram.com/lsadvogados/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @lsadvogados
                  </a>
                  <br />
                  <img
                    src="https://img.icons8.com/small/16/000000/secured-letter.png"
                    alt=""
                  />
                  &nbsp;agendacaxias@lsadvogados.com
                  <br />
                  <img
                    src="https://img.icons8.com/small/16/000000/whatsapp.png"
                    alt=""
                  />
                  &nbsp;(54) 98418-1647
                </div>
              </div>
              <div className="col-sm-4">
                <br />
                <div
                  style={{
                    borderLeft: "1px solid var(--bs-body-color)",
                    borderRight: "1px solid var(--bs-body-color)",
                    paddingLeft: "30px",
                  }}
                >
                  <h6>
                    <b>Endereços e Telefones</b>
                  </h6>
                  <b>Matriz Porto Alegre</b> <br />
                  Telefone: (51) 98497-0548
                  <br />
                  Praça Quinze de Novembro, 66
                  <br />
                  Centro Histórico, Porto Alegre - RS
                  <br />
                  CEP: 90020-061     
                  <br />
                  <br />
                </div>
              </div>
              <div className="col-sm-4">
                <br />
                <br />
                <b>Filial Caxias do Sul</b> <br />
                Telefone: (54) 3419-2030 <br />
                Av. Júlio de Castilhos, 2773
                <br />
                Centro, Caxias do Sul - RS
                <br />
                CEP: 95010-003
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <LGPDCookie showCookie={showCookie} Aceitar={acceptCookie} />
    </>
  );
};

export default Inicio;
