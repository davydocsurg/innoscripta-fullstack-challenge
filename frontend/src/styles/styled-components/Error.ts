import styled from 'styled-components';

import Tooltip from '../../components/Tooltip';
import { errorColor } from '../variables';

export const Error = styled(Tooltip)`
  height: 20px;
  
  svg {
    margin: 0;
  }

  span {
    background: ${errorColor};
    color: #fff;

    &::before {
      border-color: ${errorColor} transparent;
    }
  }
`;
