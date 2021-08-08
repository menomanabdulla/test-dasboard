import { createContext } from 'react';
import { observable, makeObservable  } from 'mobx';
const axios = require('axios');

const URL01 = "https://rpback.com/api/games/test_categories?project_id=2";
const URL02 = "https://rpback.com/api/games/test_minutes?project_id=2";
const URL03 = "https://rpback.com/api/games/test_blocks?project_id=2";

const requestOne = axios.get(URL01);
const requestTwo = axios.get(URL02);
const requestThree = axios.get(URL03);

class Store {
    @observable dataForParent

    constructor() {
        makeObservable(this,{
            dataForParent: observable
        });
    }

    loadParent = (() => {
        let that = this;
        axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
            const result: any[] = [];
            responses.map(item => {
                result.push(item.data)

            })
            that.dataForParent = result;
            
          })).catch(errors => {
            // react on errors.
            console.error("Error getting parent info:" + errors.toString());
          })
    })();

    
}

export const MyStore =  createContext(new Store());