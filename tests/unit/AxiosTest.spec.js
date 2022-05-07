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

  it('api success', async () => {
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

  it('api fail', async () => {
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