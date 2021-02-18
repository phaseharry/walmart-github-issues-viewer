import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingProgress = styled(CircularProgress)`
  z-index: 2;
  position: fixed;
  top: 40%;
  left: 50%;
`;

const Loading = () => {
  return (
    <div>
      <LoadingProgress />
    </div>
  );
}

export default Loading;