export default function useLocalStorage() {
  function getLocalStorage(key) {
    const dataStoraged = JSON.parse(localStorage.getItem(key)) ?? []
    return dataStoraged
  }

  function setLocalStorage(key, newData) {
    const currentData = getLocalStorage(key)
    const dataStoraged = localStorage.setItem(
      key,
      JSON.stringify([...currentData, newData])
    )
    return dataStoraged
  }

  return {
    getLocalStorage,
    setLocalStorage,
  }
}
