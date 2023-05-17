import styles from '@components/GutterContainer.module.scss';

interface GutterContainerProps {
  children: any;
  props?: any;
}

export default function GutterContainer({ children, props }: GutterContainerProps) {
  return (
    <div className={`${styles.container} ${props?.className}`} {...props}>
      {children}
    </div>
  );
}
