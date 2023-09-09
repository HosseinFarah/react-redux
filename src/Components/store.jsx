import { configureStore, createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:"myForm",
    initialState:{
        subject:"subject",
        product:"product",
        category:"",
        price:0,
        counter:0,
        tags:[]
    },
    reducers:{
        subjectChange:(state,action)=>{state.subject=action.payload.data},
        productChange:(state,action)=>{state.product=action.payload.data},
        priceChange:(state,action)=>{state.price=action.payload.data},
        categoryChange:(state,action)=>{state.category=action.payload.data},
        inc:(state,action)=>{state.counter= state.counter+1},
        dec:(state,action)=>{state.counter= state.counter-1},
        updateTags:(state,action)=>{state.tags=[...state.tags,action.payload.data]},
        removeTags :(state,action)=>{state.tags= state.tags.filter((tag)=>tag !== action.payload.data)}
    }
})

export const {removeTags,updateTags,categoryChange,dec,inc,priceChange,productChange,subjectChange}= formSlice.actions

export const store = configureStore({reducer:{
    myForm:formSlice.reducer,
}})
