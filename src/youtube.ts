import type { QueueItem } from "./types";

type SearchResponse = {
  items?: Array<{
    id: { videoId: string };
    snippet: {
      title: string;
      thumbnails: { medium?: { url: string }; default?: { url: string } };
    };
  }>;
};

export async function searchVideos(
  apiKey: string,
  query: string,
): Promise<QueueItem[]> {
  const params = new URLSearchParams({
    part: "snippet",
    type: "video",
    maxResults: "8",
    q: query,
    key: apiKey,
  });

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${params}`,
  );

  if (!res.ok) {
    throw new Error("youtube_search_failed");
  }

  const data = (await res.json()) as SearchResponse;

  return (data.items ?? []).map((item) => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    thumbnail:
      item.snippet.thumbnails.medium?.url ??
      item.snippet.thumbnails.default?.url ??
      "",
  }));
}
