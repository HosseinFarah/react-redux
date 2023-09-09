export const initialValues = {
  subject: "",
  product: "",
  price: 0,
  category: "",
  tags: [],
  count: 0,
};

export const ACTION_TYPE = {
  inputChange: "inputChange",
  addTag: "addTag",
  removeTag: "removeTag",
  inc: "inc",
  dec: "dec",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.inputChange:
      return {...state, [action.data.name]:action.data.value};
    case ACTION_TYPE.addTag:
      return {...state,tags:[...state.tags,action.data+" "]};
    case ACTION_TYPE.removeTag:
      return {...state,tags:state.tags.filter((tag)=> tag !== action.data)};
    case ACTION_TYPE.inc:
      return {...state, count:state.count+1};
    case ACTION_TYPE.dec:
      return {...state, count:state.count-1};

    default:
      return state;
  }
};
