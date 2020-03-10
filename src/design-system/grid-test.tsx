import * as React from 'react';
import { GridTestGenerated } from './grid-test.generated';

export const GridTest = React.memo(props => {
  return <GridTestGenerated {...props} />;
});
