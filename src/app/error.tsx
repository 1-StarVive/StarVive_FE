"use client";

function MyError({ error }: { error: Error & { digest?: string } }) {
  return (
    <div>
      <div>
        {error.name} {error.message}
      </div>
    </div>
  );
}

export default MyError;
