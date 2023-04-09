import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './style.css'
const SearchBar = ({value,changeInput}) => (
    <div className='searchbar-wrap'>
      <SearchIcon className="searchbar-icon"/>
      
      <input 
      type="text" 
      placeholder='Search by Restuarant name ...' 
      value={value} 
      onChange={changeInput}
       />

     
    </div>
  
  )

export default SearchBar