import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='login-user'>
        {/* login screen top */}
        <div className='login-user__top'>
          <div className='login-user__logo' />
          <span className='login-user__title'>
            Who Is Watching?
          </span>
        </div>

        {/* login screen form */}
        <div className='login-user__form'></div>
      </div>
    </div>
  )
}