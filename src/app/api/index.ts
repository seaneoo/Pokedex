/**
 * All data is obtained from the free and open to use PokéAPI (https://pokeapi.co/)
 * For more information visit https://pokeapi.co/docs/v2#fairuse
 */

import "whatwg-fetch";

const location = "https://pokeapi.co/api/v2";

const fetch = (resource: string, method: string = "GET") => {
  let uri = location;
  if (!resource.startsWith("/")) uri += "/";
  uri += resource;

  return window
    .fetch(uri, { method: method })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json;
    })
    .catch(console.error);
};

export { fetch };
