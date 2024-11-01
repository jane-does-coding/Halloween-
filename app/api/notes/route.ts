import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const notes = await prisma.note.findMany();
		return NextResponse.json(notes);
	} catch (error) {
		console.log(error);
		return new NextResponse("Failed to fetch notes", { status: 500 });
	}
}

export async function POST(req: Request) {
	try {
		const { note, name } = await req.json();
		if (!note || !name) {
			return new NextResponse("Note content is required", { status: 400 });
		}

		const newNote = await prisma.note.create({
			data: {
				name: name,
				content: note,
			},
		});
		return NextResponse.json(newNote);
	} catch (error) {
		console.log(error);
		return new NextResponse("Failed to add note", { status: 500 });
	}
}
