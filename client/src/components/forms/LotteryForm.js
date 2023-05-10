import { Button, DialogActions, FormControl, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { lotteryFormValidation } from "./validations/formValidations";
import * as Yup from "yup";
import axios from "axios";

export default function LotteryForm({ handleClose }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object().shape(lotteryFormValidation),
    onSubmit: async (values) => {
      await axios.post("/lotteries", values);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        name: props.name,
        description: props.description,
      };
    }
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
              label="Descrição"
              {...formik.getFieldProps("description")}
              error={Boolean(formik.touched.description && formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
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