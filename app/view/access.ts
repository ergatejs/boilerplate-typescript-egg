export default function (initialState: any) {
  console.log('=========initialState', initialState)
  const { access } = initialState;
  return access;
}
