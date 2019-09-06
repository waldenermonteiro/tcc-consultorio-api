'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Route.resource('posts', 'PostController').apiOnly()
// Route.group('v1', function () {
//     Route.get('/posts', 'PostController.list').middleware('auth')
//     Route.get('/posts/:id', 'PostController.getBydId')
//     Route.post('/posts', 'PostController.create')
//     Route.put('/posts/:id', 'PostController.update')
//     Route.delete('/posts/:id', 'PostController.remove')
// }).prefix('api/v1')
Route.group('v1', function () {
    Route.get('/profiles', 'ProfileController.list')
    Route.get('/profiles/:id', 'ProfileController.getBydId')
    Route.post('/profiles', 'ProfileController.create')
    Route.put('/profiles/:id', 'ProfileController.update')
    Route.delete('/profiles/:id', 'ProfileController.remove')

    Route.get('/employees', 'EmployeeController.list')
    Route.get('/employees/:id', 'EmployeeController.getBydId')
    Route.post('/employees', 'EmployeeController.create')
    Route.put('/employees/:id', 'EmployeeController.update')
    Route.delete('/employees/:id', 'EmployeeController.remove')
}).prefix('api/v1')

// Route.get('/secure', 'UserController.index').middleware('auth')
// Route.post('users/login', 'UserController.login')
// Route.get('/auth/:id', 'UserController.auth')
// Route.get('/users', 'UserController.list')
// Route.post('/users', 'UserController.create')
// Route.get('/users/:id', 'UserController.getBydId')
// Route.put('/users/:id', 'UserController.update')
// Route.delete('/users/:id', 'UserController.remove')

