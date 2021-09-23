import Button from "antd/lib/button";
import styled from "styled-components";

const StyledButton = styled(Button)(
  ({ secondary }) => `
color: ${secondary ? "#494A4E" : "#FFFFFF"};
padding: .5rem 1rem;
height: 40px;
text-align: center;
background-color: ${secondary ? "#FFFFFF" : "#2F5082"}; 
border-radius: 8px;
font-size: 16px;
font-weight: 600;
line-height: 16px;
:focus {
  color: ${!secondary && "#FFFFFF"};
  background-color: ${!secondary && "#2F5082"}; 
}
:hover {
  color: ${!secondary && "#FFFFFF"};
  background-color: ${!secondary && "#2F5082"};
}
`
);

export default StyledButton;
