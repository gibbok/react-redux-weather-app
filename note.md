# API Related

## Examples
Get weather information for any cities matching query, in this example London is returned in two contries.
http://api.openweathermap.org/data/2.5/find?q=London&APPID=

Get forecast accurate information, in this example London is returned from UK only. 
http://api.openweathermap.org/data/2.5/forecast?q=London,UK&APPID=

Get weather accurate information, in this example London is returned from UK only. 
http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=

## Domains

- Weather (current weather)
- Forecast (5 days weather)
- Finder (lsit of cities)


## Interesting projects
API abstraction in top of openweathermap
https://www.npmjs.com/package/openweathermap