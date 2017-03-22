# API Related

## Examples
Get weather information for some cities matching the query, in this example London is returned in two countries.
http://api.openweathermap.org/data/2.5/find?q=London&APPID=

Get forecast accurate information, in this example London is returned from the UK only.
http://api.openweathermap.org/data/2.5/forecast?q=London,UK&APPID=

GGet accurate weather information, in this example London is returned from the UK only. 
http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=

## Domains

- Weather (current weather)
- Forecast (5 days weather)
- Finder (list of cities)


## Interesting projects
API abstraction on top of openweathermap
https://www.npmjs.com/package/openweathermap

## Features Set 1

### Main Components

#### Finder
The finder component allows a user to request information about a specific city, a list available cities will be returned to the user. 
- [ ] As a user I want to input a city.
- [ ] As a user I want to see a list of cities matching my input.
- [ ] As a user I want to see the details for a city after a selection in the list.

#### Weather
The Weather component provides at a glance basic current weather information for a specific city.

- [ ] As a user I want to see basic current weather information about a chosen city.

#### Daily
The Daily component provides at a glance basic weather information for the next five days.

- [ ] As a user I want to see a list of the next five days with some basic weather information.
- [ ] As a user I want to select a day in the list and have additional information as Hourly report shown.

#### Hourly
The Hourly component provides temperature and precipitation information in chart/table format.

- [ ] As a user I want to see a chart with temperature/precipitation information for a select city/day.
- [ ] As a user I want to switch the chart view to a more tabular view with more details.

#### Day Details
The Day Details component provides general information about Sunrise/Sunset/Precipitation/Himidity/Wind.

- [ ] As a user I want to see Sunrise/Sunset/Precipitation/Himidity/Wind.