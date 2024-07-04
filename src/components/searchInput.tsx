import styled from "styled-components";

const TitleSearch = styled.div`
  width: 139px;
  height: 28px;
  Top: 104px;
  left: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  h4{
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    text-align: left;
    color: #1c1c1c;

  }
`;

function SearchInput() {
  return (
    <>
      <TitleSearch>
        <h4>Funcionários</h4>
      </TitleSearch>
      <input type="text" placeholder="Pesquisar" />
      <img src="" alt="" />
    </>
  );
}

export default SearchInput;
