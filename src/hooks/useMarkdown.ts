import { useState, useEffect } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface UseMarkdownResult {
  raw: string | null;
  status: Status;
}

export function useMarkdown(path: string): UseMarkdownResult {
  const [raw, setRaw] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!path) return;
    setStatus("loading");
    setRaw(null);

    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}`);
        return res.text();
      })
      .then((text) => {
        setRaw(text);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [path]);

  return { raw, status };
}
