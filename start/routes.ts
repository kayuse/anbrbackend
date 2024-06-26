/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import RegistersController from '#controllers/registers_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.post('/api/register/', [RegistersController, 'index'])
