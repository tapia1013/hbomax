import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
    </MainLayout>
  )
}