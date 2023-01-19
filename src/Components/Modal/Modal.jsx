import styled from 'styled-components'

const StyledModal = styled.div`
  background-color: rgba(255, 174, 0, 0.87);
  color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 40px 2px rgba(255, 221, 0, 0.76);
  width: 30rem;
  height: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 25%;
  left: 35%;
  z-index: 500;
  box-sizing: border-box;
`;

const StyledBackDrop = styled.div`
  position:fixed;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.4);
  opacity:0.5;
  z-index:100
`;

const Modal = (props)=> {
    return(
        <>
            <StyledBackDrop />
            <StyledModal>
                {props.children}
            </StyledModal>
        </>

    )
}

export default Modal;