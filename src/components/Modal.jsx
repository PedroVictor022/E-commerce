import styled from "styled-components";

const ModalContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

  .modal-p-absolute {
   /* 
      Tentar desfocar o fundo do Modal
      Colocar botao de fechar o modal
      Botoes bem destacados
    */

    width: 350px;
    height: 230px;

    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    background-color: #ececec;

    border-radius: 5px;
    box-shadow:0px 0px 4px #8b8b8b;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`;

export const Modal = () => {
  return (
    <ModalContainer>
      <div className="modal-p-absolute">
        <form>
          <input type="text" placeholder="Nome completo" />
          <input type="text" placeholder="CPF" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Numero | Complemento" />
        </form>
        <button>Finalizar compra</button>
      </div>
    </ModalContainer>
  );
};
