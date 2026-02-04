import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": {
        "media-id"?: string;
        autoPlay?: boolean;
        muted?: boolean;
        className?: string;
      };
    }
  }
}

export {};
