"use client";

import Error from "next/error";

export default function GlobalError({ error }: { error: Error }) {
  // You can log the error locally or leave it clean
  console.error("Global error caught:", error);

  return (
    <html>
      <body>
        <Error statusCode={500} title="Something went wrong" />
      </body>
    </html>
  );
}
