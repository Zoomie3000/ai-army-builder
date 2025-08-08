import { useEffect, useState } from "react";

const hasGPC = () => {
  try {
    // @ts-ignore
    return typeof navigator !== "undefined" && Boolean((navigator as any).globalPrivacyControl);
  } catch {
    return false;
  }
};

const getStored = () => {
  try {
    const raw = localStorage.getItem("cookieConsent");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const store = (value: any) => {
  try { localStorage.setItem("cookieConsent", JSON.stringify(value)); } catch {}
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = getStored();
    if (!existing) {
      const gpc = hasGPC();
      const initial = gpc ? { necessary: true, functional: false, analytics: false, marketing: false } : null;
      if (initial) {
        store(initial);
      } else {
        setVisible(true);
      }
    }
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    store({ necessary: true, functional: true, analytics: true, marketing: false });
    setVisible(false);
  };
  const rejectNonEssential = () => {
    store({ necessary: true, functional: false, analytics: false, marketing: false });
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container mx-auto px-6 pb-safe pt-4">
        <div className="rounded-xl border border-border bg-card shadow-lg p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            We use essential cookies to make our site work and optional cookies to improve it. See our <a className="underline hover:text-primary" href="/cookies">Cookie Policy</a> or <a className="underline hover:text-primary" href="/cookie-settings">manage settings</a>.
          </p>
          <div className="flex gap-2">
            <button onClick={rejectNonEssential} className="px-3 py-2 rounded-md border border-border">Reject Non‑Essential</button>
            <button onClick={acceptAll} className="btn-primary px-4 py-2 rounded-md">Accept All</button>
          </div>
        </div>
      </div>
    </div>
  );
}
