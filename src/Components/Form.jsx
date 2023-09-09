import { useReducer, useRef } from "react";
import { ACTION_TYPE, formReducer, initialValues } from "./formReducer";

export const Form = () => {
  const tagRef = useRef();
  const [state, dispatch] = useReducer(formReducer, initialValues);
  const chkForm = (e) => {
    dispatch({
      type: ACTION_TYPE.inputChange,
      data: { name: e.target.name, value: e.target.value },
    });
  };
  const addTag = () => {
    const tags = tagRef.current.value.split(",");
    tags.map((tag) => {
      if (tag === "") return false;
      else return dispatch({ type: ACTION_TYPE.addTag, data: tag });
    });
    tagRef.current.value = "";
  };
  console.log(state);
  return (
    <div className="container my-3">
      <h6>Form With useReducer - useRef and make seperate Tags whith "," at the textarea box!</h6>
      <form className="form-control">
        Aihe:{" "}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={chkForm}
        />
        Tuote:{" "}
        <input
          type="text"
          name="product"
          placeholder="Product"
          onChange={chkForm}
        />
        Hinta :
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={chkForm}
        />
        Ryhmä:{" "}
        <select name="category" onChange={chkForm}>
          <option></option>
          <option>Laukut</option>
          <option>Kengät</option>
          <option>Takit</option>
          <option>Housut</option>
          <option>tossut</option>
        </select>
        <br />
        <br />
        <textarea
          ref={tagRef}
          cols={25}
          rows={5}
          placeholder="Lisää tägiä ja errota ne , kautta"
        ></textarea>
        <br />
        <button onClick={addTag} type="button">
          Valitse Tägiä
        </button>
        <h6>Jos klikkaat painiketta, se poistuu!</h6>
        {state.tags.map((tag, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() =>
                dispatch({ type: ACTION_TYPE.removeTag, data: tag })
              }
            >
              {tag}
            </button>
          );
        })}
        <br />
        <br />
        <button
          type="button"
          onClick={() => dispatch({ type: ACTION_TYPE.inc })}
        >
          Lisää +
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: ACTION_TYPE.dec })}
        >
          Vähennä -
        </button>
        <h5>{state.count}</h5>
      </form>
      <h5>Result : {state.subject},{state.product},{state.price},{state.category},
      {state.tags},{state.count}</h5>
    </div>
  );
};
