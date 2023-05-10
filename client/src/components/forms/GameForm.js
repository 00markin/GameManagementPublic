import { Button, DialogActions, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { gameFormValidation } from "./validations/formValidations";
import * as Yup from "yup";
import CustomDatePicker from "../CustomDatePicker";
import axios from "axios";

export default function GameForm({ handleClose, gameTemplateOptions, lotteriesOptions }) {

  const defaultDate = new Date().toISOString();
  const formik = useFormik({
    initialValues: {
      executedAt: defaultDate,
      expiresAt: defaultDate,
      gameTemplateId: "",
      lotteryId: "",
    },
    validationSchema: Yup.object().shape(gameFormValidation),
    onSubmit: async (values) => {
      await axios.post("/games", values);
      handleClose();
    },
    mapPropsToValues: (props) => {
      return {
        executedAt: props.executedAt,
        expiresAt: props.expiresAt,
        gameTemplateId: props.gameTemplateId,
        lotteryId: props.lotteryId,
      };
    }
  });

  return (
    <FormikProvider value={formik}>
      <FormControl fullWidth>
        <Form>
          <Stack spacing={3} my={2}>
            <CustomDatePicker date={formik.values.executedAt} setDate={formik.setFieldValue} name="executedAt" label="Data de Execução" />
            <CustomDatePicker date={formik.values.expiresAt} setDate={formik.setFieldValue} name="expiresAt" label="Data de Expiração" />
            <TextField
              label="Template"
              select
              {...formik.getFieldProps("gameTemplateId")}
              error={Boolean(formik.touched.gameTemplateId && formik.errors.gameTemplateId)}
              helperText={formik.touched.gameTemplateId && formik.errors.gameTemplateId}
              margin="dense"
              variant="outlined"
            >
              {gameTemplateOptions?.length > 0 && gameTemplateOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.type}
                </MenuItem>
              ))}
            </TextField>
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
            <DialogActions>
              <Button variant='outlined' onClick={handleClose}>Cancelar</Button>
              <Button variant='contained' type='submit'>Confirmar</Button>
            </DialogActions>
          </Stack>
        </Form>
      </FormControl>
    </FormikProvider >
  );
}