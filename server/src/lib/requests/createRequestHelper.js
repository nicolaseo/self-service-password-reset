import Promise from 'bluebird';
import request from 'superagent';

export default function(url, payload) {
  return new Promise((resolve, reject) => {
    request('POST', url)
      .send(payload)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res.body);
      });
  });
}