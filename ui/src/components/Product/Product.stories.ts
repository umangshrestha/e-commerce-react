import type { Meta, StoryObj } from "@storybook/react";
import { Product } from "./Product";

const meta = {
  title: "Product",
  component: Product,
  tags: ["autodocs"],
} as Meta<typeof Product>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: 12.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXM1f7aFP4rKF-wJZ2juCb-7JcQCspEYUVwLK4JrpBdVtRB-ELAqpUCmkg6znfoG4fh8&usqp=CAU",
    quantity: 10,
    description: "Fresh, skinless chicken breast fillets",
    name: "Chicken Breast",
    rating: 4.5,
    badgeText: undefined,
    onClick: () => {},
  },
};

export const WithBadge: Story = {
  args: {
    price: 12.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXM1f7aFP4rKF-wJZ2juCb-7JcQCspEYUVwLK4JrpBdVtRB-ELAqpUCmkg6znfoG4fh8&usqp=CAU",
    quantity: 10,
    description: "Fresh, skinless chicken breast fillets",
    name: "Chicken Breast",
    rating: 4.5,
    badgeText: "NEW",
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    price: 12.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXM1f7aFP4rKF-wJZ2juCb-7JcQCspEYUVwLK4JrpBdVtRB-ELAqpUCmkg6znfoG4fh8&usqp=CAU",
    quantity: 0,
    description: "Fresh, skinless chicken breast fillets",
    name: "Chicken Breast",
    rating: 4.5,
    badgeText: undefined,
    onClick: () => {},
  },
};
