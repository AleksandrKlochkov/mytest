import * as React from 'react';
import { TabBarGenerated } from './tab-bar.generated';

export const TabBar = React.memo(props => {
  return <TabBarGenerated {...props} />;
});
