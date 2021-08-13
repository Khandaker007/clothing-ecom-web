import { DIRECTORY_ITEM_DATA } from "../../datas/directory.data";

const INITIAL_STATE = { 
  sections: DIRECTORY_ITEM_DATA
};
  
  const directoryReducer = ( state = INITIAL_STATE, action ) => {
      switch(action.type){
          default:
              return state;
      }
  }

  export default directoryReducer;