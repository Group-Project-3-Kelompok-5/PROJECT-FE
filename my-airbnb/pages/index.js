import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboard from './Dashboard'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import StayList from './StayList'

export default function Home() {
  return (
    <>
      <Dashboard/>
      <StayList/>
    </>
  )
}
