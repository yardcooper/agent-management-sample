import React from 'react'
import { Space, Input } from 'antd'

const { Search } = Input

interface SearchFormProps {
  handleOnSearch: Function
}

const SearchForm: React.FC<SearchFormProps> = ({ handleOnSearch }) => {
  const onSearch = (e: any) => {
    handleOnSearch(e)
  }

  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="Input Areas of Practice"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Space>
    </div>
  )
}
export default SearchForm
