interface TextProps {
  className?: string;
  hoverable?: boolean;
}

export const Text: React.FC<TextProps> = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};
