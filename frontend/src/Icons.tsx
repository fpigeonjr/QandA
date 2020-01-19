import React from 'react';
import userSvg from './user.svg';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const UserIcon = () => (
  <img
    src={userSvg}
    alt="user"
    width="12px"
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
  />
);
