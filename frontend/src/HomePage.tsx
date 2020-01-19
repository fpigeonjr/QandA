import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { PrimaryButton } from './Styles';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from './QuestionsData';

export const HomePage = () => (
  <div
    css={css`
      margin: 50px auto 20px auto;
      padding: 30px 20px;
      max-width: 600px;
    `}
  >
    <div
      css={css`
        font-size: 15px;
        font-weight: bold;
        margin: 10px 0 5px;
        margin-align: center;
        text-transform: uppercase;
      `}
    >
      <h2>Unanswered Questions</h2>
      <PrimaryButton>Ask a question</PrimaryButton>
    </div>
    <QuestionList data={getUnansweredQuestions()} />
  </div>
);
