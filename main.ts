import { mkdirSync, writeFileSync } from "node:fs";

// One Line, No Deadline Met: one line, under 200 characters,
// giving a joke excuse for a missed deadline — and nothing else.
//
// Revision: the first draft ("too shy to introduce itself") had a
// personification turn but read literary rather than like something a
// cornered person would actually say. The revised line keeps a turn —
// redefining "meeting the deadline" as only the writing part — and
// lands the punch at the end, in a voice someone really would use
// when caught out.
const ENTRY =
  "I finished it on time — I just never sent it, because apparently I thought the deadline was only about writing it, not the part where you get it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
