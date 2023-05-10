import * as yup from "yup";

export const gameFormValidation = {
  gameTemplateId: yup.string().required("Template é obrigatório"),
  lotteryId: yup.string().required("Loteria é obrigatório"),
  executedAt: yup.string().required("Data de Execução é obrigatório"),
  expiresAt: yup.string().required("Data de Expiração é obrigatório"),
};

export const gameTemplateFormValidation = {
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  lotteryId: yup.string().required("Loteria é obrigatório"),
};

export const lotteryFormValidation = {
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
};
export const partnerFormValidation = {
  name: yup.string().required("Nome é obrigatório"),
  document_value: yup.string().required("Documento é obrigatório"),
  document_type: yup.string().required("Tipo de Documento é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  is_active: yup.string().required("Status é obrigatório"),
};

export const roleFormValidation = {
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
};

export const settingFormValidation = {
  value: yup.string().required("Valor é obrigatório"),
  type: yup.string().required("Tipo é obrigatório"),
};

export const shopFormValidation = {
  name: yup.string().required("Nome é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  type: yup.string().required("Tipo é obrigatório"),
  qrcode: yup.string().required("QRCode é obrigatório"),
};

export const statementFormValidation = {
  amount: yup.string().required("Valor é obrigatório"),
};

export const userFormValidation = {
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
};

export const ticketFormValidation = {
  value: yup.string().required("Valor é obrigatório"),
  bet: yup.string().required("Aposta é obrigatório"),
  valid_until: yup.string().required("Validade é obrigatório"),
};

export const walletFormValidation = {
  active: yup.string().required("Status é obrigatório"),
}

export const zoneFormValidation = {
  identifier_key: yup.string().required("Identificador é obrigatório"),
  region: yup.string().required("Região é obrigatório"),
  city: yup.string().required("Cidade é obrigatório"),
};
