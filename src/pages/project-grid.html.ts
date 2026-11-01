import { legacyRedirect } from "@/lib/legacy-redirect";

export const prerender = true;
export const GET = () => legacyRedirect("projects/", "Projects");
