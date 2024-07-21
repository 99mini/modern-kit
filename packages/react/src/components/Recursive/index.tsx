import { isArray } from '@modern-kit/utils';
import React, { PropsWithChildren } from 'react';

interface RecursiveProps<T extends Record<PropertyKey, any>> {
  data: T;
  childrenKey: string;
  Container: ({ children }: PropsWithChildren) => JSX.Element;
  renderItem: (item: T) => React.ReactNode;
}

const Recursive = <T extends Record<PropertyKey, any>>({
  data,
  childrenKey,
  Container,
  renderItem,
}: RecursiveProps<T>) => {
  const children = data[childrenKey];

  return (
    <Container>
      {renderItem(data)}
      {isArray<T>(children) &&
        children.map((item: T, idx: number) => (
          <Recursive
            key={idx}
            data={item as T}
            childrenKey={childrenKey}
            Container={Container}
            renderItem={renderItem}
          />
        ))}
    </Container>
  );
};
