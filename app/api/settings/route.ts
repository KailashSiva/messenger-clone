import getCurrentUser from "@/app/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from '@/app/libs/prismadb'


export async function POST(
    request: Request
) {
    try {
        const currentUser = await getCurrentUser()
        const body = await request.json()
        const {
            name, image
        } = body;

        if (!currentUser?.id) {
            return new NextResponse('unauthorised', { status: 401 })
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            }, data: {
                image, name
            }
        })

        return NextResponse.json(updatedUser)

    } catch (e) {
        console.log('error settings', e)
        return new NextResponse('internal', { status: 500 })

    }
}