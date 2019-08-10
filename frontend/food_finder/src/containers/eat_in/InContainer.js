import React, { Component } from 'react';
import Urls from '../../helpers/keys/Urls'
import RecipeList from '../../components/RecipeList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InRecipeContainer from './InRecipeContainer'

class InContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipiesList: [],
      selectedRecipe: []
    };
    this.findSelectedRecipe = this.findSelectedRecipe.bind(this);
  }

  componentDidMount() {
    const url = new Urls
    fetch(url.urlTest())
    .then(res => res.json())
    .then(recipies => this.setState({recipiesList: recipies.meals}))
    .catch(err => console.log(err));
  }

  findSelectedRecipe(id) {
    const url = new Urls
    fetch(url.getRecipeById(id))
    .then(res => res.json())
    .then(recipies => this.setState({selectedRecipe: recipies.meals}))
    // .then(window.location = '/in/recipe')
    .catch(err => console.log(err));

  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/in/recipe"
              render={() => <InRecipeContainer selectedRecipe={this.state.selectedRecipe} />}
              />
            <Route exact path="/in/recipe-list"
              render={() => <RecipeList recipiesList={this.state.recipiesList} findSelectedRecipe={this.findSelectedRecipe}/>}
              />
            </Switch>
        </Router>
      <p>TestIn</p>


      </div>
    );
  }

}

export default InContainer;
