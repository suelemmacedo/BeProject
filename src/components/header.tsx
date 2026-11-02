import styled from 'styled-components';
import logo from '../assets/Header.png';

const HeaderStyle = styled.header`
  width: 100%;
  height: 76px;
  background: #ffffff;
  box-shadow: 0 2px 8px #00000015;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 110px;
  height: 60px;
  display: block;
  object-fit: contain;

  @media (max-width: 767px) {
    width: 90px;
    height: 50px;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <HeaderContent>
        <Logo src={ logo } alt="Logo BeProject" />
      </HeaderContent>
    </HeaderStyle>
  );
}

export default Header;
