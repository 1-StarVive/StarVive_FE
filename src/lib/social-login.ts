export function startGoogleOAuth() {
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/oauth2/authorization/google`;
}
