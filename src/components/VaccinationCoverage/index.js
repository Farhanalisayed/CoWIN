// Write your code here
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

const VaccinationCoverage = async () => {
  const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
  const pageData = await response.json()
  const coverageData = pageData.last_7_days_vaccination
  const DataFormatter = number => {
    if (number > 10000) {
      return `${(number / 10).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="cont">
      <h1 className="heading">Vaccination Coverage</h1>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={coverageData}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: '#6c757d',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: '#6c757d',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
