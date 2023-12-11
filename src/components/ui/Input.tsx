import { cva, type VariantProps } from "class-variance-authority";

const input = cva("input w-full", {
  variants: {
    intent: {
      primary: ["bg-white/80", "placeholder:text-gray-700"],
    },
    inputSize: {
      medium: ["text-sm", "h-14", "px-4"],
    },
    radius: {
      xl: ["rounded-xl"],
    },
  },
  compoundVariants: [
    { intent: "primary", inputSize: "medium", class: "uppercase" },
  ],
  defaultVariants: {
    intent: "primary",
    inputSize: "medium",
    radius: "xl",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

const Button: React.FC<InputProps> = ({
  className,
  intent,
  inputSize,
  ...rest
}) => <input className={input({ intent, inputSize, className })} {...rest} />;

export default Button;
