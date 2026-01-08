import config from 'virtual:config'

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions
) {
  const d = new Date(date)
  
  // 直接返回 YYYY/MM/DD 格式
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  
  return `${year}/${month}/${day}`
}
