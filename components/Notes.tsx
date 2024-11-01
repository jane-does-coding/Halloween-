"use client";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";

export default function Notes() {
	const [notes, setNotes] = useState<{ name: string; content: string }[]>([]);
	const [name, setName] = useState("");
	const [note, setNote] = useState("");

	useEffect(() => {
		const fetchNotes = async () => {
			try {
				const response = await fetch("/api/notes");
				const data = await response.json();
				console.log(data);
				setNotes(data);
			} catch (err) {
				console.error("Failed to fetch notes:", err);
			}
		};
		fetchNotes();
	}, []);

	const addNote = async () => {
		const response = await fetch("/api/notes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, note }),
		});

		if (response.ok) {
			const newNote = { name, content: note };
			setNotes((prevNotes) => [...prevNotes, newNote]);
			setName("");
			setNote("");
		} else {
			console.error("Failed to add note.");
		}
	};

	return (
		<div>
			<h2 className="creepster text-center text-[4rem] mt-16 mb-4">
				Leave a Note
			</h2>
			<div className="flex flex-col gap-3 w-[40vw] mx-auto">
				<Input
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="What's your name?"
					type="text"
				/>
				<Input
					id="note"
					value={note}
					onChange={(e) => setNote(e.target.value)}
					placeholder="Write a note ;)"
					type="text"
				/>
				<button
					onClick={addNote}
					className="w-full py-2 creepster text-[1.5rem] bg-gradient-to-r from-orange-500 to-neutral-800 rounded-xl"
				>
					Add Note
				</button>
			</div>

			<div className="grid grid-cols-4 gap-6 w-[80%] mx-auto mt-12">
				{notes.map((n: any, index: number) => {
					console.log(n);

					return (
						<div className="w-full bg-neutral-800 py-4 rounded-lg" key={index}>
							<h2 className="text-white font-bold clear-start px-4 pb-2 border-b-[1px] border-neutral-600">
								{n.name}
							</h2>
							<p className="text-neutral-50 px-4 pt-2">{n.content}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
