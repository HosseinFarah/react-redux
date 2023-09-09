import { useDispatch, useSelector } from "react-redux";
import { removeTags,updateTags,categoryChange,inc,dec,priceChange,productChange,subjectChange } from "./store";
import { useEffect, useRef, useState } from "react";

export const Redux = () => {
  const tagRef = useRef();
  const dispatch = useDispatch();
  const selectore = useSelector((state)=>state.myForm)
  const [newSubject,setNewSubject]=useState("");
  const [newProduct,setNewProduct]=useState("");
  const [newPrice,setNewPrice]=useState("");
  const [newCategory,setNewCategory]=useState("");
  const setSubject =()=>{
    dispatch(subjectChange({data:newSubject}))
    dispatch(productChange({data:newProduct}))
    dispatch(priceChange({data:newPrice}))
    dispatch(categoryChange({data:newCategory}))
  }

  const addTags =()=>{
    const tags = tagRef.current.value.split(",");
    return tags.map((tag)=>{
      if (tag === "") return false
      else return (dispatch(updateTags({data:tag})),tagRef.current.value="")
    })
  }

  useEffect(()=>{
    setSubject()
  },[newSubject,newProduct,newPrice,newCategory])

  console.log(selectore);

  return (
    <div>
      <form className="form-control">
        Aihe: <input type="text" name="subject" placeholder="Subject" onChange={(e)=>setNewSubject(e.target.value)}/>
        Tuote: <input type="text" name="product" placeholder="Product" onChange={(e)=>{setNewProduct(e.target.value)}}/>
        Hinta :<input type="number" name="price" placeholder="Price" onChange={(e)=>{setNewPrice(e.target.value)}}/>
        Ryhmä:{" "}
        <select name="category" onChange={(e)=>{setNewCategory(e.target.value)}}>
          <option></option>
          <option value="Laukut">Laukut</option>
          <option value="Kengät">Kengät</option>
          <option value="Takit">Takit</option>
          <option value="Housut">Housut</option>
          <option value="tossut">tossut</option>
        </select>
        <br />
        <br />
        <textarea
        ref={tagRef}
          cols={25}
          rows={5}
          placeholder="Lisää tägiä ja errota ne ,"
        ></textarea>
        <br />
        <button type="button" onClick={addTags}>Valitse Tägiä</button>
        <br/><br/>
        {selectore.tags.map((tag,index)=>{
          return <button key={index} type="button" onClick={()=>dispatch(removeTags({data:tag}))}>{tag}</button>
        })}
        <br/>
        <br/>
        <button type="button" onClick={()=>dispatch(inc())}>Lisää +</button>
        <button type="button" onClick={()=>dispatch(dec())}>Vähennä -</button>
        <h5>{selectore.counter}</h5>
      </form>
      Result:{selectore.subject},{selectore.product},{selectore.price},{selectore.category},{selectore.counter},{selectore.tags}
    </div>
  );
};


