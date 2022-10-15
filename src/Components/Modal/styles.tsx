import { styled, keyframes } from '@stitches/react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  });
  
  const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
  });
  
  const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  });
  
  const StyledContent = styled(AlertDialogPrimitive.Content, {
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    maxWidth: '500px',
    maxHeight: '85vh',
    zIndex: '9999',
    padding: 25,
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&:focus': { outline: 'none' },
  });
  
  function Content({ children } : any, props : any) {
    return (
      <AlertDialogPrimitive.Portal>
        <StyledOverlay  />
        <StyledContent {...props}>{children}</StyledContent>
      </AlertDialogPrimitive.Portal>
    );
  }
  
  const StyledTitle = styled(AlertDialogPrimitive.Title, {
    margin: 0,
    fontSize: 17,
    fontWeight: 500,
  });
  
  const StyledDescription = styled(AlertDialogPrimitive.Description, {
    marginBottom: 20,
    fontSize: 15,
    lineHeight: 1.5,
  });
  
  export const AlertDialog = AlertDialogPrimitive.Root;
  export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
  export const AlertDialogContent = Content;
  export const AlertDialogTitle = StyledTitle;
  export const AlertDialogDescription = StyledDescription;
  export const AlertDialogAction = AlertDialogPrimitive.Action;
  export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
  
  export const Flex = styled('div', { display: 'flex' });
  
  export const Button = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    border: 'none',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
  
    variants: {
      variant: {
        violet: {
          backgroundColor: 'white',
          '&:focus': { boxShadow: 'none' },
        },
      },
    },
  
    defaultVariants: {
      variant: 'violet',
    },
  });