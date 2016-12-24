/**
 * Элемент модели данных
 */
import {Metadata} from './metadata';

export const METADATA_ARRAY: Metadata[] = [
  {id: 1, code: 'METADATA_1', name: 'Metadata 1', parentId: null},
  {id: 2, code: 'METADATA_2', name: 'Metadata 2', parentId: null},
  {id: 3, code: 'METADATA_3', name: 'Metadata 3', parentId: 1},
  {id: 4, code: 'METADATA_4', name: 'Metadata 4', parentId: 2},
  {id: 5, code: 'METADATA_5', name: 'Metadata 5', parentId: 3},
];
