import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import client from "../../worker/api-client";

export const Route = createRootRoute({
  notFoundComponent: () => <div>Not Found</div>,
  errorComponent: () => <div>Error</div>,
  context: () => ({
    client,
  }),
  component: () => (
    <>
      <div className="h-screen w-screen antialiased bg-[#242424] text-gray-100 grid place-items-center">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
