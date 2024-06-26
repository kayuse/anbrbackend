import { inject } from "@adonisjs/core";
import { RegistrationDocument } from "../request/registrationRequest.js";
import { ApiResponse } from "../request/api_response.js";
import mail from '@adonisjs/mail/services/main'
// import BiblestudyGroup from "#models/biblestudy_group";
import { PrismaClient } from '@prisma/client'


@inject()
export default class RegistrationService {
    protected prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }
    // const errors = []
    async process(data: RegistrationDocument): Promise<ApiResponse> {
        const registrations = await this.prisma.registration.findMany({
            where : {email: data.email, mobile: data.mobile}
        })
        // const registrations = await Registration.findManyBy({ email: data.email, mobile: data.mobile })
        if (registrations.length > 0) {
            return {
                data: null,
                status: 400,
                message: 'This user already exists'
            }
        }
        const bibleStudyGroup = await this.prisma.bibleStudyGroup.findFirst({
            orderBy: [
                { total_attendant: 'asc' }
            ]
        })
        const registration = await this.prisma.registration.create({
            data: {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                mobile: data.mobile,
                address: data.address,
                occupation: data.occupation,
                marital_status: data.marital_status,
                country: data.country,
                has_attended: data.has_attended,
                your_description: data.your_description,
                needs_attention: data.needs_attention,
                nursing_mum: data.nursing_mum,
                expectations: data.expectations,
                invited_by: data.invited_by,
                biblestudy_id: bibleStudyGroup?.study_id
            }
        })

         await this.prisma.registration.update({
            where: { id: registration.id },
            data: { registration_id: `THREG${registration.id}` }
        })

        if (bibleStudyGroup != null) {
            console.log(bibleStudyGroup.total_attendant,'assas')
           await this.prisma.bibleStudyGroup.update({
                where: { id: bibleStudyGroup.id },
                data: { total_attendant: bibleStudyGroup.total_attendant + 1 }
            })
        }

       await mail.send((message) => {
            message.to(registration.email)
                .from('threshinghouseteam@gmail.com')
                .subject('ANBR 2024, Registration')
                .htmlView('emails/confirm_registration', registration)
        })
        console.log(registration)
        const response: ApiResponse = {
            status: 200,
            data: registration,
            message: "Successful"
        }
        return response
    }
}