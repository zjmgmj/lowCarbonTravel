export default ({ route, redirect }) => {
  if (route.path === '/') {
    redirect('/home')
  }
}
