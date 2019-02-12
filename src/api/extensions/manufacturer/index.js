import {apiStatus} from '../../../lib/util';
import {Router} from 'express';

module.exports = ({config, db}) => {
  let manuApi = Router();

  manuApi.get('/manufacturers', (req, res) => {
    let result = {
      manufacturers: [
        {id: 1, name: 'Test'},
        {id: 2, name: 'Test 2'}
      ]
    };
    return apiStatus(res, result)
  })

  return manuApi
};
