// @flow

import styled, { css } from 'styled-components';
import {
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign,
  color,
} from 'styled-system';

const textMixin = css`
  ${fontSize};
  ${fontStyle};
  ${fontWeight};
  ${fontFamily};
  ${lineHeight};
  ${textAlign};
  ${letterSpacing};
  ${space};
  ${color}
`;

const Text = styled.p`
  ${textMixin}
  margin: 0;
  padding: 0;
`;

const Header = styled(Text).attrs({
  fontWeight: 1,
})`
  font-family: 'kanyonregular', sans-serif;
`;

export const Header1 = styled(Header).attrs({
  as: 'h1',
  fontSize: 8,
})``;

export const Header2 = styled(Header).attrs({
  as: 'h2',
  fontSize: 7,
})``;
export const Header3 = styled(Header).attrs({
  as: 'h3',
  fontSize: 6,
})``;
export const Header4 = styled(Header).attrs({
  as: 'h4',
  fontSize: 4,
})``;
export const Header5 = styled(Header).attrs({
  as: 'h5',
  fontSize: 3,
})``;

export const Header6 = styled(Header).attrs({
  as: 'h6',
  fontSize: 2,
})``;

export const Body = styled(Text).attrs({
  fontWeight: 3,
})`
  font-family: 'ubuntumedium', sans-serif;
`;

Body.defaultProps = {
  fontSize: 5,
};

export const BodyBold = styled(Text).attrs({
  fontWeight: 1,
})`
  font-family: 'ubuntubold', sans-serif;
`;

BodyBold.defaultProps = {
  fontSize: 5,
};

export const BodyLight = styled(Text).attrs({
  fontWeight: 2,
})`
  font-family: 'ubuntulight', sans-serif;
`;

BodyLight.defaultProps = {
  fontSize: 5,
};

export const BodyItalic = styled(Text)`
  font-family: 'ubuntuitalic', sans-serif;
`;

BodyItalic.defaultProps = {
  fontSize: 3,
  fontWeight: 2,
};

export const Caption = styled(Text).attrs({
  fontSize: 0,
})`
  font-family: 'ubuntulight', sans-serif;
`;
