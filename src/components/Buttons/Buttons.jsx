/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Box235 } from "../../icons/Box235";

export const Buttons = ({
  label = "Label",
  type,
  stateProp,
  pill,
  size,
  icon,
  className,
  divClassName,
  override = <Box235 className="!relative !w-6 !h-6" color="#F6F7F8" />,
  divClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "primary",
    state: stateProp || "default",
    pill: pill || false,
    size: size || "small",
    icon: icon || "none",
  });

  return (
    <div
      className={`inline-flex items-center relative justify-center ${
        state.type === "secondary" && ["default", "selected"].includes(state.state)
          ? "border-semantic-colors-border-default"
          : state.state === "hovered" && state.type === "secondary"
          ? "border-semantic-colors-border-darker"
          : state.state === "focused"
          ? "border-semantic-colors-border-lighter"
          : ""
      } ${
        ["left", "none", "right"].includes(state.icon)
          ? "pt-[var(--component-tokens-button-v-padding)] pr-[var(--component-tokens-button-h-padding)] pb-[var(--component-tokens-button-v-padding)] pl-[var(--component-tokens-button-h-padding)]"
          : state.state === "default" && state.type === "primary" && state.size === "small" && state.icon === "only"
          ? "pt-[var(--component-tokens-button-v-padding)] pr-[var(--component-tokens-button-v-padding)] pb-[var(--component-tokens-button-v-padding)] pl-[var(--component-tokens-button-v-padding)]"
          : "pt-[var(--component-tokens-button-full-padding)] pr-[var(--component-tokens-button-full-padding)] pb-[var(--component-tokens-button-full-padding)] pl-[var(--component-tokens-button-full-padding)]"
      } ${
        state.pill
          ? "rounded-[var(--sizing-tokens-radius-FULL)]"
          : state.state === "default" &&
            state.type === "primary" &&
            state.size === "medium" &&
            !state.pill &&
            state.icon === "only"
          ? "rounded-[var(--sizing-tokens-radius-XS)]"
          : "rounded-[var(--component-tokens-button-radius)]"
      } ${
        (state.icon === "only" && state.size === "large" && state.type === "primary") ||
        (state.icon === "only" && state.size === "medium" && state.type === "primary") ||
        state.size === "small"
          ? "gap-1"
          : (state.icon === "left" && state.size === "medium") ||
            (state.icon === "none" && state.size === "medium") ||
            (state.icon === "only" && state.size === "medium" && state.type === "secondary") ||
            (state.icon === "right" && state.size === "medium")
          ? "gap-2"
          : "gap-3"
      } ${
        state.type === "primary" && ["default", "focused"].includes(state.state)
          ? "bg-[color:var(--semantic-colors-surface-default)]"
          : state.state === "hovered" && state.type === "primary"
          ? "bg-[color:var(--semantic-colors-surface-lighter)]"
          : state.type === "primary" && state.state === "selected"
          ? "bg-[color:var(--semantic-colors-surface-darker)]"
          : state.type === "secondary" && state.state === "selected"
          ? "bg-semantic-colors-surface-subtle"
          : state.state === "disabled"
          ? "bg-style-tokens-greyscale-surface-disabled"
          : "bg-style-tokens-greyscale-surface-default"
      } ${
        (state.state === "default" && state.type === "secondary") ||
        state.state === "focused" ||
        (state.state === "hovered" && state.type === "secondary") ||
        (state.state === "selected" && state.type === "secondary")
          ? "border-2 border-solid"
          : ""
      } ${
        state.state === "default" &&
        state.type === "primary" &&
        state.pill &&
        state.size === "large" &&
        state.icon === "only"
          ? "opacity-70"
          : ""
      } ${className}`}
      data-component-tokens-mode={state.size === "large" ? "large" : state.size === "medium" ? "medium" : undefined}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["none", "right"].includes(state.icon) && (
        <div
          className={`w-fit relative whitespace-nowrap ${
            state.size === "medium"
              ? "font-body-regular"
              : state.size === "small"
              ? "font-subtitle-regular"
              : "font-headline-regular"
          } ${
            state.size === "medium"
              ? "tracking-[var(--body-regular-letter-spacing)]"
              : state.size === "small"
              ? "tracking-[var(--subtitle-regular-letter-spacing)]"
              : "tracking-[var(--headline-regular-letter-spacing)]"
          } ${
            state.size === "medium"
              ? "[font-style:var(--body-regular-font-style)]"
              : state.size === "small"
              ? "[font-style:var(--subtitle-regular-font-style)]"
              : "[font-style:var(--headline-regular-font-style)]"
          } ${
            state.size === "medium"
              ? "text-[length:var(--body-regular-font-size)]"
              : state.size === "small"
              ? "text-[length:var(--subtitle-regular-font-size)]"
              : "text-[length:var(--headline-regular-font-size)]"
          } ${
            (state.state === "default" && state.type === "secondary") ||
            state.state === "focused" ||
            (state.state === "hovered" && state.type === "secondary") ||
            (state.state === "selected" && state.type === "secondary")
              ? "mt-[-2.00px]"
              : ""
          } ${
            (state.state === "default" && state.type === "secondary") ||
            (state.state === "focused" && state.type === "secondary") ||
            (state.state === "hovered" && state.type === "secondary") ||
            (state.state === "selected" && state.type === "secondary")
              ? "text-[color:var(--semantic-colors-text-label)]"
              : state.state === "disabled"
              ? "text-style-tokens-greyscale-text-negative"
              : "text-[color:var(--style-tokens-greyscale-surface-subtle)]"
          } ${
            state.size === "medium"
              ? "font-[number:var(--body-regular-font-weight)]"
              : state.size === "small"
              ? "font-[number:var(--subtitle-regular-font-weight)]"
              : "font-[number:var(--headline-regular-font-weight)]"
          } ${
            state.size === "medium"
              ? "leading-[var(--body-regular-line-height)]"
              : state.size === "small"
              ? "leading-[var(--subtitle-regular-line-height)]"
              : "leading-[var(--headline-regular-line-height)]"
          } ${state.icon === "right" ? divClassName : state.icon === "none" ? divClassNameOverride : undefined}`}
        >
          {label}
        </div>
      )}

      {state.icon === "right" && <>{override}</>}

      {["left", "only"].includes(state.icon) && (
        <Box235
          className={
            state.size === "medium"
              ? "!relative !w-5 !h-5"
              : state.size === "small"
              ? "!relative !w-3.5 !h-3.5"
              : "!relative !w-6 !h-6"
          }
          color={
            state.type === "primary" || (state.state === "disabled" && state.type === "secondary")
              ? "#F6F7F8"
              : "#1D4ED8"
          }
        />
      )}

      {state.icon === "left" && (
        <div
          className={`w-fit whitespace-nowrap relative ${
            state.size === "medium"
              ? "font-body-regular"
              : state.size === "small"
              ? "font-subtitle-regular"
              : "font-headline-regular"
          } ${
            state.size === "medium"
              ? "tracking-[var(--body-regular-letter-spacing)]"
              : state.size === "small"
              ? "tracking-[var(--subtitle-regular-letter-spacing)]"
              : "tracking-[var(--headline-regular-letter-spacing)]"
          } ${
            state.size === "medium"
              ? "[font-style:var(--body-regular-font-style)]"
              : state.size === "small"
              ? "[font-style:var(--subtitle-regular-font-style)]"
              : "[font-style:var(--headline-regular-font-style)]"
          } ${
            state.size === "medium"
              ? "text-[length:var(--body-regular-font-size)]"
              : state.size === "small"
              ? "text-[length:var(--subtitle-regular-font-size)]"
              : "text-[length:var(--headline-regular-font-size)]"
          } ${
            (state.state === "default" && state.type === "secondary") ||
            state.state === "focused" ||
            (state.state === "hovered" && state.type === "secondary") ||
            (state.state === "selected" && state.type === "secondary")
              ? "mt-[-2.00px]"
              : ""
          } ${
            (state.state === "default" && state.type === "secondary") ||
            (state.state === "focused" && state.type === "secondary") ||
            (state.state === "hovered" && state.type === "secondary") ||
            (state.state === "selected" && state.type === "secondary")
              ? "text-[color:var(--semantic-colors-text-label)]"
              : state.state === "disabled"
              ? "text-style-tokens-greyscale-text-negative"
              : "text-[color:var(--style-tokens-greyscale-surface-subtle)]"
          } ${
            state.size === "medium"
              ? "font-[number:var(--body-regular-font-weight)]"
              : state.size === "small"
              ? "font-[number:var(--subtitle-regular-font-weight)]"
              : "font-[number:var(--headline-regular-font-weight)]"
          } ${
            state.size === "medium"
              ? "leading-[var(--body-regular-line-height)]"
              : state.size === "small"
              ? "leading-[var(--subtitle-regular-line-height)]"
              : "leading-[var(--headline-regular-line-height)]"
          }`}
        >
          {label}
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: false,
          size: "large",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: false,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: true,
          size: "large",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: true,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: false,
          size: "large",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: false,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: true,
          size: "large",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: true,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "large",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "large",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: false,
          size: "large",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: false,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: true,
          size: "large",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: true,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: false,
          size: "large",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: false,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: true,
          size: "large",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: true,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "large",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "large",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: false,
          size: "large",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: false,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: true,
          size: "large",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: true,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: false,
          size: "large",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: false,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: true,
          size: "large",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: true,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "large",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "large",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: false,
          size: "large",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: false,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: true,
          size: "large",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: true,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: false,
          size: "large",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: false,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: true,
          size: "large",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: true,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "large",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "large",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "large",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "large" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "large",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: false,
          size: "medium",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: false,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: true,
          size: "medium",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: true,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: false,
          size: "medium",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: false,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: true,
          size: "medium",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: true,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "medium",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "medium",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: false,
          size: "medium",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: false,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: true,
          size: "medium",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: true,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: false,
          size: "medium",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: false,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: true,
          size: "medium",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: true,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "medium",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "medium",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: false,
          size: "medium",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: false,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: true,
          size: "medium",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: true,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: false,
          size: "medium",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: false,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: true,
          size: "medium",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: true,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "medium",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "medium",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: false,
          size: "medium",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: false,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: true,
          size: "medium",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: true,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: false,
          size: "medium",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: false,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: true,
          size: "medium",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: true,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "medium",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "medium",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "medium",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "medium" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "medium",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: false,
          size: "small",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: false,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: true,
          size: "small",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: true,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: false,
          size: "small",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: false,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "none",
          pill: true,
          size: "small",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "none",
          pill: true,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "small",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "small",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: false,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "none" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "none",
          pill: true,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: false,
          size: "small",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: false,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: true,
          size: "small",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: true,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: false,
          size: "small",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: false,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "right",
          pill: true,
          size: "small",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "right",
          pill: true,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "small",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "small",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: false,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "right" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "right",
          pill: true,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: false,
          size: "small",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: false,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: true,
          size: "small",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: true,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: false,
          size: "small",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: false,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "left",
          pill: true,
          size: "small",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "left",
          pill: true,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "small",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "small",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: false,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "left" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "left",
          pill: true,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: false,
          size: "small",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: false,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: true,
          size: "small",
          state: "hovered",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: true,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: false,
          size: "small",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: false,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "default" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          icon: "only",
          pill: true,
          size: "small",
          state: "hovered",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "hovered" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          icon: "only",
          pill: true,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "small",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "focused" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "small",
          state: "selected",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "small",
          state: "default",
          type: "primary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === false &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: false,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  if (
    state.icon === "only" &&
    state.pill === true &&
    state.size === "small" &&
    state.state === "selected" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          icon: "only",
          pill: true,
          size: "small",
          state: "default",
          type: "secondary",
        };
    }
  }

  return state;
}

Buttons.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  stateProp: PropTypes.oneOf(["default", "focused", "selected", "hovered", "disabled"]),
  pill: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  icon: PropTypes.oneOf(["none", "right", "only", "left"]),
};
