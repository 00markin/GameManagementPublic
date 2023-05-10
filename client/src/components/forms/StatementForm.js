import { Button, DialogActions, FormControl, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { statementFormValidation } from "./validations/formValidations";

export default function StatementForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema: Yup.object().shape(statementFormValidation),
    onSubmit: async (values) => {
      await axios.post("/statements", values);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        amount: props.amount,
      };
    }
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormControl fullWidth>
          <Stack spacing={3} my={2}>
            <TextField
              label="Valor"
              {...formik.getFieldProps("amount")}
              error={Boolean(formik.touched.amount && formik.errors.amount)}
              helperText={formik.touched.amount && formik.errors.amount}
              margin="dense"
              variant="outlined"
            />
            <DialogActions>
              <Button variant='outlined' onClick={handleClose}>Cancelar</Button>
              <Button type="submit" variant="contained">
                Salvar
              </Button>
            </DialogActions>
          </Stack>
        </FormControl>
      </Form>
    </FormikProvider>
  );
}