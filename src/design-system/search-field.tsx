import * as React from 'react';
import { SearchFieldGenerated } from './search-field.generated';

export const SearchField = React.memo(props => {
  return <SearchFieldGenerated {...props} />;
});
