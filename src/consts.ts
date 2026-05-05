export const SITE_TITLE = "Joel Plumppu";
export const SITE_DESCRIPTION =
    "Welcome to my website where I write about projects I'm building and other things that I find interesting.";
export const isDev = import.meta.env.DEV ?? false;
const GH_PAGE_PREFIX = "/homepage";
export const GITHUB_PAGES_PATH_PREFIX = isDev === true ? "" : GH_PAGE_PREFIX;
