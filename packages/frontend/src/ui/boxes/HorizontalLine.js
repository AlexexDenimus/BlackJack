import styled from 'styled-components';
import { Box } from 'rebass';
import { space, color, layout } from 'styled-system';

export const HorizontalLine = styled(Box)`
${space}
${color}
${layout}
height: 4px
`;

HorizontalLine.defaultProps = {
  bg: '#e3871d',
  width: '100px',
};
