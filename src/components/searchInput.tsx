import { useEffect, useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/Default.png';

const Container = styled.section`
  width: calc(100% - 32px);
  max-width: 1200px;
  margin: 24px auto 0;
  padding: 24px;
  box-sizing: border-box;
  background: #f5f5f8;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.3;
  color: #25213b;
`;

const Subtitle = styled.p`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #777487;
`;

const InputWrapper = styled.form`
  position: relative;
  width: 100%;
  height: 46px;

  @media (min-width: 768px) {
    max-width: 320px;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 48px 0 16px;
    border: 1px solid #dedce8;
    border-radius: 8px;
    background: #fff;
    color: #25213b;
    font-size: 15px;
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: #6656c8;
      box-shadow: 0 0 0 3px #6656c820;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  button img {
    width: 22px;
    height: 22px;
  }
`;

interface SearchInputProps {
  title: string;
  value: string;
  onSearch: (value: string) => void;
}

function SearchInput({
  title,
  value,
  onSearch,
}: SearchInputProps) {
  const [inputText, setInputText] = useState(value);

  useEffect(() => {
    setInputText(value);
  }, [value]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(inputText.trim());
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  return (
    <Container>
      <Heading>
        <Title>{ title }</Title>
        <Subtitle>
          Consulte os colaboradores cadastrados
        </Subtitle>
      </Heading>

      <InputWrapper onSubmit={ handleSubmit }>
        <input
          type="search"
          aria-label="Pesquisar funcionários"
          placeholder="Pesquisar funcionário..."
          value={ inputText }
          onChange={ handleInputChange }
        />

        <button type="submit" aria-label="Buscar">
          <img src={ searchIcon } alt="" />
        </button>
      </InputWrapper>
    </Container>
  );
}

export default SearchInput;
