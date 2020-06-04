'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.group('v1', function () {
    Route.resource('employees', 'EmployeeController').apiOnly().middleware(['auth'])
    Route.resource('medicaments', 'MedicamentController').apiOnly().middleware(['auth'])
    Route.resource('patients', 'PatientController').apiOnly().middleware(['auth'])
    Route.resource('profiles', 'ProfileController').apiOnly().middleware(['auth'])
    Route.resource('specialities', 'SpecialitieController').apiOnly().middleware(['auth'])
    Route.resource('typeExams', 'TypeExamController').apiOnly().middleware(['auth'])
    Route.resource('prescriptionMedicament', 'PrescriptionMedicamentController').apiOnly().middleware(['auth'])
    Route.resource('medicalSchedules', 'MedicalScheduleController').apiOnly().middleware(['auth'])
    Route.patch('/medicalSchedules/alterStatus/:id', 'MedicalScheduleController.alterStatus').middleware(['auth'])
    Route.patch('/medicalSchedules/finishConsult/:id', 'MedicalScheduleController.finishConsult').middleware(['auth'])
    Route.resource('requestExams', 'RequestExamController').apiOnly().middleware(['auth'])
    Route.resource('resultExams', 'ResultExamController').apiOnly().middleware(['auth'])
    // Route.get('excludes/employees', 'EmployeeController.indexOnlyTrashed')
    Route.resource('users', 'UserController').apiOnly()
    Route.get('/secure', 'UserController.index').middleware('auth')
    Route.post('users/login', 'UserController.login')
    Route.patch('/users/alterPassword/:id', 'UserController.alterPassword')
}).prefix('api/v1')
Route.get('/auth/:id', 'UserController.auth')


