import { Button, DialogActions, FormControl, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { settingFormValidation } from "./validations/formValidations";

export default function SettingForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      type: "",
      value: "",
    },
    validationSchema: Yup.object().shape(settingFormValidation),
    onSubmit: async (values) => {
      await axios.post("/settings", values);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        type: props.type,
        value: props.value,
      };
    }
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormControl fullWidth>
          <Stack spacing={3} my={2} >
            <TextField
              label="Tipo"
              {...formik.getFieldProps("type")}
              error={Boolean(formik.touched.type && formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
            />
            <TextField
              label="Valor"
              {...formik.getFieldProps("value")}
              error={Boolean(formik.touched.value && formik.errors.value)}
              helperText={formik.touched.value && formik.errors.value}
            />
          </Stack>
        </FormControl>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose}>Cancelar</Button>
          <Button type="submit" variant="contained">Salvar</Button>
        </DialogActions>
      </Form>
    </FormikProvider>
  );
}