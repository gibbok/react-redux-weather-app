import forecastHourlyReducer from './forecastHourlyReducer'
import { createMomentId } from '../../app/utility'
import location from '../../app/location'
import * as types from './forecastHourlyActionTypes'

describe('forecastHourlyReducer', () => {
  it('should return the initial state', () => {
    const dataInitialState = {
      forecastHourly: {
        data: [],
        app: {
          locationId: location().locationId, // nyc usa
          isFetching: false
        },
        ui: {
          selectedDate: createMomentId(Date.now()),
          activeReportType: 'summary'
        }
      }
    }
    expect(forecastHourlyReducer(undefined, {})).toEqual(dataInitialState)
  })

  it('should handle action GET_FORECAST_HOURLY_FULFILLED', () => {
    const dataApi = {
      'cod': '200',
      'message': 0.0651,
      'cnt': 37,
      'list': [{
        'dt': 1505293200,
        'main': {
          'temp': 15.53,
          'temp_min': 15.53,
          'temp_max': 16.09,
          'pressure': 1023.09,
          'sea_level': 1026.53,
          'grnd_level': 1023.09,
          'humidity': 95,
          'temp_kf': -0.56
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.46,
          'deg': 268.001
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-13 09:00:00'
      },
      {
        'dt': 1505304000,
        'main': {
          'temp': 17.44,
          'temp_min': 17.44,
          'temp_max': 17.86,
          'pressure': 1023.73,
          'sea_level': 1027.18,
          'grnd_level': 1023.73,
          'humidity': 88,
          'temp_kf': -0.42
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.11,
          'deg': 256.001
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-13 12:00:00'
      },
      {
        'dt': 1505314800,
        'main': {
          'temp': 24,
          'temp_min': 24,
          'temp_max': 24.27,
          'pressure': 1023.89,
          'sea_level': 1027.26,
          'grnd_level': 1023.89,
          'humidity': 67,
          'temp_kf': -0.28
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.21,
          'deg': 242.001
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-13 15:00:00'
      },
      {
        'dt': 1505325600,
        'main': {
          'temp': 25.31,
          'temp_min': 25.31,
          'temp_max': 25.44,
          'pressure': 1022.8,
          'sea_level': 1026.23,
          'grnd_level': 1022.8,
          'humidity': 60,
          'temp_kf': -0.14
        },
        'weather': [{
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }],
        'clouds': {
          'all': 32
        },
        'wind': {
          'speed': 1.78,
          'deg': 239.5
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-13 18:00:00'
      },
      {
        'dt': 1505336400,
        'main': {
          'temp': 25.49,
          'temp_min': 25.49,
          'temp_max': 25.49,
          'pressure': 1022,
          'sea_level': 1025.33,
          'grnd_level': 1022,
          'humidity': 57,
          'temp_kf': 0
        },
        'weather': [{
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }],
        'clouds': {
          'all': 48
        },
        'wind': {
          'speed': 2.71,
          'deg': 216.001
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-13 21:00:00'
      }, {
        'dt': 1505347200,
        'main': {
          'temp': 23.41,
          'temp_min': 23.41,
          'temp_max': 23.41,
          'pressure': 1022.46,
          'sea_level': 1025.78,
          'grnd_level': 1022.46,
          'humidity': 64,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '02n'
        }],
        'clouds': {
          'all': 8
        },
        'wind': {
          'speed': 3.61,
          'deg': 211.003
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-14 00:00:00'
      }, {
        'dt': 1505358000,
        'main': {
          'temp': 21.22,
          'temp_min': 21.22,
          'temp_max': 21.22,
          'pressure': 1023,
          'sea_level': 1026.31,
          'grnd_level': 1023,
          'humidity': 81,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }],
        'clouds': {
          'all': 80
        },
        'wind': {
          'speed': 2.51,
          'deg': 211.503
        },
        'rain': {
          '3h': 0.08
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-14 03:00:00'
      }, {
        'dt': 1505368800,
        'main': {
          'temp': 20.15,
          'temp_min': 20.15,
          'temp_max': 20.15,
          'pressure': 1022.59,
          'sea_level': 1025.94,
          'grnd_level': 1022.59,
          'humidity': 91,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }],
        'clouds': {
          'all': 64
        },
        'wind': {
          'speed': 1.06,
          'deg': 197.504
        },
        'rain': {
          '3h': 0.12
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-14 06:00:00'
      }, {
        'dt': 1505379600,
        'main': {
          'temp': 19.78,
          'temp_min': 19.78,
          'temp_max': 19.78,
          'pressure': 1022.42,
          'sea_level': 1025.79,
          'grnd_level': 1022.42,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 1.26,
          'deg': 87.5018
        },
        'rain': {
          '3h': 0.04
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-14 09:00:00'
      }, {
        'dt': 1505390400,
        'main': {
          'temp': 20.39,
          'temp_min': 20.39,
          'temp_max': 20.39,
          'pressure': 1023.11,
          'sea_level': 1026.45,
          'grnd_level': 1023.11,
          'humidity': 95,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 1.42,
          'deg': 90.0029
        },
        'rain': {
          '3h': 0.19
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-14 12:00:00'
      }, {
        'dt': 1505401200,
        'main': {
          'temp': 22.76,
          'temp_min': 22.76,
          'temp_max': 22.76,
          'pressure': 1023.71,
          'sea_level': 1026.97,
          'grnd_level': 1023.71,
          'humidity': 86,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 1.16,
          'deg': 256.5
        },
        'rain': {
          '3h': 0.15
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-14 15:00:00'
      }, {
        'dt': 1505412000,
        'main': {
          'temp': 24.57,
          'temp_min': 24.57,
          'temp_max': 24.57,
          'pressure': 1022.64,
          'sea_level': 1026,
          'grnd_level': 1022.64,
          'humidity': 75,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 1.2,
          'deg': 275.503
        },
        'rain': {
          '3h': 0.08
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-14 18:00:00'
      }, {
        'dt': 1505422800,
        'main': {
          'temp': 23.42,
          'temp_min': 23.42,
          'temp_max': 23.42,
          'pressure': 1023.27,
          'sea_level': 1026.57,
          'grnd_level': 1023.27,
          'humidity': 80,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 44
        },
        'wind': {
          'speed': 1.55,
          'deg': 201.503
        },
        'rain': {
          '3h': 0.9
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-14 21:00:00'
      }, {
        'dt': 1505433600,
        'main': {
          'temp': 21.61,
          'temp_min': 21.61,
          'temp_max': 21.61,
          'pressure': 1024.1,
          'sea_level': 1027.46,
          'grnd_level': 1024.1,
          'humidity': 87,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }],
        'clouds': {
          'all': 44
        },
        'wind': {
          'speed': 0.97,
          'deg': 144.502
        },
        'rain': {
          '3h': 0.36
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-15 00:00:00'
      }, {
        'dt': 1505444400,
        'main': {
          'temp': 20.45,
          'temp_min': 20.45,
          'temp_max': 20.45,
          'pressure': 1025.38,
          'sea_level': 1028.78,
          'grnd_level': 1025.38,
          'humidity': 93,
          'temp_kf': 0
        },
        'weather': [{
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n'
        }],
        'clouds': {
          'all': 80
        },
        'wind': {
          'speed': 2.17,
          'deg': 179
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-15 03:00:00'
      }, {
        'dt': 1505455200,
        'main': {
          'temp': 20.06,
          'temp_min': 20.06,
          'temp_max': 20.06,
          'pressure': 1025.89,
          'sea_level': 1029.31,
          'grnd_level': 1025.89,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [{
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n'
        }],
        'clouds': {
          'all': 56
        },
        'wind': {
          'speed': 1.06,
          'deg': 279.501
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-15 06:00:00'
      }, {
        'dt': 1505466000,
        'main': {
          'temp': 19.7,
          'temp_min': 19.7,
          'temp_max': 19.7,
          'pressure': 1026.84,
          'sea_level': 1030.3,
          'grnd_level': 1026.84,
          'humidity': 97,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 0.96,
          'deg': 341.009
        },
        'rain': {
          '3h': 0.02
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-15 09:00:00'
      }, {
        'dt': 1505476800,
        'main': {
          'temp': 20.72,
          'temp_min': 20.72,
          'temp_max': 20.72,
          'pressure': 1028.35,
          'sea_level': 1031.73,
          'grnd_level': 1028.35,
          'humidity': 94,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 56
        },
        'wind': {
          'speed': 1.61,
          'deg': 84.0001
        },
        'rain': {
          '3h': 0.01
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-15 12:00:00'
      }, {
        'dt': 1505487600,
        'main': {
          'temp': 24.35,
          'temp_min': 24.35,
          'temp_max': 24.35,
          'pressure': 1029.63,
          'sea_level': 1033.09,
          'grnd_level': 1029.63,
          'humidity': 79,
          'temp_kf': 0
        },
        'weather': [{
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d'
        }],
        'clouds': {
          'all': 20
        },
        'wind': {
          'speed': 1.51,
          'deg': 110
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-15 15:00:00'
      }, {
        'dt': 1505498400,
        'main': {
          'temp': 22.8,
          'temp_min': 22.8,
          'temp_max': 22.8,
          'pressure': 1030.01,
          'sea_level': 1033.21,
          'grnd_level': 1030.01,
          'humidity': 93,
          'temp_kf': 0
        },
        'weather': [{
          'id': 501,
          'main': 'Rain',
          'description': 'moderate rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 20
        },
        'wind': {
          'speed': 1.6,
          'deg': 142.501
        },
        'rain': {
          '3h': 3.12
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-15 18:00:00'
      }, {
        'dt': 1505509200,
        'main': {
          'temp': 23.85,
          'temp_min': 23.85,
          'temp_max': 23.85,
          'pressure': 1029.87,
          'sea_level': 1033.29,
          'grnd_level': 1029.87,
          'humidity': 88,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 8
        },
        'wind': {
          'speed': 1.52,
          'deg': 128.503
        },
        'rain': {
          '3h': 0.029999999999999
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-15 21:00:00'
      }, {
        'dt': 1505520000,
        'main': {
          'temp': 21.52,
          'temp_min': 21.52,
          'temp_max': 21.52,
          'pressure': 1030.81,
          'sea_level': 1034.17,
          'grnd_level': 1030.81,
          'humidity': 88,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '02n'
        }],
        'clouds': {
          'all': 8
        },
        'wind': {
          'speed': 1.37,
          'deg': 141.502
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-16 00:00:00'
      }, {
        'dt': 1505530800,
        'main': {
          'temp': 19.29,
          'temp_min': 19.29,
          'temp_max': 19.29,
          'pressure': 1031.54,
          'sea_level': 1034.99,
          'grnd_level': 1031.54,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.11,
          'deg': 144.503
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-16 03:00:00'
      }, {
        'dt': 1505541600,
        'main': {
          'temp': 18.16,
          'temp_min': 18.16,
          'temp_max': 18.16,
          'pressure': 1031.76,
          'sea_level': 1035.06,
          'grnd_level': 1031.76,
          'humidity': 98,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '02n'
        }],
        'clouds': {
          'all': 8
        },
        'wind': {
          'speed': 1.16,
          'deg': 83.5063
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-16 06:00:00'
      }, {
        'dt': 1505552400,
        'main': {
          'temp': 17.5,
          'temp_min': 17.5,
          'temp_max': 17.5,
          'pressure': 1031.69,
          'sea_level': 1035.07,
          'grnd_level': 1031.69,
          'humidity': 99,
          'temp_kf': 0
        },
        'weather': [{
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02n'
        }],
        'clouds': {
          'all': 24
        },
        'wind': {
          'speed': 1.42,
          'deg': 66.5119
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-16 09:00:00'
      }, {
        'dt': 1505563200,
        'main': {
          'temp': 18.96,
          'temp_min': 18.96,
          'temp_max': 18.96,
          'pressure': 1032.64,
          'sea_level': 1035.97,
          'grnd_level': 1032.64,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 2.06,
          'deg': 63.5012
        },
        'rain': {
          '3h': 0.07
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-16 12:00:00'
      }, {
        'dt': 1505574000,
        'main': {
          'temp': 21.84,
          'temp_min': 21.84,
          'temp_max': 21.84,
          'pressure': 1033.09,
          'sea_level': 1036.39,
          'grnd_level': 1033.09,
          'humidity': 89,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 44
        },
        'wind': {
          'speed': 1.97,
          'deg': 71.0016
        },
        'rain': {
          '3h': 0.09
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-16 15:00:00'
      }, {
        'dt': 1505584800,
        'main': {
          'temp': 24.75,
          'temp_min': 24.75,
          'temp_max': 24.75,
          'pressure': 1031.63,
          'sea_level': 1035.01,
          'grnd_level': 1031.63,
          'humidity': 75,
          'temp_kf': 0
        },
        'weather': [{
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }],
        'clouds': {
          'all': 8
        },
        'wind': {
          'speed': 2.21,
          'deg': 66.0077
        },
        'rain': {
          '3h': 0.0025000000000004
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-16 18:00:00'
      }, {
        'dt': 1505595600,
        'main': {
          'temp': 24.83,
          'temp_min': 24.83,
          'temp_max': 24.83,
          'pressure': 1030.63,
          'sea_level': 1034.01,
          'grnd_level': 1030.63,
          'humidity': 70,
          'temp_kf': 0
        },
        'weather': [{
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }],
        'clouds': {
          'all': 44
        },
        'wind': {
          'speed': 2.61,
          'deg': 86.5009
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-16 21:00:00'
      }, {
        'dt': 1505606400,
        'main': {
          'temp': 22.45,
          'temp_min': 22.45,
          'temp_max': 22.45,
          'pressure': 1030.53,
          'sea_level': 1033.95,
          'grnd_level': 1030.53,
          'humidity': 76,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 2.21,
          'deg': 85.5054
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-17 00:00:00'
      }, {
        'dt': 1505617200,
        'main': {
          'temp': 19.45,
          'temp_min': 19.45,
          'temp_max': 19.45,
          'pressure': 1030.35,
          'sea_level': 1033.71,
          'grnd_level': 1030.35,
          'humidity': 91,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 2.1,
          'deg': 69.5024
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-17 03:00:00'
      }, {
        'dt': 1505628000,
        'main': {
          'temp': 17.56,
          'temp_min': 17.56,
          'temp_max': 17.56,
          'pressure': 1029.24,
          'sea_level': 1032.6,
          'grnd_level': 1029.24,
          'humidity': 99,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.29,
          'deg': 49.5046
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-17 06:00:00'
      }, {
        'dt': 1505638800,
        'main': {
          'temp': 16.75,
          'temp_min': 16.75,
          'temp_max': 16.75,
          'pressure': 1028.98,
          'sea_level': 1032.28,
          'grnd_level': 1028.98,
          'humidity': 99,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.42,
          'deg': 356.002
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2017-09-17 09:00:00'
      }, {
        'dt': 1505649600,
        'main': {
          'temp': 18.69,
          'temp_min': 18.69,
          'temp_max': 18.69,
          'pressure': 1029.46,
          'sea_level': 1032.86,
          'grnd_level': 1029.46,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.36,
          'deg': 341.002
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-17 12:00:00'
      }, {
        'dt': 1505660400,
        'main': {
          'temp': 24.84,
          'temp_min': 24.84,
          'temp_max': 24.84,
          'pressure': 1028.79,
          'sea_level': 1032.15,
          'grnd_level': 1028.79,
          'humidity': 75,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.52,
          'deg': 15.0004
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-17 15:00:00'
      }, {
        'dt': 1505671200,
        'main': {
          'temp': 26.33,
          'temp_min': 26.33,
          'temp_max': 26.33,
          'pressure': 1026.9,
          'sea_level': 1030.24,
          'grnd_level': 1026.9,
          'humidity': 68,
          'temp_kf': 0
        },
        'weather': [{
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.76,
          'deg': 40
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-17 18:00:00'
      }, {
        'dt': 1505682000,
        'main': {
          'temp': 26.34,
          'temp_min': 26.34,
          'temp_max': 26.34,
          'pressure': 1026.27,
          'sea_level': 1029.65,
          'grnd_level': 1026.27,
          'humidity': 64,
          'temp_kf': 0
        },
        'weather': [{
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d'
        }],
        'clouds': {
          'all': 20
        },
        'wind': {
          'speed': 1.26,
          'deg': 54.5008
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2017-09-17 21:00:00'
      }
      ],
      'city': {
        'id': 5128581,
        'name': 'New York',
        'coord': {
          'lat': 40.7143,
          'lon': -74.006
        },
        'country': 'US'
      }
    }

    const dataState = {
      forecastHourly: {
        data: [{
          'momentId': '2017:8:13:3',
          'timespan': 1505293200,
          'temp': 15.53,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 268.001,
          'windSpeed': 1.46,
          'humidityUnit': '%',
          'humidityValue': 95
        },
        {
          'momentId': '2017:8:13:3',
          'timespan': 1505304000,
          'temp': 17.44,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 256.001,
          'windSpeed': 1.11,
          'humidityUnit': '%',
          'humidityValue': 88
        },
        {
          'momentId': '2017:8:13:3',
          'timespan': 1505314800,
          'temp': 24,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 242.001,
          'windSpeed': 1.21,
          'humidityUnit': '%',
          'humidityValue': 67
        },
        {
          'momentId': '2017:8:13:3',
          'timespan': 1505325600,
          'temp': 25.31,
          'weatherIconCode': 802,
          'weatherDescription': 'Clouds',
          'windDegree': 239.5,
          'windSpeed': 1.78,
          'humidityUnit': '%',
          'humidityValue': 60
        },
        {
          'momentId': '2017:8:13:3',
          'timespan': 1505336400,
          'temp': 25.49,
          'weatherIconCode': 802,
          'weatherDescription': 'Clouds',
          'windDegree': 216.001,
          'windSpeed': 2.71,
          'humidityUnit': '%',
          'humidityValue': 57
        },
        {
          'momentId': '2017:8:14:4',
          'timespan': 1505347200,
          'temp': 23.41,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 211.003,
          'windSpeed': 3.61,
          'humidityUnit': '%',
          'humidityValue': 64
        },
        {
          'momentId': '2017:8:14:4',
          'timespan': 1505358000,
          'temp': 21.22,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 211.503,
          'windSpeed': 2.51,
          'humidityUnit': '%',
          'humidityValue': 81,
          'rain': 0.08
        },
        {
          'momentId': '2017:8:14:4',
          'timespan': 1505368800,
          'temp': 20.15,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 197.504,
          'windSpeed': 1.06,
          'humidityUnit': '%',
          'humidityValue': 91,
          'rain': 0.12
        },
        {
          'momentId': '2017:8:14:4',
          'timespan': 1505379600,
          'temp': 19.78,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 87.5018,
          'windSpeed': 1.26,
          'humidityUnit': '%',
          'humidityValue': 96,
          'rain': 0.04
        },
        {
          'momentId': '2017:8:14:4',
          'timespan': 1505390400,
          'temp': 20.39,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 90.0029,
          'windSpeed': 1.42,
          'humidityUnit': '%',
          'humidityValue': 95,
          'rain': 0.19
        },
        {
          'momentId': '2017:8:14:4',
          'timespan': 1505401200,
          'temp': 22.76,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 256.5,
          'windSpeed': 1.16,
          'humidityUnit': '%',
          'humidityValue': 86,
          'rain': 0.15
        },
        {
          'momentId': '2017:8:14:4',
          'timespan': 1505412000,
          'temp': 24.57,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 275.503,
          'windSpeed': 1.2,
          'humidityUnit': '%',
          'humidityValue': 75,
          'rain': 0.08
        },
        {
          'momentId': '2017:8:14:4',
          'timespan': 1505422800,
          'temp': 23.42,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 201.503,
          'windSpeed': 1.55,
          'humidityUnit': '%',
          'humidityValue': 80,
          'rain': 0.9
        },
        {
          'momentId': '2017:8:15:5',
          'timespan': 1505433600,
          'temp': 21.61,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 144.502,
          'windSpeed': 0.97,
          'humidityUnit': '%',
          'humidityValue': 87,
          'rain': 0.36
        },
        {
          'momentId': '2017:8:15:5',
          'timespan': 1505444400,
          'temp': 20.45,
          'weatherIconCode': 803,
          'weatherDescription': 'Clouds',
          'windDegree': 179,
          'windSpeed': 2.17,
          'humidityUnit': '%',
          'humidityValue': 93
        },
        {
          'momentId': '2017:8:15:5',
          'timespan': 1505455200,
          'temp': 20.06,
          'weatherIconCode': 803,
          'weatherDescription': 'Clouds',
          'windDegree': 279.501,
          'windSpeed': 1.06,
          'humidityUnit': '%',
          'humidityValue': 96
        },
        {
          'momentId': '2017:8:15:5',
          'timespan': 1505466000,
          'temp': 19.7,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 341.009,
          'windSpeed': 0.96,
          'humidityUnit': '%',
          'humidityValue': 97,
          'rain': 0.02
        },
        {
          'momentId': '2017:8:15:5',
          'timespan': 1505476800,
          'temp': 20.72,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 84.0001,
          'windSpeed': 1.61,
          'humidityUnit': '%',
          'humidityValue': 94,
          'rain': 0.01
        },
        {
          'momentId': '2017:8:15:5',
          'timespan': 1505487600,
          'temp': 24.35,
          'weatherIconCode': 801,
          'weatherDescription': 'Clouds',
          'windDegree': 110,
          'windSpeed': 1.51,
          'humidityUnit': '%',
          'humidityValue': 79
        },
        {
          'momentId': '2017:8:15:5',
          'timespan': 1505498400,
          'temp': 22.8,
          'weatherIconCode': 501,
          'weatherDescription': 'Rain',
          'windDegree': 142.501,
          'windSpeed': 1.6,
          'humidityUnit': '%',
          'humidityValue': 93,
          'rain': 3.12
        },
        {
          'momentId': '2017:8:15:5',
          'timespan': 1505509200,
          'temp': 23.85,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 128.503,
          'windSpeed': 1.52,
          'humidityUnit': '%',
          'humidityValue': 88,
          'rain': 0.029999999999999
        },
        {
          'momentId': '2017:8:16:6',
          'timespan': 1505520000,
          'temp': 21.52,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 141.502,
          'windSpeed': 1.37,
          'humidityUnit': '%',
          'humidityValue': 88
        },
        {
          'momentId': '2017:8:16:6',
          'timespan': 1505530800,
          'temp': 19.29,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 144.503,
          'windSpeed': 1.11,
          'humidityUnit': '%',
          'humidityValue': 96
        },
        {
          'momentId': '2017:8:16:6',
          'timespan': 1505541600,
          'temp': 18.16,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 83.5063,
          'windSpeed': 1.16,
          'humidityUnit': '%',
          'humidityValue': 98
        },
        {
          'momentId': '2017:8:16:6',
          'timespan': 1505552400,
          'temp': 17.5,
          'weatherIconCode': 801,
          'weatherDescription': 'Clouds',
          'windDegree': 66.5119,
          'windSpeed': 1.42,
          'humidityUnit': '%',
          'humidityValue': 99
        },
        {
          'momentId': '2017:8:16:6',
          'timespan': 1505563200,
          'temp': 18.96,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 63.5012,
          'windSpeed': 2.06,
          'humidityUnit': '%',
          'humidityValue': 100,
          'rain': 0.07
        },
        {
          'momentId': '2017:8:16:6',
          'timespan': 1505574000,
          'temp': 21.84,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 71.0016,
          'windSpeed': 1.97,
          'humidityUnit': '%',
          'humidityValue': 89,
          'rain': 0.09
        },
        {
          'momentId': '2017:8:16:6',
          'timespan': 1505584800,
          'temp': 24.75,
          'weatherIconCode': 500,
          'weatherDescription': 'Rain',
          'windDegree': 66.0077,
          'windSpeed': 2.21,
          'humidityUnit': '%',
          'humidityValue': 75,
          'rain': 0.0025000000000004
        },
        {
          'momentId': '2017:8:16:6',
          'timespan': 1505595600,
          'temp': 24.83,
          'weatherIconCode': 802,
          'weatherDescription': 'Clouds',
          'windDegree': 86.5009,
          'windSpeed': 2.61,
          'humidityUnit': '%',
          'humidityValue': 70
        },
        {
          'momentId': '2017:8:17:0',
          'timespan': 1505606400,
          'temp': 22.45,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 85.5054,
          'windSpeed': 2.21,
          'humidityUnit': '%',
          'humidityValue': 76
        },
        {
          'momentId': '2017:8:17:0',
          'timespan': 1505617200,
          'temp': 19.45,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 69.5024,
          'windSpeed': 2.1,
          'humidityUnit': '%',
          'humidityValue': 91
        },
        {
          'momentId': '2017:8:17:0',
          'timespan': 1505628000,
          'temp': 17.56,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 49.5046,
          'windSpeed': 1.29,
          'humidityUnit': '%',
          'humidityValue': 99
        },
        {
          'momentId': '2017:8:17:0',
          'timespan': 1505638800,
          'temp': 16.75,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 356.002,
          'windSpeed': 1.42,
          'humidityUnit': '%',
          'humidityValue': 99
        },
        {
          'momentId': '2017:8:17:0',
          'timespan': 1505649600,
          'temp': 18.69,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 341.002,
          'windSpeed': 1.36,
          'humidityUnit': '%',
          'humidityValue': 96
        },
        {
          'momentId': '2017:8:17:0',
          'timespan': 1505660400,
          'temp': 24.84,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 15.0004,
          'windSpeed': 1.52,
          'humidityUnit': '%',
          'humidityValue': 75
        },
        {
          'momentId': '2017:8:17:0',
          'timespan': 1505671200,
          'temp': 26.33,
          'weatherIconCode': 800,
          'weatherDescription': 'Clear',
          'windDegree': 40,
          'windSpeed': 1.76,
          'humidityUnit': '%',
          'humidityValue': 68
        },
        {
          'momentId': '2017:8:17:0',
          'timespan': 1505682000,
          'temp': 26.34,
          'weatherIconCode': 801,
          'weatherDescription': 'Clouds',
          'windDegree': 54.5008,
          'windSpeed': 1.26,
          'humidityUnit': '%',
          'humidityValue': 64
        }
        ]
      }
    }
    expect(forecastHourlyReducer({}, {
      type: types.GET_FORECAST_HOURLY_FULFILLED,
      payload: dataApi
    })).toEqual(dataState)
  })
})
