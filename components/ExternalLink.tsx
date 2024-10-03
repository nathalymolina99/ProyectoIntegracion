import React from 'react';
import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';

// Cambiar el tipo 'href' para aceptar cualquier tipo de string o objeto
type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string | object };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href as string); // Asegúrate de que 'href' sea un string aquí
        }
      }}
    />
  );
}
