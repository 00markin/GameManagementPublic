import { Button, DialogActions, FormControl, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { roleFormValidation } from "./validations/formValidations";
import * as Yup from "yup";
import axios from "axios";

export default function RoleForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object().shape(roleFormValidation),
    onSubmit: async (values) => {
      await axios.post("/roles", values);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        title: props.title,
        description: props.description,
      };
    }
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormControl fullWidth>
          <Stack spacing={3} my={2} >
            <TextField
              label="Título"
              {...formik.getFieldProps("title")}
              error={Boolean(formik.touched.title && formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              label="Descrição"
              {...formik.getFieldProps("description")}
              error={Boolean(formik.touched.description && formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Stack>
        </FormControl>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" variant="contained">Salvar</Button>
        </DialogActions>
      </Form>
    </FormikProvider>
  );
}