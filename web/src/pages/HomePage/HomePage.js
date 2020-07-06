import { useState } from 'react'
import NavLayout from 'src/layouts/NavLayout'
import PhotoCell from 'src/components/PhotoCell'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/web'

const HomePage = () => {
  const [query, setQuery] = useState('')
  const [keyword, setKeyword] = useState(null)

  const onSubmit = () => {
    setKeyword(query)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  return (
    <NavLayout>
      <div className="text-center">
        <h1>PHOTO ANALYSIS</h1>
        <div className="w-full max-w-xs text-center">
          <Form className="text-center" onSubmit={onSubmit}>
            <TextField
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              errorClassName="input error"
              onChange={(e) => handleChange(e)}
            />
            <FieldError name="name" className="error-message" />
            <Submit className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Search
            </Submit>
          </Form>
        </div>
        <PhotoCell keyword={keyword} />
      </div>
    </NavLayout>
  )
}

export default HomePage
