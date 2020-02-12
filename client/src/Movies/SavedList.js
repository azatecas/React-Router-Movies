import React from 'react';
import { BrowserRouter as Router, useHistory} from 'react-router-dom';


const SavedList = props => {

   const history = useHistory();

  // console.log('this is history',history);

  const routeToShop = event => {    
    setTimeout(() => {
      history.push("/");
    }, 100);
    
  };

  return (

    <Router>
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        
        <div 
        className="home-button" 
         onClick={routeToShop}
         >Home
         </div>

      </div>
    </Router>
  )
};

export default SavedList;
