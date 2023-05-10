import { Button, DialogActions, FormControl, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ticketFormValidation } from "./validations/formValidations";
import CustomDatePicker from "../CustomDatePicker";

export default function TicketForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      value: "",
      bet: "",
      valid_until: "",
    },
    validationSchema: Yup.object().shape(ticketFormValidation),
    onSubmit: async (values) => {
      await axios.post("/tickets", values);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        value: props.value,
        bet: props.bet,
        valid_until: props.valid_until,
      };
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormControl fullWidth>
          <Stack spacing={3} my={2}>
            <TextField
              label="Valor"
              {...formik.getFieldProps("value")}
              error={Boolean(formik.touched.value && formik.errors.value)}
              helperText={formik.touched.value && formik.errors.value}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Aposta"
              {...formik.getFieldProps("bet")}
              error={Boolean(formik.touched.bet && formik.errors.bet)}
              helperText={formik.touched.bet && formik.errors.bet}
              margin="dense"
              variant="outlined"
            />
            <CustomDatePicker
              label="Validade"
              {...formik.getFieldProps("valid_until")}
              error={Boolean(formik.touched.valid_until && formik.errors.valid_until)}
              helperText={formik.touched.valid_until && formik.errors.valid_until}
              margin="dense"
              variant="outlined"
            />
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

