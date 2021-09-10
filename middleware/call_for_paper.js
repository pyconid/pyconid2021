export default function (context) {
  if (context.route.fullPath === '/call-for-proposal') {
    return context.redirect('/call-for-paper')
  }
}
