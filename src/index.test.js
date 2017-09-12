import { expect } from 'chai';
import createMiddleware from './';


const next = function () { };
const json = data => data;

describe('middleware', () => {
  it('should return a function', () => {
    const mid = createMiddleware();
    expect(typeof mid).to.equal('function');
  });

  it('should camelize body', () => {
    const mid = createMiddleware();
    const req = {
      body: {
        'a_prop': 'some_value',
        'b-prop': 'some_value',
      },
    };
    const res = { json };
    mid(req, res, next);
    expect(req.body.aProp).to.equal('some_value');
    expect(req.body.bProp).to.equal('some_value');
  });

  it('should camelize query', () => {
    const mid = createMiddleware();
    const req = {
      query: {
        'a_prop': 'some_value',
        'b-prop': 'some_value',
      },
    };
    const res = { json };
    mid(req, res, next);
    expect(req.query.aProp).to.equal('some_value');
    expect(req.query.bProp).to.equal('some_value');
  });

  it('should decamelize response', () => {
    const mid = createMiddleware();
    const res = { json };
    const data = {
      aProp: 'some_value',
    };
    mid({}, res, next);
    expect(res.json(data)['a_prop']).to.equal('some_value');
  });
});