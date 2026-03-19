export type ResumeSections = Record<string, string[]>;

export function parseResumeMarkdown(raw: string): ResumeSections {
  const lines = raw.split("\n");
  const sections: ResumeSections = {};
  let currentKey: string | null = null;
  let bodyLines: string[] = [];

  const flush = () => {
    if (currentKey !== null) {
      const nonEmpty = bodyLines.filter((l) => l.trim() !== "");
      sections[currentKey] = nonEmpty.length > 0 ? nonEmpty : [""];
    }
    bodyLines = [];
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flush();
      currentKey = line.slice(3).trim().toLowerCase();
    } else if (currentKey !== null) {
      bodyLines.push(line);
    }
  }
  flush();

  return sections;
}
