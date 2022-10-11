import {ModalProps} from '@Interfaces/index';

import {AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogTitle, 
  AlertDialogTrigger, 
  Button, 
  Flex
} from './styles';

export default function Modal ({children, title, cancelLabel, confirmLabel, label, isOpen} : ModalProps) {
    return  <AlertDialog open={isOpen}>
    <AlertDialogTrigger asChild>
      <Button>{label}</Button>
    </AlertDialogTrigger>
    <AlertDialogContent >
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>
        {children}
      </AlertDialogDescription>
      <Flex css={{ justifyContent: 'flex-end' }}>
        {cancelLabel && (
          <AlertDialogCancel asChild>
          <Button variant="violet" css={{ marginRight: 25 }}>
            {cancelLabel}
          </Button>
        </AlertDialogCancel>
        )}
        {confirmLabel && (
          <AlertDialogAction asChild>
            <Button variant="violet">{confirmLabel}</Button>
          </AlertDialogAction>
        )}
      </Flex>
    </AlertDialogContent>
  </AlertDialog>
};

