/* --- Global --- */
import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";
import { useMondayUpdateCreateMutation } from "react-monday";
import { useMondayBoardsQuery } from "react-monday";
import { withMonday, setToken } from "react-monday";
import { Box } from "theme-ui";

/**
 * @name FormModalTokenSet
 * @description Set authorization token for Monday Queries
 * @version 0.0.0
 */

const FormModalTokenSet = ({ updateDefault, sx, ...props }) => {
  const monday = withMonday();

  React.useEffect(() => {
    if (monday.token) {
      setValue("token", monday.token);
    }
  }, []);

  React.useEffect(() => {
    console.log(monday, "mondaymonday");
  }, [monday]);

  /* --- Form Hook State --- */
  const { handleSubmit, register, errors, setValue, formState } = useForm();

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    console.log(values, "setToken");
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

FormModalTokenSet.defaultProps = {
  sx: {},
  label: "Submit",
  labelLoading: "Loading...",
  labelComplete: "Complete",
};

FormModalTokenSet.propTypes = {
  sx: PropTypes.object,
};

export default FormModalTokenSet;
