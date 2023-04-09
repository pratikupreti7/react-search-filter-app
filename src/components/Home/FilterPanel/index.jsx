import React from 'react'
import FilterListToggle from '../../common/FilterListToggle'
import { categoryList,ratingList } from '../../../constants'
import './styles.css'
import CheckboxProton from '../../common/CheckboxProton'
import SliderProton from '../../common/SliderProton'

const FilterPanel = ({selectedCategory,selectToggle,selectRating,selectedRating,cusines,changeChecked,changedPrice,selectedPrice}) => {
  return (
    <div>
      {/* Category filter */}
    <div className="input-group">

    <p className="label">Category</p>
    <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle}/>
    </div>
      {/* cusine filter */}
    

      <div className='input-group'>
      <p className='label'>Cusines</p>
      {cusines.map((cusine) => (
        <CheckboxProton
          key={cusine.id}
          cusine={cusine}
          changeChecked={changeChecked}
        />
      ))}
    </div>

      {/* price range */}
      <div className='input-group'>
      <p className="label-range">Price Range</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice}/>
      </div>

      {/* star rating  */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle options={ratingList} value={selectedRating} selectToggle={selectRating}/>
      </div>
    </div>
  )
}

export default FilterPanel