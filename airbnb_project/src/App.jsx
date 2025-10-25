import { useState } from 'react'
import './App.css' 
import {Navbar} from "./components/Navbar"
import {Hero} from "./components/Hero"
import {Card} from "./components/Card"
export function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <div className="card_container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}


