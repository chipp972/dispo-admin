// @flow
import test from 'tape';
import {
  filterOutById,
  convertToMap,
  addToState,
  removeFromState
} from '../api.helper';

test('filterOutById on arrays', (t) => {
  const obj = { _id: 'test' };
  const objList = [
    { _id: 'test' },
    { _id: 'notdeleted1' },
    { _id: 'notdeleted2' }
  ];
  const newList = filterOutById(obj)(objList);
  t.deepEqual(newList, [{ _id: 'notdeleted1' }, { _id: 'notdeleted2' }]);
  t.end();
});

test('filterOutById on object', (t) => {
  const obj = { _id: 'test' };
  const objState = {
    test: { _id: 'test' },
    notdeleted1: { _id: 'notdeleted1' },
    notdeleted2: { _id: 'notdeleted2' }
  };
  const newList = filterOutById(obj)(objState);
  t.deepEqual(newList, {
    notdeleted1: { _id: 'notdeleted1' },
    notdeleted2: { _id: 'notdeleted2' }
  });
  t.end();
});

test('convertToMap', (t) => {
  const arr = [{ _id: 'test1', prop1: 'prop1' }, { _id: 'test2' }];
  const res = convertToMap(arr);
  t.deepEqual(res, {
    test1: { _id: 'test1', prop1: 'prop1' },
    test2: { _id: 'test2' }
  });
  t.end();
});

test('addToState', (t) => {
  const obj = { _id: 'test1' };
  const modelName = 'company';
  const state = {
    company: { list: [], byId: {} },
    companytype: { list: [], byId: {} },
    user: { list: [], byId: {} },
  };
  const newState = addToState(obj, modelName, state);
  t.deepEqual(newState, {
    company: {
      list: [{ _id: 'test1' }],
      byId: { test1: { _id: 'test1' } }
    },
    companytype: { list: [], byId: {} },
    user: { list: [], byId: {} },
  });
  t.end();
});

test('removeFromState', (t) => {
  const obj = { _id: 'test1' };
  const modelName = 'company';
  const state = {
    company: {
      list: [{ _id: 'test1' }],
      byId: { test1: { _id: 'test1' } }
    },
    companytype: { list: [], byId: {} },
    user: { list: [], byId: {} },
  };
  const newState = removeFromState(obj, modelName, state);
  t.deepEqual(newState, {
    company: { list: [], byId: {} },
    companytype: { list: [], byId: {} },
    user: { list: [], byId: {} },
  });
  t.end();
});
