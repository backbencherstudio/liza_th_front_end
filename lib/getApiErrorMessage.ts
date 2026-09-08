// utils/getApiErrorMessage.ts
export function getApiErrorMessage(err: unknown, fallback = "Something went wrong. Please try again."): string {
    const detail = (err as any)?.data?.detail;
  
    if (Array.isArray(detail)) {
      const messages = detail
        .map((d: any) => d?.msg)
        .filter(Boolean)
        .join(". ");
      return messages || fallback;
    }
  
    if (typeof detail === "string") {
      return detail;
    }
  
    // Sometimes the message is directly on the error
    if (typeof (err as any)?.data?.message === "string") {
      return (err as any).data.message;
    }
  
    return fallback;
  }