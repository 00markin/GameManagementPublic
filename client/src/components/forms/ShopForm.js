import { Button, DialogActions, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { shopFormValidation } from "./validations/formValidations";

export default function ShopForm({ handleClose }) {

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      type: "",
      qrcode: "",
    },
    validationSchema: Yup.object().shape(shopFormValidation),
    onSubmit: async (value) => {
      await axios.post("/shops", value);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        name: props.name,
        phone: props.phone,
        type: props.type,
        qrcode: props.qrcode,
      };
    }
  })

  return (
    <FormikProvider value={formik}>
      <FormControl fullWidth>
        <Form>
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
              label="Telefone"
              {...formik.getFieldProps("phone")}
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Tipo"
              select
              {...formik.getFieldProps("type")}
              error={Boolean(formik.touched.type && formik.errors.type)}
              helperText={formik.touched.type && formik.errors.type}
              margin="dense"
              variant="outlined"
            >
              <MenuItem value="lottery">Loteria</MenuItem>
              <MenuItem value="shop">Loja</MenuItem>
            </TextField>
            <TextField
              label="QRCode"
              {...formik.getFieldProps("qrcode")}
              error={Boolean(formik.touched.qrcode && formik.errors.qrcode)}
              helperText={formik.touched.qrcode && formik.errors.qrcode}
              margin="dense"
              variant="outlined"
            />
          </Stack>
          <DialogActions>
            <Button variant='outlined' onClick={handleClose}>Cancelar</Button>
            <Button type="submit" variant="contained">Salvar</Button>
          </DialogActions>
        </Form>
      </FormControl>
    </FormikProvider>
  );
}