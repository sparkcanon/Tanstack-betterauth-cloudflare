import { createFileRoute, Link } from "@tanstack/react-router";
import viteLogo from "../../../public/vite.svg";
import reactLogo from "../assets/react.svg";
import honoLogo from "../assets/hono.svg";
import cloudflareLogo from "../assets/Cloudflare_Logo.svg";
import tanstack from "../assets/tanstack.svg";
import betterAuth from "../assets/better-auth.svg";
import drizzle from "../assets/drizzle.svg";

export const Route = createFileRoute("/")({
  pendingComponent: () => <div>Loading...</div>,
  component: Index,
  loader: async ({ context }) => {
    const data = await context.client.api.count.$get();
    return data.json();
  },
});

function Index() {
  const data = Route.useLoaderData();

  return (
    <div className="text-center flex flex-col gap-8">
      <div className="flex justify-center gap-6">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-16 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#646cffaa)]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-16 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#61dafbaa)] animate-spin"
            alt="React logo"
          />
        </a>
        <a href="https://tanstack.com/" target="_blank">
          <img
            src={tanstack}
            className="h-16 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#e3a67faa)]"
            alt="Tanstack logo"
          />
        </a>
        <a href="https://better-auth.com/" target="_blank">
          <img
            src={betterAuth}
            className="h-16 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#ffffffaa)]"
            alt="BetterAuth logo"
          />
        </a>
        <a href="https://hono.dev/" target="_blank">
          <img
            src={honoLogo}
            className="h-16 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#f6821faa)]"
            alt="Hono logo"
          />
        </a>
        <a href="https://orm.drizzle.team/" target="_blank">
          <img
            src={drizzle}
            className="h-16 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#c2fc7ec9)]"
            alt="Drizzle logo"
          />
        </a>
        <a href="https://workers.cloudflare.com/" target="_blank">
          <img
            src={cloudflareLogo}
            className="h-16 [will-change:filter] [transition:filter_300ms] hover:[filter:drop-shadow(0_0_2em_#f6821faa)]"
            alt="Cloudflare logo"
          />
        </a>
      </div>
      <h1>Vite + React + Hono + Cloudflare + Tanstack + BetterAuth</h1>
      <p>
        Edit <code>src/web/routes/index.tsx</code> and save to test HMR
      </p>
      <div>
        Data from API about post count: {data.postCount}
        <p>
          Edit <code>worker/index.ts</code> to change the name
        </p>
      </div>
      <Link to="/user" className="underline" preload="intent">
        Better auth user page
      </Link>
      <p className="text-sm text-gray-400">Click on the logos to learn more</p>
    </div>
  );
}
