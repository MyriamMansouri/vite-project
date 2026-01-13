import  { createAuth0Client, type  Auth0Client }  from '@auth0/auth0-spa-js';
import { fetchApi } from '../db';

let auth0Client: Auth0Client | null = null;

const fetchAuthConfig = () => fetchApi("/auth_config.json");

export const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0Client = await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId
  });
};

export async function login() {
  if (!auth0Client) throw new Error('Auth0 client not initialized');
  await auth0Client.loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  });
}

export async function logout() {
  if (!auth0Client) throw new Error('Auth0 client not initialized');
  auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
}

