import * as React from 'react';
import { BrowserContentGenerated } from './browser-content.generated';

export const BrowserContent = React.memo(props => {
  return <BrowserContentGenerated {...props} />;
});
