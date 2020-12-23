
export const getLocalInfo = (key = 'eastweb-loginfo') => {
  return JSON.parse(localStorage.getItem(key) ?? '{}')
}

export const setLocalInfo = (data, key = 'eastweb-loginfo') => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const removeLocalInfo = (key = 'eastweb-loginfo') => {
  localStorage.removeItem(key)
}
