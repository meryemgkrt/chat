import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sdebar = () => {
  return (
    <div className='sidebar border-r flex flex-col border-slate-500 mt-6 ml-4 '>
        <SearchInput/>
        <div className="dividar px-3">
            <Conversations/>
            <LogoutButton/>
        </div>
    </div>
  )
}

export default Sdebar