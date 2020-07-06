import { useState } from 'react'
import NavLayout from 'src/layouts/NavLayout'
import PhotoCell from 'src/components/PhotoCell'

const HomePage = () => {
  const [query, setQuery] = useState('')

  return (
    <NavLayout>
      <div className="text-center">
        <h1>PHOTO ANALYSIS</h1>

        <PhotoCell keyword={'mountain'} />
      </div>
    </NavLayout>
  )
}

export default HomePage
