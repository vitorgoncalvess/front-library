// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import plugin from "tailwindcss/plugin";

function vsg() {
  return plugin(({ addComponents }) => {
    const keyframes = {
      "@keyframes modal-enter": {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      "@keyframes modal-exit": {
        from: {
          opacity: 1,
        },
        to: {
          opacity: 0,
        },
      },
      "@keyframes modal-content-enter": {
        from: {
          transform: "scale(1.05)",
          opacity: 0,
        },
        to: {
          transform: "initial",
          opacity: 1,
        },
      },
      "@keyframes modal-content-exit": {
        from: {
          transform: "scale(1)",
          opacity: 1,
        },
        to: {
          transform: "scale(1.05)",
          opacity: 0,
        },
      },
    };
    const animations = {
      ".modal-enter": {
        animation: "modal-enter 0.2s forwards linear",
      },
      ".modal-exit": {
        animation: "modal-exit 0.2s forwards linear",
      },
      ".modal-content-enter": {
        animation: "modal-content-enter 0.25s forwards linear",
      },
      ".modal-content-exit": {
        animation: "modal-content-exit 0.15s forwards linear",
      },
    };

    addComponents(keyframes);
    addComponents(animations);
  });
}

export default vsg;
