import { TypePrimaryStateWrapper } from ".";

export default {
  title: "Components/TypePrimaryStateWrapper",
  component: TypePrimaryStateWrapper,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["default", "focused", "selected", "hovered", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    icon: {
      options: ["none", "right", "only", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Label",
    type: "primary",
    stateProp: "default",
    pill: true,
    size: "large",
    icon: "none",
    className: {},
  },
};
