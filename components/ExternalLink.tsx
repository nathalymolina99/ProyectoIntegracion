import React from 'react';
import { Link, LinkProps, Href } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { Platform } from 'react-native';

// Definimos un tipo que representa todas las posibles rutas de tu aplicación
type AppRoutes = 
  | "/"
  | "/(tabs)"
  // Añade aquí todas las rutas posibles de tu aplicación
  ;

type Props = Omit<LinkProps<AppRoutes>, 'href'> & {
  href: AppRoutes | Href<AppRoutes> | string;
};

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link<AppRoutes>
      target="_blank"
      {...rest}
      href={href as Href<AppRoutes>}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          event.preventDefault();
          if (typeof href === 'string') {
            await openBrowserAsync(href);
          } else {
            console.error('href is an object, not supported in native');
          }
        }
      }}
    />
  );
}