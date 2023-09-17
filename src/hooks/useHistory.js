import useLocalStorage from './useLocalStorage'

export default function useHistory() {
  // const numberHistory = Array.from({ length: 30 })
  // const history = numberHistory.map((_, index) => ({
  //   id: index,
  //   address: '89.207.132.170',
  //   location: 'London',
  // }))
  const { getLocalStorage } = useLocalStorage()
  const history = getLocalStorage('history')
  // console.log(historyStoraged)
  const hasRecords = history.length > 0

  return { history, hasRecords }
}
