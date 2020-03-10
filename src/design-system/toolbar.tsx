import * as React from 'react';
import { ToolbarGenerated } from './toolbar.generated';

export const Toolbar = React.memo(props => {
  return <ToolbarGenerated {...props} />;
});
