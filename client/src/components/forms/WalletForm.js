import { Button, DialogActions, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { walletFormValidation } from "./validations/formValidations";

export default function WalletForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      active: true,
    },
    validationSchema: Yup.object().shape(walletFormValidation),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/wallets", values);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    mapPropsToValues: (props) => {
      return {
        active: props.active,
      };
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormControl fullWidth>
          <Stack spacing={3} my={2}>
            <TextField
              label="Ativo"
              select
              {...formik.getFieldProps("active")}
              error={Boolean(formik.touched.active && formik.errors.active)}
              helperText={formik.touched.active && formik.errors.active}
              margin="dense"
              variant="outlined"
            >
              <MenuItem value={true}>Sim</MenuItem>
              <MenuItem value={false}>Não</MenuItem>
            </TextField>
          </Stack>
        </FormControl>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose}>Cancelar</Button>
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Form>
    </FormikProvider>
  );
}