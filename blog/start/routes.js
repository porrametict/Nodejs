'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const Database = use('Database')

const Blog = use('App/Models/Blog')

Route.get('/', "BlogController.getIndex")
Route.get('/blog/create', "BlogController.getCreate")
Route.get('/blog/edit', "BlogController.getEdit")

Route.post('/blog', "BlogController.postCreate")
Route.post('/blog/edit', "BlogController.postEdit")
Route.post('/blog/delete', "BlogController.postDelete")





