import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Row from 'common/components/flex/Row';
import delayEffect from 'common/utils/animation/delay-effect';

const NavigationLink = styled(NavLink)`
  transition: 0.3s ease all;

  display: block;
  color: white;
  padding: 0rem 4rem;
  margin: 1.5rem 0;
  font-size: 1.25rem;
  font-weight: 300;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;

  ${delayEffect(0.2)};
  &:hover {
    color: white;
  }
`;

const CenteredRow = styled(Row)`
  width: 100%;
`;

const borderStyle = { borderRight: '1px solid rgba(255, 255, 255, 0.2)' };

export default ({
  username,
  sandboxCount,
  likeCount,
}: {
  username: string,
  sandboxCount: number,
  likeCount: number,
}) => (
  <CenteredRow alignItems="center" justifyContent="center">
    <NavigationLink
      to={`/u/${username}`}
      activeStyle={{
        color: 'white',
      }}
      exact
      style={borderStyle}
    >
      SHOWCASE
    </NavigationLink>
    <NavigationLink
      to={`/u/${username}/sandboxes`}
      activeStyle={{
        color: 'white',
      }}
      style={borderStyle}
    >
      SANDBOXES ({sandboxCount})
    </NavigationLink>
    <NavigationLink
      to={`/u/${username}/likes`}
      activeStyle={{
        color: 'white',
      }}
    >
      LIKES ({likeCount})
    </NavigationLink>
  </CenteredRow>
);
