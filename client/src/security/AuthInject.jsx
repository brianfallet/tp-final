import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { authInterceptor } from "../api/AuthInterceptor";

export function AuthInject() {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    authInterceptor.setAuthGetter(getAccessTokenSilently);
    return () => authInterceptor.setAuthGetter(undefined);
  }, [getAccessTokenSilently]);

  return null;
}
