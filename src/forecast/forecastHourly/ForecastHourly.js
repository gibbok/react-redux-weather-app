// @flow
import * as React from 'react'
import {ForecastHourlyType} from '../../types' // eslint-disable-line no-unused-vars
import SummaryChart from './SummaryChart'
import Details from './Details'
import SummaryButton from './SummaryButton'
import DetailsButton from './DetailsButton'
import { withStyles, Typography } from 'material-ui'

/* eslint-disable no-undef */
type PropsType = {
  +forecastHourly:ForecastHourlyType,
  +activeTypeReport: string,
  +onSummaryClick: Function,
  +onDetailsClick: Function,
  +classes: Object
}
/* eslint-enable no-undef */

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    root: {
      width: 900
    },
    title: {
      marginBottom: spaceUnit
    }
  })
}

const ForecastHourly:React.StatelessFunctionalComponent<any> = ({ forecastHourly, activeTypeReport, onSummaryClick, onDetailsClick, classes }:PropsType):React.Element<any> => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography type='headline'>Hourly</Typography>
      </div>
      <SummaryButton onSummaryClick={onSummaryClick} />
      <DetailsButton onDetailsClick={onDetailsClick} />
      {activeTypeReport === 'summary'
      ? <SummaryChart forecastHourly={forecastHourly} />
      : <Details forecastHourly={forecastHourly} />}
    </div>
  )
}

export default withStyles(styles)(ForecastHourly)
