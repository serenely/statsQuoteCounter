import { useState, useEffect } from 'react'
import s from './index.module.scss'
import { useWebSocketContext } from '../../provider/useWebSocketProvider'

export const Stats = () => {
  const { quotes } = useWebSocketContext()
  const [stats, setStats] = useState({
    mean: 0,
    stdDev: 0,
    mode: null,
    median: null,
    count: 0,
    sum: 0,
    squaredSum: 0,
    frequency: {}
  })

  const updateStats = (newQuote) => {
    const newValue = newQuote.value

    // mean
    const newCount = stats.count + 1
    const newSum = stats.sum + newValue
    const newMean = newSum / newCount

    // standart deviation
    const newSquaredSum = stats.squaredSum + Math.pow(newValue - newMean, 2)
    const newStdDev = Math.sqrt(newSquaredSum / newCount)

    // moda
    const newFrequency = { ...stats.frequency }
    newFrequency[newValue] = (newFrequency[newValue] || 0) + 1
    const newMode = Object.keys(newFrequency).reduce((a, b) =>
      newFrequency[a] > newFrequency[b] ? a : b
    )

    // median
    const sortedValues = [...quotes.map(q => q.value), newValue].sort((a, b) => a - b)
    const mid = Math.floor(sortedValues.length / 2)
    const newMedian = sortedValues.length % 2 !== 0
      ? sortedValues[mid]
      : (sortedValues[mid - 1] + sortedValues[mid]) / 2

    setStats({
      mean: newMean,
      stdDev: newStdDev,
      mode: newMode,
      median: newMedian,
      count: newCount,
      sum: newSum,
      squaredSum: newSquaredSum,
      frequency: newFrequency
    })
  }

  useEffect(() => {
    if (quotes.length > stats.count) {
      updateStats(quotes[quotes.length - 1])
    }
  }, [])

  return (
    <div className={s.container}>
      <div className={s.stats}>
        <h3>Статистика:</h3>
        <p>Среднее: {stats.mean.toFixed(2)}</p>
        <p>Стандартное отклонение: {stats.stdDev.toFixed(2)}</p>
        <p>Мода: {stats.mode}</p>
        <p>Медиана: {stats.median}</p>
      </div>
    </div>
  )
}
