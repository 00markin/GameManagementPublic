import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomizableModal({ handleClose, open, title, children }) {

  return (
    <div>
      <Dialog open={open} onClose={handleClose} sx={{ minWidth: "30vw" }} >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{ minWidth: "30vw" }} >
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}