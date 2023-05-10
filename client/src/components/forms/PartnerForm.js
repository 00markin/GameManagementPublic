import { partnerFormValidation } from './validations/formValidations';
import { Button, DialogActions, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function PartnerForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      name: "",
      document_value: "",
      document_type: "",
      email: "",
      phone: "",
      is_active: "",
    },
    validationSchema: Yup.object().shape(partnerFormValidation),
    onSubmit: async (values) => {
      await axios.post("/partners", values);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        name: props.name,
        document_value: props.document_value,
        document_type: props.document_type,
        email: props.email,
        phone: props.phone,
        is_active: props.is_active,
      };
    }
  });



  return (
    <FormikProvider value={formik}>
      <Form>
        <FormControl fullWidth>
          <Stack spacing={3} my={2} >
            <TextField
              label="Nome"
              {...formik.getFieldProps("name")}
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="Documento"
              {...formik.getFieldProps("document_value")}
              error={Boolean(formik.touched.document_value && formik.errors.document_value)}
              helperText={formik.touched.document_value && formik.errors.document_value}
            />
            <TextField
              label="Tipo de Documento"
              {...formik.getFieldProps("document_type")}
              error={Boolean(formik.touched.document_type && formik.errors.document_type)}
              helperText={formik.touched.document_type && formik.errors.document_type}
            />
            <TextField
              label="Email"
              {...formik.getFieldProps("email")}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Telefone"
              {...formik.getFieldProps("phone")}
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              label="Ativo"
              select
              {...formik.getFieldProps("is_active")}
              error={Boolean(formik.touched.is_active && formik.errors.is_active)}
              helperText={formik.touched.is_active && formik.errors.is_active}
            >
              <MenuItem value="true">Sim</MenuItem>
              <MenuItem value="false">Não</MenuItem>
            </TextField>
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