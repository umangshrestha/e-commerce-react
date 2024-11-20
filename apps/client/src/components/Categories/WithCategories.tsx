import { useQuery } from '@apollo/client';
import { ComponentType } from 'react';
import { CATEGORIES_MOCK_DATA } from './Categories.mock';
import { LIST_CATEGORIES_QUERY } from './Categories.queries';
import { WithCategoriesProps } from './Categories.types';

export function withCategoriesQuery<P extends WithCategoriesProps>(
  WrappedComponent: ComponentType<P>,
) {
  return (props: Omit<P, keyof WithCategoriesProps>) => {
    const { data } = useQuery(LIST_CATEGORIES_QUERY);
    return (
      <WrappedComponent
        {...(props as P)}
        categories={data?.categories || CATEGORIES_MOCK_DATA}
      />
    );
  };
}
