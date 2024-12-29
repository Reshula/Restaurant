// import { useDispatch, useSelector } from "react-redux";
// import { filterCategory, getSelectedCategory } from "../../redux/DishesSlice";
// 
// const Filter = ({category}) =>{
    // const dispatch = useDispatch()
    // const selectedCategory = useSelector(getSelectedCategory)
    // return(
        // <div>
           /* <p onClick={() =>{dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelecteted categoryButton' : 'categoryButton' } >{category} </p> */
/*             */
        /* </div> */
    // )
// }
// export default Filter;

import { useDispatch, useSelector } from 'react-redux';
import { filterCategory } from '../../redux/DishesSlice';// импортируем экшен

const Filter = ({ category }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.dishes.selectedCategory); // Получаем выбранную категорию

  const handleCategoryChange = () => {
    dispatch(filterCategory(category)); // Отправляем экшен для изменения категории
  };

  return (
    <button
      className={`filter-button ${selectedCategory === category ? 'selected' : ''}`} // Классы для активной категории
      onClick={handleCategoryChange}
    >
      {category}
    </button>
  );
};

export default Filter;

  