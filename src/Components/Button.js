import styled from 'styled-components';


export const ButtonContainer = styled.button `
  text-tranform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 3px solid var(--lightBlue);
  border-color: ${props => (props.cart ? "var(--mainYellow)":"var(--lightBlue)")};
  
  color: ${props => (props.cart ? "var(--mainYellow)":"var(--lightBlue)")};
  border-radius: 10px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? "var(--mainYellow)":"var(--lightBlue)")};
    color: white;
  }  
  &:focus {
    outline: none;
  }
`