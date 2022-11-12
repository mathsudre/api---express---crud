import * as yup from "yup";

const editSerializer = yup.object().shape({
  name: yup.string().required(),
});

export { editSerializer };
