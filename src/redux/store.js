import {configureStore} from '@reduxjs/toolkit'
import getprodect from './reducers'

const store  = configureStore({reducer:{getprodect}})

export default store 