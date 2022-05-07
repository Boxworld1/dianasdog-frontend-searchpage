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

  it('api success with code 200', async () => {
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

  it('api success with code 201', async () => {
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

  it('api fail with code 400', async () => {
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