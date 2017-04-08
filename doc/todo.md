# Todo

## Setup 
- [X] setup git
- [X] setup vs markdown
- [X] setup env
- [X] create package.json
- [X] setup webpack
- [X] setup webpack config
- [ ] setup webpack plugins
- [X] setup webpack source map
- [X] setup webpack livereload
- [X] setup standard js with auto format
- [X] setup babel
- [X] setup babel presets/plugins
- [X] setup redux
- [X] setup react
- [X] setup .editorconfig
- [X] setup openweathermap

- [X] analysis openweathermap data
- [X] setup redux file structure using domain-style
- [ ] setup redux scaffolding
- [x] setup state data tree

- [X] analysis state app finder
- [ ] setup static app finder version****
- [ ] analysis and add configuration
- [X] generate first reducer
- [ ] split nd combine reducers


## Static protoype
- [x] include babel polify
- [X] render a static list of cities for location finder
- [X] render a input field
- [X] render a search button

- [ ] when user click search in location finder show the list of cities
- [X] setup redux container and basic react component
- [X] mak a simple middleware for promise and test an action with promise

- [*] when user enter a value in input, state is update using action
- [*] when user enter search, list location is displayed (api call)

- [ ] refactory type for actions in different module looks at FSA
- [ ] add api utility and config api

## Useful

https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html

http://kleopetrov.me/2016/03/18/everything-about-babel/
https://marmelab.com/blog/2015/12/17/react-directory-structure.html

http://redux.js.org/docs/basics/Reducers.html#designing-the-state-shape
http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html
http://redux.js.org/docs/recipes/reducers/BasicReducerStructure.html

http://jonnyreeves.co.uk/2016/simple-webpack-prod-and-dev-config/
https://gist.github.com/sokra/27b24881210b56bbaff7#configuration
https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9

https://github.com/webpack/webpack/issues/2666
https://webpack.js.org/guides/development/#components/sidebar/sidebar.jsx
https://survivejs.com/webpack/building/source-maps/

https://github.com/acdlite/flux-standard-action

"OWY1ODViYWJjNTliZjQzNWM0MjMxOWI0ZTliNjk3NjY="
"9f585babc59bf435c42319b4e9b69766"

## Flux Standard Actions

{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'  
  }
}

{
  type: 'ADD_TODO',
  payload: new Error(),
  error: true
}




