import { useEffect } from "react";

export function Analytics() {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  const posthogKey = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
  const posthogHost = (import.meta.env.VITE_POSTHOG_HOST as string | undefined) || "https://us.i.posthog.com";

  useEffect(() => {
    if (!plausibleDomain) return;
    const s = document.createElement("script");
    s.defer = true;
    s.setAttribute("data-domain", plausibleDomain);
    s.src = "https://plausible.io/js/script.js";
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, [plausibleDomain]);

  useEffect(() => {
    if (!posthogKey) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `${posthogHost.replace(/\/$/, "")}/static/array.js`;
    script.onload = () => {
      const w = window as any;
      if (w.posthog && typeof w.posthog.init === "function") {
        w.posthog.init(posthogKey, { api_host: posthogHost, capture_pageview: true });
      }
    };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [posthogKey, posthogHost]);

  return null;
}