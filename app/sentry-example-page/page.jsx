"use client";

import Head from "next/head";

export default function Page() {
  const triggerError = async () => {
    try {
      const res = await fetch("/api/trigger-error");
      if (!res.ok) {
        throw new Error("Frontend test error triggered");
      }
    } catch (err) {
      console.error("Caught error:", err);
    }
  };

  return (
    <div>
      <Head>
        <title>Error Test</title>
        <meta name="description" content="Testing frontend error boundaries." />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "14px 0" }}>
          🧪 Error Test Page
        </h1>

        <p>Click the button below to simulate an error:</p>
        <button
          type="button"
          style={{
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "#AD6CAA",
            borderRadius: "4px",
            border: "none",
            color: "white",
            fontSize: "14px",
            margin: "18px",
          }}
          onClick={triggerError}
        >
          Throw error!
        </button>

        <p style={{ marginTop: "24px" }}>
          This is now a clean test page with no Sentry integration.
        </p>
      </main>
    </div>
  );
}
