import moxios from 'moxios';
import axios from 'axios';
import Request from "@/utils/communication";
describe('api', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('api successed with code 200', async () => {
    moxios.stubRequest('/search', {
      status: 200,
      response: {}
    });

    await Request.query(
      () => {},
      () => {},
      "红豆词",
    );
  });

  it('api successed with code 201', async () => {
    moxios.stubRequest('/search', {
      status: 201,
      response: {}
    });

    await Request.query(
      () => {},
      () => {},
      "红豆词",
    );
  });

  it('api responsed code 202', async () => {
    moxios.stubRequest('/search', {
      status: 202,
      response: {}
    });

    await Request.query(
      () => {},
      () => {},
      "红豆词",
    );
  });

  it('api failed with code 400', async () => {
    moxios.stubRequest('/search', {
      status: 400,
      response: {}
    });

    await Request.query(
      () => {},
      () => {},
      "红豆词",
    );
  });

});