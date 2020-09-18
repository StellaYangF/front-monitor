export default function(time) {
  console.log(time)
  return `${time}`
    .split('.')[0]
}