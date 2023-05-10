import { Button, DialogActions, FormControl, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { userFormValidation } from "./validations/formValidations";

export default function UserForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: Yup.object().shape(userFormValidation),
    onSubmit: async (value) => {
      await axios.post("/users", value);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        name: props.name,
        email: props.email,
        password: props.password,
        phone: props.phone,
      };
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormControl fullWidth>
          <Stack spacing={3} my={2}>
            <TextField
              label="Nome"
              {...formik.getFieldProps("name")}
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Email"
              {...formik.getFieldProps("email")}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Senha"
              {...formik.getFieldProps("password")}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Telefone"
              {...formik.getFieldProps("phone")}
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              margin="dense"
              variant="outlined"
            />
            <DialogActions>
              <Button variant='outlined' onClick={handleClose}>Cancelar</Button>
              <Button type="submit" variant="contained">Salvar</Button>
            </DialogActions>
          </Stack>
        </FormControl>
      </Form>
    </FormikProvider>
  );
}