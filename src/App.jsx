import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CardComponent from './components/CardComponent'

export default function App() {
  return (
    <div>
      <Header />
      <CardComponent />
      <Footer />
    </div>
  )
}
