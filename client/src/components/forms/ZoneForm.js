import { Button, DialogActions, FormControl, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { zoneFormValidation } from "./validations/formValidations";

export default function ZoneForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      identifier_key: "",
      region: "",
      city: "",
    },
    validationSchema: Yup.object().shape(zoneFormValidation),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/zones", values);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    mapPropsToValues: (props) => {
      return {
        identifier_key: props.identifier_key,
        region: props.region,
        city: props.city,
      };
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <FormControl fullWidth>
          <Stack spacing={3} my={2}>
            <TextField
              label="Identificador"
              {...formik.getFieldProps("identifier_key")}
              error={Boolean(formik.touched.identifier_key && formik.errors.identifier_key)}
              helperText={formik.touched.identifier_key && formik.errors.identifier_key}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Região"
              {...formik.getFieldProps("region")}
              error={Boolean(formik.touched.region && formik.errors.region)}
              helperText={formik.touched.region && formik.errors.region}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Cidade"
              {...formik.getFieldProps("city")}
              error={Boolean(formik.touched.city && formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
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