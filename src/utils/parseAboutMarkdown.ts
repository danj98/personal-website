export interface AboutSection {
  title: string;
  content: string;
}

export function parseAboutMarkdown(raw: string): AboutSection[] {
  const lines = raw.split("\n");
  const sections: AboutSection[] = [];
  let currentTitle: string | null = null;
  let bodyLines: string[] = [];

  const flush = () => {
    if (currentTitle !== null) {
      sections.push({ title: currentTitle, content: bodyLines.join("\n").trim() });
      bodyLines = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flush();
      currentTitle = line.slice(3).trim();
    } else if (currentTitle !== null) {
      bodyLines.push(line);
    }
  }
  flush();

  return sections;
}
