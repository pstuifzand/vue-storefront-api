import {apiStatus} from '../../../lib/util';
import {Router} from 'express';

module.exports = ({config, db}) => {
  let manuApi = Router();

  manuApi.get('/manufacturers', (req, res) => {
    let result = {
      manufacturers: [
        {id: 1, name: 'Test 1', slug: 'test-1'},
        {id: 2, name: 'Test 2', slug: 'test-2'},
        {id: 3, name: 'Test 3', slug: 'test-3'},
        {id: 4, name: 'Test 4', slug: 'test-4'}
      ]
    };
    return apiStatus(res, result)
  })

  return manuApi
};
