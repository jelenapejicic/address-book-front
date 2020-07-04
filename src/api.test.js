import React from 'react';
import * as enzyme from 'enzyme';
import { fetchFunc } from './Api';


describe("Api", function () {

    beforeEach(function() {
      window.fetch = jest.fn().mockImplementation(
          () => Promise.resolve({"records":[{"id":"1","name":"Jelena","last_name":"Pejicic","email":"jelenapejicic@gmail.com","image_url":"","telephone":"652157654"}]})
          );
    });
  
    it("api", async() => {
        fetchFunc('read.php', null).then(data => {
           return data.json();
        }).then(data => {
            expect.assertions(1);
            console.log(data.debug());
            expect(data.records[0].id).toBe(4);
        });
        // const a = fetchFunc('read.php', null);
        // expect.assertions(1);
        // console.log(a.debug());
        //expect(a.records[0].id).toBe(1);
        //expect(a.records.count).toBe(1);
        //expect(1).toBe(1);
    });
  });
  