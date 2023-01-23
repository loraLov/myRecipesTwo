function RecipesResult({name, calories, picture, ingredients}){
    return(
     <div>
        <div className="container">
           <h1 className='name'>{name}</h1>
           <img src={picture} alt="food"/>
           <h2 className="info">{calories.toFixed()} calories</h2>
           <ul>
              {ingredients.map ((ingredient, id)=>(
                <li className="info" key={id}>{ingredient}</li>
              ))}
           </ul>
         </div>
    </div>
    );
}
export default RecipesResult;