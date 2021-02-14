import { useState } from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { NextPage } from 'next';

import { Button, Container, PageTitle } from 'components';

const Contact: NextPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isSubmitEnabled = email.length > 2 && message.length > 2;

  return (
    <Container>
      <Head>
        <title>Contact | Nidratech</title>
      </Head>

      <PageTitle title="Got a project? We want to hear about it" />

      <form action="https://formspree.io/contact@nidratech.com" method="POST">
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <EmailInput
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="message">Message</FormLabel>
          <MessageInput
            id="message"
            name="message"
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormGroup>

        <input type="hidden" name="_next" value="https://www.nidratech.com/success" />

        <Button isDisabled={!isSubmitEnabled} type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

const formControl = css`
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: ${({ theme }) => lighten(0.3, theme.colors.brand)};
    outline: 0;
    box-shadow: 0 0 0 0.1rem ${({ theme }) => lighten(0.3, theme.colors.brand)};
  }
`;
const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.small};
`;
const MessageInput = styled.textarea`
  ${formControl}
  height: auto;
`;
const EmailInput = styled.input`
  ${formControl}
`;
const FormGroup = styled.div`
  display: grid;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export default Contact;
