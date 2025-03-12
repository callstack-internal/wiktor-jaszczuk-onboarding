declare namespace React {
  import React from 'react';

  export type PropsWithRequiredChildren<P = unknown> = P & {
    children: ReactNode;
  };
  export type PropsWithNoChildren<P = unknown> = Omit<
    React.PropsWithChildren<P>,
    'children'
  >;
}
