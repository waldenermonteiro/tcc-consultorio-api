'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.group('v1', function () {
    Route.resource('profiles', 'ProfileController').apiOnly()
    Route.resource('employees', 'EmployeeController').apiOnly()
    // Route.get('excludes/employees', 'EmployeeController.indexOnlyTrashed')
    Route.resource('patients', 'PatientController').apiOnly()
    Route.resource('doctors', 'DoctorControoler').apiOnly()
    Route.resource('specialities', 'SpecialitieContoller').apiOnly()
    Route.get('/secure', 'UserController.index').middleware('auth')
    Route.post('users/login', 'UserController.login')
    Route.get('/auth/:id', 'UserController.auth')
    Route.resource('users', 'UserController').apiOnly()
}).prefix('api/v1')



