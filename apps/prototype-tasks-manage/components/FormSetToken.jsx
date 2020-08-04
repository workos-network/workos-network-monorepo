/* --- Global --- */
import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";
import { withMonday, setToken } from "react-monday";
import { Box } from "theme-ui";

/**
 * @name FormSetToken
 * @description Set authorization token for Monday Queries.
 * @version 0.0.0
 */

const FormSetToken = ({ updateDefault, sx, ...props }) => {
  /* --- Form Hook State --- */
  const monday = withMonday();
  const { handleSubmit, register, errors, setValue, formState } = useForm();

  React.useEffect(() => {
    if (monday.token) {
      setValue("token", monday.token);
    }
  }, []);

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    if (values) {
      monday.setToken(values.token);
    }
  };

  /* --- Form : Component --- */
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box
        as="input"
        name="token"
        placeholder="Token"
        // register={register}
        ref={register({ required: true })}
        errors={errors}
        sx={{
          border: 1,
          borderColor: "solitude",
          borderStyle: "solid",
          borderRadius: 4,
          padding: 1,
          width: "100%",
          "&:focus": {
            borderColor: "charcoal",
          },
        }}
      />
      <Box
        as="button"
        sx={{ bg: "blue", color: "white", mt: 3, width: "100%" }}
      >
        <Box>{props.label}</Box>
        {/* {formState.isSubmitting & !formState.isSubmitted ? (
          <Box>{props.labelLoading}</Box>
        ) : (
          <Box>{props.label}</Box>
        )}

        {!formState.isSubmitting & formState.isSubmitted && (
          <Box>{props.labelComplete}</Box>
        )} */}
      </Box>
    </Box>
  );
};

FormSetToken.defaultProps = {
  sx: {},
  label: "Submit",
  labelLoading: "Loading...",
  labelComplete: "Complete",
};

FormSetToken.propTypes = {
  sx: PropTypes.object,
};

export default FormSetToken;
