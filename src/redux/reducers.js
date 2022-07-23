import {createSlice} from '@reduxjs/toolkit'



const initialState = {prodects:[]}

const getprodect = createSlice({
    name:'prodect',
    initialState,
    reducers:{
        giveprodect:(state,action)=>{
            state.prodects.push(action.payload)
        },
        Deleteprodect:(state,action)=>{
            state.prodects = state.prodects.filter(val=>val.id !== action.payload)
        }
    }
})

export const {giveprodect,Deleteprodect} =  getprodect.actions

export default getprodect.reducer