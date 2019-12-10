import styled from 'styled-components';
import { Box } from 'rebass';

export const ElevationBox = styled(Box)`
  margin-left: 8px;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;
