import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "media-id": string;
        autoPlay?: boolean | string;
        muted?: boolean | string;
        silentAutoPlayOnly?: boolean | string;
        aspect?: string;
        // Add any other Wistia attributes you use
      };
    }
  }
}