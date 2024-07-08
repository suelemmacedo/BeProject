import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  margin: 0 auto;
  background: #F0F0F0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #1C1C1C;
  align-self: flex-start;
  line-height: 28,13px;
  width: 139px;
  height: 28px;
  left: 32px;
  top:104px;
  
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 287px;
  height: 48px;
  margin-top: 16px;
  align-self: flex-start;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 300px;
    margin-right: 16px;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 32px 0 16px;
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    box-sizing: border-box;
  }
  
  img {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;


function SearchInput({ title }: { title: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [inputText, setInputText] = useState<string>(search);

  return (
    <Container>
      <Title>{title}</Title>
      <InputWrapper>
        <input
          type="text"
          placeholder="Pesquisar"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              setSearchParams({ search: inputText });
            }
          }}
        />
        <img
          src="src/assets/Default.png"
          alt="Icon"
          onClick={() => setSearchParams({ search: inputText })}
        />
      </InputWrapper>
    </Container>
  );
}

export default SearchInput;
