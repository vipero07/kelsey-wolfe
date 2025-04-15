import { deLocalizeUrl } from '$lib/paraglide/runtime';
import 'virtual:uno.css';

export const reroute = (request) => deLocalizeUrl(request.url).pathname;
