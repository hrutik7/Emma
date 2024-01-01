import superjson from "superjson";

import { type AppRouter } from "../index";

import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";



export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;