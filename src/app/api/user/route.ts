import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "../../../lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, username, password } = body


        // check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        })

        if(existingUserByEmail) {
            return NextResponse.json({user: null, message: 'Email already exists'}, {status: 409})
        }

        
        // check if email already exists
        const existingUserByName = await db.user.findUnique({
            where: { username: username }
        })

        if(existingUserByName) {
            return NextResponse.json({user: null, message: 'Email already exists'}, {status: 409})
        }
        const hashedPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })

        return NextResponse.json({ user: newUser, message: "User created successfully"}, {status: 201})
    } catch (error) {
        console.log(error);
    }
}