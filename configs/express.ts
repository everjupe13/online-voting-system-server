import cors from 'cors'
import express from 'express'


const config = [
  cors(),
  express.json(),
  express.urlencoded({ extended: true })
]


export default config
