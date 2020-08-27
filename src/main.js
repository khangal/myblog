// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'prismjs/themes/prism-tomorrow.css'
import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.filter('dateFormat', function(value) {
    if (!value) return

    let d = new Date(value)
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d).padStart(2, '0')
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d).padStart(2, '0')

    return `${year}-${month}-${day}`
  })
}
