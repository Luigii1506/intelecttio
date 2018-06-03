import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7d3b7fa6 = () => import('../pages/preguntas/index.vue' /* webpackChunkName: "pages/preguntas/index" */).then(m => m.default || m)
const _44f8f96a = () => import('../pages/addBook.vue' /* webpackChunkName: "pages/addBook" */).then(m => m.default || m)
const _8eb91736 = () => import('../pages/animation.vue' /* webpackChunkName: "pages/animation" */).then(m => m.default || m)
const _6640574e = () => import('../pages/books/index.vue' /* webpackChunkName: "pages/books/index" */).then(m => m.default || m)
const _4533d17c = () => import('../pages/edit/index.vue' /* webpackChunkName: "pages/edit/index" */).then(m => m.default || m)
const _654002e4 = () => import('../pages/edit/_id.vue' /* webpackChunkName: "pages/edit/_id" */).then(m => m.default || m)
const _d6105594 = () => import('../pages/books/_id.vue' /* webpackChunkName: "pages/books/_id" */).then(m => m.default || m)
const _ca272c56 = () => import('../pages/preguntas/_id.vue' /* webpackChunkName: "pages/preguntas/_id" */).then(m => m.default || m)
const _866c919a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/preguntas",
			component: _7d3b7fa6,
			name: "preguntas"
		},
		{
			path: "/addBook",
			component: _44f8f96a,
			name: "addBook"
		},
		{
			path: "/animation",
			component: _8eb91736,
			name: "animation"
		},
		{
			path: "/books",
			component: _6640574e,
			name: "books"
		},
		{
			path: "/edit",
			component: _4533d17c,
			name: "edit"
		},
		{
			path: "/edit/:id",
			component: _654002e4,
			name: "edit-id"
		},
		{
			path: "/books/:id",
			component: _d6105594,
			name: "books-id"
		},
		{
			path: "/preguntas/:id",
			component: _ca272c56,
			name: "preguntas-id"
		},
		{
			path: "/",
			component: _866c919a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
