import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #3498db;
  border-radius: 6px;
  background-color: ${(props) => {
    console.log(props);
    return props?.$primary ? props.theme.colors.primary : "transparent";
  }};

  color: ${({ $primary, theme }) =>
    $primary ? theme.colors.textColor : "black"};

  &:hover {
    background-color: ${(props) => (props?.$primary ? "#9b59b6" : "f1c40f")};
  }
`;

// extend etme
export const StrongButton = styled(StyledButton)`
  border-width: 5px;
`;

export const CoolButton = styled(StyledButton)`
  background-image: linear-gradient(
    to right,
    #1d976c 0%,
    #93f9b9 51%,
    #1d976c 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0ms.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  text-decoration: none;
  width: 45%;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export const SubmitButton = styled(StrongButton).attrs({
  type: "submit",
})`
  font-size: 20px;
  color: red;
`;
