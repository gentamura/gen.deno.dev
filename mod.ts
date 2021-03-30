import { serve } from "https://deno.land/x/sift/mod.ts";

serve({
  '/': () => new Response('Hello World with Deno Deploy')
});

