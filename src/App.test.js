import React from 'react';
import * as enzyme from 'enzyme';
import { fetchFunc } from './Api';
import App from './App';
//import "babel-polyfill";
// import { fetchData } from './api';
// import { act } from 'react-dom/test-utils';


describe("Api", function () {

  beforeEach(function() {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, Id: '123'}));
  });

  it("ack", function () {

    fetchFunc('read.php', 'null').then(response => {
      
      expect(response.Id).toBe(1); //< always pass / gets ignored?
    });

  });
});

