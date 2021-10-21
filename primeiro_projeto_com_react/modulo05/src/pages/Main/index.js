import React from 'react';

import { Container, Form, SubmitButton } from './styles';

import { FaGithubAlt, FaPlus } from 'react-icons/fa'

function Main() {
  return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={() => {}}>
          <input 
            type="text"
            placeholder='Adicionar repositório'
          />

          <SubmitButton>
            <FaPlus color='#FFF' size={14} />
          </SubmitButton>
        </Form>
      </Container>
      // <Title>
      //   Hello World
      // </Title>
      // <Title error={false}>
      //   Main
      //   <small>menor</small>
      // </Title>
    );
}

export default Main;