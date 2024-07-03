import styled from "styled-components";

const HeaderStyle = styled.header`
  img {
    width: Fixed(44px);
    height: 35px;
    top: 12.08px;
    left: 32px;
    gap: 10px;
    opacity: 0px;
  }

  display: flex;
  align-items: center;
  justify-content: start;
  height: 60px;
  background: #ffffff;
  padding: 0 32px;
  box-shadow: 0px 2px 8px 0px #00000033;
`;

function Header() {
  return (
    <HeaderStyle>
      <img src="src/assets/Header.png" alt="Logo" />
    </HeaderStyle>
  );
}

export default Header;
