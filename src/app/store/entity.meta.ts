import { EntityMetadataMap } from '@ngrx/data';

const entity_metadata: EntityMetadataMap = {
  account: {},
  product: {}
};

const plural_names = {};

export const entity_config = {
  entityMetadata: entity_metadata,
  pluralNames: plural_names
};
