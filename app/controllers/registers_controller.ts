// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http";
import { RegistrationDocument } from "../request/registrationRequest.js";
import RegistrationService from "#services/registration.service";
import { inject } from "@adonisjs/core";

@inject()
export default class RegistersController {
    constructor(protected service: RegistrationService) {

    }
    async index(ctx: HttpContext) {
        console.log('ssssss')
        try {
            const data = ctx.request.all() as RegistrationDocument;
            const res = this.service.process(data)
            return res
        } catch (error) {
            ctx.response.badRequest(error)
        }
    }
}