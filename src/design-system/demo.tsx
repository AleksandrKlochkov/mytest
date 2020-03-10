import * as React from 'react';
import { DemoGenerated } from './demo.generated';

export const Demo = React.memo(props => {
  return <DemoGenerated {...props} />;
});
