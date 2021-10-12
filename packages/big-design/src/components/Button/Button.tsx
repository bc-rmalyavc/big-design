import React, { ButtonHTMLAttributes, forwardRef, memo, Ref } from 'react';

import { MarginProps } from '../../mixins';
import { ProgressCircle } from '../ProgressCircle';

import { ContentWrapper, LoadingSpinnerWrapper, StyledButton } from './styled';

interface PrivateProps {
  forwardedRef: Ref<HTMLButtonElement>;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, MarginProps {
  actionType?: 'normal' | 'destructive';
  iconLeft?: React.ReactNode;
  iconOnly?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  mobileWidth?: 'auto' | '100%';
  variant?: 'primary' | 'secondary' | 'subtle';
}

const RawButton: React.FC<ButtonProps & PrivateProps> = memo(({ forwardedRef, ...props }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { disabled, isLoading, onClick } = props;

    if (onClick && !disabled && !isLoading) {
      onClick(event);
    }
  };

  const renderLoadingSpinner = () => {
    return (
      <LoadingSpinnerWrapper alignItems="center">
        <ProgressCircle size="xxSmall" />
      </LoadingSpinnerWrapper>
    );
  };

  return (
    <StyledButton className="bd-button" {...props} onClick={handleClick} ref={forwardedRef}>
      {props.isLoading ? renderLoadingSpinner() : null}
      <ContentWrapper isLoading={props.isLoading}>
        {!props.iconOnly && props.iconLeft}
        {props.iconOnly}
        {!props.iconOnly && props.children}
        {!props.iconOnly && props.iconRight}
      </ContentWrapper>
    </StyledButton>
  );
});

export const StyleableButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <RawButton {...props} forwardedRef={ref} />
));

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, style, ...props }, ref) => (
  <RawButton {...props} forwardedRef={ref} />
));

// Hello world

const defaultProps = {
  actionType: 'normal' as const,
  isLoading: false,
  mobileWidth: '100%' as const,
  variant: 'primary' as const,
};

Button.displayName = 'Button';
Button.defaultProps = { ...defaultProps };

StyleableButton.displayName = 'StyleableButton';
StyleableButton.defaultProps = { ...defaultProps };
