import { json } from "@remix-run/node";
import H1 from "../components/atoms/H1/H1";
import SubtitleWithText from "../components/molecules/SubTitleWithText/SubtitleWithText";
import {Link, useLoaderData} from "@remix-run/react";
import {TrailService} from "../service/trail";

const trailService = new TrailService();

export const loader = () => {
  return json({
    trails: trailService.getTrails(),
  });
};

export default function Explore() {
  const data = useLoaderData<typeof loader>();

  return (
    <main className="max-w-[80rem] mx-auto relative mt-[8rem]">
      <div className="flex justify-between items-center mb-[4rem]">
        <H1>O primeiro tema</H1>
      </div>
      <div className="flex flex-col gap-5">
        {data.trails.map((trail) => (
            <Link to={`/explore/${trail.id}`} key={trail.id}>
              <SubtitleWithText
                key={trail.id}
                subtitle={trail.title}
              />
            </Link>
        ))}
      </div>
    </main>
  );
}
