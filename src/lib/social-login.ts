export function startGoogleOAuth() {
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google`;
}
