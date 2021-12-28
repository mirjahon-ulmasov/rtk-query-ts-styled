interface ContainerProps {
  className?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
  width?: string;
  overflow?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};
