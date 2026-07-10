import { notFound } from "next/navigation";

type DestinationDetail = {
  whyStudy?: { title: string; text: string };
  opportunities: string[];
};

declare const DESTINATION_DETAILS: Record<string, DestinationDetail>;

export default async function Test({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = DESTINATION_DETAILS[slug];
  if (!d) notFound();

  return (
    <div>
      {d.whyStudy && (
        <p>{d.whyStudy.text}</p>
      )}
      <ul>
        {d.opportunities.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </div>
  );
}
