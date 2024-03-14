import Filter from './Filter'
const AllCategories = (category) => {
    return(<div >
            <h1>What kind of food do you like?</h1>
            {['SEAFOOD','SALADS','ITALIAN', 'APPETIZERS', 'ALL'].map(
                category=> <Filter key={category} category={category}/>
            )}
            
          
           
        </div>
    )
}
export default AllCategories;