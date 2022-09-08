import styled from "styled-components";

const ModalContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
  .modal-p-absolute {
    width: 350px;
    height: 200px;

    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: red;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
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
