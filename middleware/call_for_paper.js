export default function (context) {
  if (context.route.fullPath === '/call-for-proposal') {
    return context.redirect('/call-for-paper')
  } 
  // else if (context.route.fullPath === '/start') {
  //   return context.redirect('https://pyconid2021.hubilo.com/community/#/login')
  // }
}
