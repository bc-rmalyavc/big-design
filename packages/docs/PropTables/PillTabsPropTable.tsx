import React from 'react';

import { NextLink, Prop, PropTable, PropTableWrapper } from '../components';

const pillTabsPropTable: Prop[] = [
  {
    name: 'activePills',
    types: 'string[]',
    description: 'The currently active pill ids as an array of strings.',
  },
  {
    description: (
      <>
        See <NextLink href="#pill-tabs-items-prop-table">below</NextLink> for usage.
      </>
    ),
    name: 'items',
    required: true,
    types: <NextLink href="#pill-tabs-items-prop-table">PillTabItem[]</NextLink>,
  },
  {
    name: 'onPillClick',
    types: '(itemId: string) => void',
    description: 'Function that will get called when a pill tab is clicked.',
    required: true,
  },
];

export const PillTabsPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable title="PillTabs" propList={pillTabsPropTable} {...props} />
);

const tabItemProps: Prop[] = [
  {
    name: 'title',
    types: 'string',
    description: 'The text inside the Pill Tab Item.',
    required: true,
  },
  {
    description: 'A unique identifier for the pill.',
    name: 'id',
    required: true,
    types: 'string',
  },
];

export const PillTabItemPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable title="PillTabs[PillTabItem]" propList={tabItemProps} {...props} />
);
