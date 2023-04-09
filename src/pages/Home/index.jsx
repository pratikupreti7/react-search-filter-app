
import React, { useState } from 'react'
// Importing all Home components
import FilterPanel from '../../components/Home/FilterPanel'
import SearchBar from '../../components/Home/Searchbar'
import List from '../../components/Home/List'
import EmptyView from '../../components/common/EmptyView'
import './styles.css'
import { dataList } from '../../constants';
import { useEffect } from 'react'
const Home = () => {
    const [selectedCategory,setselectedCategory]=useState(null)
    const [selectedRating,setselectedRating]=useState(null)
     const [selectedPrice, setSelectedPrice] = useState([0,5000])
     const [inputSearch, setInputSearch] = useState("")
    const [resultFound,setResultFound]=useState(false)
     const [list, setList] = useState(dataList)
    const [cusines, setCusines] = useState(
        [{
            id:1,
            checked:false,
            label:"American"
        },
        {
            id:2,
            checked:false,
            label:"Chinese"
           
            
        },
        {
            id:3,
            checked:false,
            label:"Italian"
        }]
    )
    const hanndleSelectCategory=(event,value)=>
    
    !value?null:setselectedCategory(value)

    const handleSelectRating=(event,value)=>
    
    !value?null:setselectedRating(value)

    const handleChangeChecked=(id)=>{
        const cusineStateList=cusines
        const changeCheckedCusines=cusineStateList.map(item=>item.id===id?{
            ...item,checked:!item.checked
        }:item)

        setCusines(changeCheckedCusines)
    }
    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
      }

    
    
  useEffect(() => {
    const applyFilters = () => {
        let updatedList = dataList;
    
        // Rating Filter
        if (selectedRating) {
          updatedList = updatedList.filter(
            (item) => parseInt(item.rating) === parseInt(selectedRating)
          );
        }
    
        // Category Filter
        if (selectedCategory) {
          updatedList = updatedList.filter(
            (item) => item.category === selectedCategory
          );
        }
    
        // Cuisine Filter
        const cusinesChecked = cusines
          .filter((item) => item.checked)
          .map((item) => item.label.toLowerCase());
    
        if (cusinesChecked.length) {
          updatedList = updatedList.filter((item) =>
            cusinesChecked.includes(item.cuisine)
          );
        }
    
        // Search Filter
        if (inputSearch) {
          updatedList = updatedList.filter(
            (item) =>
              item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
              -1
          );
        }
    
        // Price Filter
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];
    
        updatedList = updatedList.filter(
          (item) => item.price >= minPrice && item.price <= maxPrice
        );
    
        setList(updatedList);
    
        !updatedList.length ? setResultFound(false) : setResultFound(true);
      }
    applyFilters();
  }, [selectedRating,selectedCategory,cusines,selectedPrice,inputSearch]);

  return (
    <div className='home'>
        {/* Searchbar */}
        <SearchBar value={inputSearch} changeInput={e=>setInputSearch(e.target.value)}/>
        <div className="filter-list-wrap">
            <div className="filter-wrap">
                {/* Sidepanel */}
                <FilterPanel 
                selectToggle={hanndleSelectCategory} 
                selectedCategory={selectedCategory}
                selectRating={handleSelectRating}
                selectedRating={selectedRating}
                cusines={cusines}
                changeChecked={handleChangeChecked}
                selectedPrice={selectedPrice}
                changedPrice={handleChangePrice}
                />
            </div>
                
            <div className="list-wrap">

                {/* List compnent */}
                {resultFound ? <List list={list} /> : <EmptyView />}
            </div>
        </div>
    </div>
  )
}

export default Home