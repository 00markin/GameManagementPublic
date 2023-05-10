import { Button, DialogActions, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { gameTemplateFormValidation } from "./validations/formValidations";
import * as Yup from "yup";
import axios from "axios";

export default function GameTemplateForm({ handleClose, lotteriesOptions }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      lotteryId: "",
    },
    validationSchema: Yup.object().shape(gameTemplateFormValidation),
    onSubmit: async (values) => {
      await axios.post("/game-templates", values);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        name: props.name,
        description: props.description,
        lotteryId: props.lotteryId,
      };
    }
  });

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
              label="Descrição"
              {...formik.getFieldProps("description")}
              error={Boolean(formik.touched.description && formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              margin="dense"
              variant="outlined"
            />
            <TextField
              label="Loteria"
              select
              {...formik.getFieldProps("lotteryId")}
              error={Boolean(formik.touched.lotteryId && formik.errors.lotteryId)}
              helperText={formik.touched.lotteryId && formik.errors.lotteryId}
              margin="dense"
              variant="outlined"
            >
              {lotteriesOptions?.length > 0 && lotteriesOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" type="submit">Salvar</Button>
          </DialogActions>
        </Form>
      </FormControl>
    </FormikProvider>
  );
}